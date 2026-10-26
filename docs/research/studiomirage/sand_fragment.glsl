
			uniform sampler2D normalMap;
			uniform sampler2D uColorTimeline;
			uniform float uLightBase;
			uniform float uLightHalfLen;
			uniform float uLightIntensity;
			uniform float uLightRange;
			uniform float uLightExponent;
			uniform float uLightAngular;
			uniform float uLightFloor;
			uniform float uVideoTimes[10];
			uniform float uFrameStart[10];
			uniform float uFrameCount[10];
			uniform float uTotalFrames;
			uniform float uUniformMode;
			uniform float uUniformFrameStart;
			uniform float uUniformFrameCount;
			uniform float uUniformTime;
			uniform float ulightMapRotation;
			uniform float uSaturation;
			uniform float uGroundFade;
			uniform vec2 normalMapRepeat;
			uniform vec2 uLightDirs[10];
			uniform vec3 uReliefColorHigh;
			uniform vec3 uReliefColorLow;
			uniform float uReliefTint;

			// ─── Sand ───
			uniform float uTime;
			uniform float uGrainScale;
			uniform float uGrainIntensity;
			uniform float uGrainGate;
			uniform float uSparkleScale;
			uniform float uSparkleIntensity;
			uniform float uSparkleSpeed;

			varying vec2 vUv;
			varying vec3 vNormal;

			const float TAU = 6.28318530718;
			const vec3 LUMA = vec3(0.299, 0.587, 0.114);
			// One 8-bit code step in LINEAR light. The composer's render targets are
			// SRGB8_ALPHA8, and near black that curve is a line of slope 1/12.92 — so a
			// code step is worth 1/(255*12.92) down there, not 1/255.
			const float LINEAR_LSB = 1.0 / (255.0 * 12.92);

			/** Cheap 2D→1D hash (Dave Hoskins) — no sin(), mobile-friendly. */
			float hash12(vec2 p) {
				vec3 p3 = fract(vec3(p.xyx) * 0.1031);
				p3 += dot(p3, p3.yzx + 33.33);
				return fract((p3.x + p3.y) * p3.z);
			}

			/** Interleaved Gradient Noise (Jimenez 2014) — flatter than a hash as dither. */
			float ign(vec2 p) {
				return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715))));
			}

			/** The wall's footprint as a formula — float32, so the gradient cannot band. */
			float sampleLightMap(vec2 uv) {
				float dy = uLightBase - uv.y;            // out from the wall
				if (dy < 0.0) return 0.0;                // nothing behind it
				// Distance to the SEGMENT, not to a point: close in, an extended emitter
				// lights along its own width, which is what fills the gaps between walls.
				float lx = max(abs(uv.x - 0.5) - uLightHalfLen, 0.0);
				float r2 = max(lx * lx + dy * dy, 1e-12);
				float invr = inversesqrt(r2);
				float light = uLightIntensity
					* pow(1.0 + r2 * invr / uLightRange, -uLightExponent)
					* pow(1.0 - min(lx * invr, 1.0), uLightAngular); // lx*invr = sin(angle off-axis)
				return max(light - uLightFloor, 0.0);
			}

			void main() {
				// uGroundFade is a uniform, so this branch costs nothing across the draw.
				if (uGroundFade >= 1.0) {
					gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
					return;
				}

				vec3 normalSample = texture2D(normalMap, vUv * normalMapRepeat).xyz;
				normalSample.xy *= 1.5;
				normalSample = normalize(normalSample);

				vec3 finalNormal = normalize(mix(normalize(vNormal), normalSample, 0.5));
				vec3 lightDir = normalize(vec3(1.0, 0.5, 1.0)); // constant-folded

				// One dot feeds both the relief tint and the light falloff.
				float ndotl = max(dot(finalNormal, lightDir), 0.0);
				vec3 reliefTint = mix(uReliefColorLow, uReliefColorHigh, min(ndotl, 1.0));
				float ni = ndotl * 1.03;
				float ni2 = ni * ni;
				float normalFalloff = ni2 * ni2 * ni; // ni^5, hoisted out of the loop

				// Uniform mode puts one project's frame on all ten walls: fetched once,
				// and only when it is actually on — uUniformMode is a uniform.
				vec3 uniformColor = vec3(0.0);
				if (uUniformMode > 0.5) {
					float frame = uUniformFrameStart + uUniformTime * max(uUniformFrameCount - 1.0, 0.0);
					uniformColor = texture2D(uColorTimeline, vec2(0.5, (frame + 0.5) / uTotalFrames)).rgb;
				}

				// Vector-times-matrix, NOT matrix-times-vector: the two are transposes of
				// each other, and swapping them flips the direction of rotation.
				float rs = sin(ulightMapRotation);
				float rc = cos(ulightMapRotation);
				vec2 uvCentered = (vUv - 0.5) * mat2(rc, -rs, rs, rc);

				vec3 lightSum = vec3(0.0);
				for (int i = 0; i < 10; i++) {
					vec2 dir = uLightDirs[i];
					vec2 uvRotated = vec2(
						dot(uvCentered, vec2(dir.x, -dir.y)),
						dot(uvCentered, vec2(dir.y,  dir.x))
					) + 0.5;

					vec3 sampledColor = uniformColor;
					if (uUniformMode <= 0.5) {
						// uVideoTimes[i] is wall i's own playback fraction [0..1] — map into
						// wall i's own frame range, not the shared texture height.
						float frame = uFrameStart[i] + uVideoTimes[i] * max(uFrameCount[i] - 1.0, 0.0);
						sampledColor = texture2D(uColorTimeline, vec2(0.5, (frame + 0.5) / uTotalFrames)).rgb;
					}

					lightSum += sampleLightMap(uvRotated) * 3.0 * normalFalloff
						* pow(sampledColor * 2.0, vec3(1.4));
				}

				// Saturation is linear in colour, so one pass over the sum is exactly ten
				// passes inside the loop — 9 dots and 9 mixes saved.
				vec3 totalLight = mix(vec3(dot(lightSum, LUMA)), lightSum, uSaturation);

				totalLight *= mix(vec3(1.0), reliefTint, uReliefTint);

				// GRAIN: high-freq static noise, multiplicative around 1.0
				if (uGrainIntensity > 0.0) {
					float grain = hash12(floor(vUv * uGrainScale));
					float gate = clamp(totalLight.g * uGrainGate, 0.0, 1.0);
					totalLight *= 1.0 + (grain - 0.5) * uGrainIntensity * gate;
				}

				// SPARKLE: sparse grid of glints (~1.5% of cells) blinking on their own
				// phase. Pricier than grain — 3 hashes, a sin(), a length() — so this is
				// the one disabled on the mobile tier.
				if (uSparkleIntensity > 0.0) {
					vec2 sparkleCoord = vUv * uSparkleScale;
					vec2 cell = floor(sparkleCoord);
					// Three hash12 and NOT one hash32, which is ~34 ops cheaper on paper:
					// measured, it cost +0.25ms. hash32 holds a vec3 live across the whole
					// block and its mixing step needs several vec3 temporaries at once,
					// where three hash12 each peak narrowly and die. This shader is bound
					// by occupancy, not by arithmetic — count registers here, not ops.
					float h = hash12(cell);
					float sparkleMask = step(0.985, h); // sparse pick, branchless

					// Jitter the glint inside its cell so the grid doesn't show.
					vec2 jitter = vec2(hash12(cell + 17.31), hash12(cell + 53.17)) - 0.5;
					float point = smoothstep(0.30, 0.0, length(fract(sparkleCoord) - 0.5 - jitter * 0.5));

					float twinkle = sin(uTime * uSparkleSpeed * TAU * 0.25 + h * 100.0) * 0.5 + 0.5;
					twinkle *= twinkle;
					twinkle *= twinkle;
					twinkle *= twinkle; // ^8 — short pulse, long rest

					// Follows local light: no sparkle in shadow.
					float sparkle = sparkleMask * point * twinkle * clamp(dot(totalLight, LUMA), 0.0, 1.5);
					totalLight += vec3(1.0, 0.97, 0.9) * sparkle * uSparkleIntensity; // warm-white, additive
				}

				// Output dither: the composer's targets are 8-bit, so this gradient is
				// requantized on the way out. ±½ LSB of noise is the exact inverse of that
				// rounding in expectation. Ahead of the fade, so a blackout stays black.
				totalLight += (ign(gl_FragCoord.xy) - 0.5) * LINEAR_LSB;

				totalLight *= (1.0 - uGroundFade); // fade to black, cheaper than mix()

				gl_FragColor = vec4(totalLight, 1.0);
			}
		