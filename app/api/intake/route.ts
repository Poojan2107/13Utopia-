import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DATA_DIR = path.join(process.cwd(), "data");
const STORE = path.join(DATA_DIR, "launch-intake.json");
const SEED = path.join(DATA_DIR, "launch-intake.seed.json");

const isVercel = Boolean(process.env.VERCEL);

async function readSeed() {
  const seed = await fs.readFile(SEED, "utf8");
  return JSON.parse(seed);
}

async function readStore() {
  try {
    const raw = await fs.readFile(STORE, "utf8");
    return JSON.parse(raw);
  } catch {
    return readSeed();
  }
}

async function writeStore(data: unknown) {
  if (isVercel) {
    // Serverless filesystem is ephemeral — client keeps localStorage + Export.
    return { persisted: false as const };
  }
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(STORE, JSON.stringify(data, null, 2), "utf8");
  return { persisted: true as const };
}

export async function GET() {
  try {
    const data = await readStore();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to read intake store", detail: String(err) },
      { status: 500 },
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    if (!body || typeof body !== "object" || !Array.isArray(body.fields)) {
      return NextResponse.json(
        { error: "Invalid payload — expected intake object with fields[]" },
        { status: 400 },
      );
    }
    body.updatedAt = new Date().toISOString();
    const result = await writeStore(body);
    return NextResponse.json({
      ok: true,
      persisted: result.persisted,
      updatedAt: body.updatedAt,
      updatedBy: body.updatedBy ?? null,
      note: result.persisted
        ? undefined
        : "Saved acknowledged — on Vercel use device backup / Export JSON for durable copy.",
    });
  } catch (err) {
    return NextResponse.json(
      {
        error: "Failed to save intake",
        detail: String(err),
      },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = await readStore();

    if (body?.type === "suggestion") {
      const suggestion = {
        id: `s_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
        author: String(body.author || "Anonymous").slice(0, 80),
        fieldId: body.fieldId ? String(body.fieldId) : null,
        section: body.section ? String(body.section) : null,
        text: String(body.text || "").slice(0, 4000),
        createdAt: new Date().toISOString(),
        status: "open",
      };
      if (!suggestion.text.trim()) {
        return NextResponse.json({ error: "Empty suggestion" }, { status: 400 });
      }
      data.suggestions = [suggestion, ...(data.suggestions || [])];
      data.activity = [
        {
          at: suggestion.createdAt,
          by: suggestion.author,
          action: "suggestion",
          detail: suggestion.text.slice(0, 120),
        },
        ...(data.activity || []),
      ].slice(0, 100);
      data.updatedAt = suggestion.createdAt;
      data.updatedBy = suggestion.author;
      const result = await writeStore(data);
      return NextResponse.json({
        ok: true,
        suggestion,
        persisted: result.persisted,
      });
    }

    if (body?.type === "reset") {
      const seed = await readSeed();
      seed.updatedAt = new Date().toISOString();
      seed.updatedBy = String(body.author || "Reset");
      const result = await writeStore(seed);
      return NextResponse.json({ ok: true, reset: true, persisted: result.persisted });
    }

    return NextResponse.json({ error: "Unknown action" }, { status: 400 });
  } catch (err) {
    return NextResponse.json(
      { error: "POST failed", detail: String(err) },
      { status: 500 },
    );
  }
}
