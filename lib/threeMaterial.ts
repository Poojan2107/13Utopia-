import * as THREE from "three";

/** Sitewide 3D titanium palette — matches homepage Plus3DCanvas. */
export const TITANIUM = {
  one: 0x1a1614,
  three: 0x161311,
  emissive: 0x0a0705,
  roughness: 0.13,
  metalness: 0.93,
} as const;

export function createTitaniumMaterial(
  variant: "one" | "three" = "one",
  extras: THREE.MeshStandardMaterialParameters = {},
) {
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color(variant === "one" ? TITANIUM.one : TITANIUM.three),
    roughness: TITANIUM.roughness,
    metalness: TITANIUM.metalness,
    emissive: new THREE.Color(TITANIUM.emissive),
    ...extras,
  });
}
