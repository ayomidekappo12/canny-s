"use server";
import { cookies } from "next/headers";
import { getIronSession, IronSession, SessionOptions } from "iron-session";

export interface SessionData {
  aut: string;
  role: string;
}

const isProd = process.env.NODE_ENV === "production";

// In-memory fallback
let memorySession: SessionData | null = null;

/**
 * Universal cookies helper that works in Next.js 13/14 (sync)
 * and Next.js 15 (async).
 */
async function getCookieStore() {
  const result = cookies();
  if (result instanceof Promise) {
    return await result; // Next.js 15+
  }
  return result; // Next.js 13/14
}

async function getSession(): Promise<IronSession<SessionData>> {
  try {
    const cookieStore = await getCookieStore();

    return await getIronSession<SessionData>(cookieStore, {
      password: `${process.env.SESSION_SECRET}`,
      cookieName: "TULIP-COOKIE-MONSTER",
      cookieOptions: {
        httpOnly: isProd,
        secure: isProd,
        sameSite: "lax",
        path: "/",
      },
    });
  } catch (err) {
    console.warn("[Session] Falling back to in-memory session:", err);

    // ✅ Full stub implementing IronSession<SessionData>
    const fallback: IronSession<SessionData> = {
      aut: memorySession?.aut ?? "",
      role: memorySession?.role ?? "",
      save() {
        memorySession = { aut: this.aut, role: this.role };
        return Promise.resolve();
      },
      destroy() {
        memorySession = null;
        return Promise.resolve();
      },
      updateConfig(_options: SessionOptions) {
        // no-op for in-memory fallback
      },
    };

    return fallback;
  }
}

/**
 * ✅ Strongly typed session data
 */
export async function getSessionData(): Promise<SessionData | null> {
  const session = await getSession();

  if (!session.aut || !session.role) {
    return null;
  }

  return {
    aut: session.aut,
    role: session.role,
  };
}

export async function createSession(authToken: string, role: string) {
  const session = await getSession();
  session.aut = authToken;
  session.role = role;
  await session.save();
}

export async function deleteSession() {
  const session = await getSession();
  await session.destroy();
}
