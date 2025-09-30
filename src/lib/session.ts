/**
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


// Universal cookies helper that always returns a Promise.
// Handles Next.js 13/14 (sync) and 15 (async).

async function getCookieStore() {
  const result = cookies();
  return result instanceof Promise ? await result : result;
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

    // Full stub implementing IronSession<SessionData>
    const fallback: IronSession<SessionData> = {
      aut: memorySession?.aut ?? "",
      role: memorySession?.role ?? "",
      async save() {
        memorySession = { aut: this.aut, role: this.role };
      },
      async destroy() {
        memorySession = null;
      },
      updateConfig(_: SessionOptions) {
        // no-op for in-memory fallback
      },
    };

    return fallback;
  }
}


// Strongly typed session data

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


// Create a session

export async function createSession(authToken: string, role: string): Promise<void> {
  const session = await getSession();
  session.aut = authToken;
  session.role = role;
  await session.save();
}


// Delete a session

export async function deleteSession(): Promise<void> {
  const session = await getSession();
  await session.destroy();
}
*/