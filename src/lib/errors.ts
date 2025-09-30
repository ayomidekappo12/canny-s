import axios from "axios";

export interface AppError {
  message: string;
  code?: number | string;
}

// Universal normalizer
export function normalizeError(err: unknown): AppError {
  if (axios.isAxiosError(err)) {
    // narrow the type of response.data
    const data = err.response?.data as { detail?: string } | undefined;

    return {
      message: data?.detail ?? err.message,
      code: err.response?.status,
    };
  }

  if (err instanceof Error) {
    return { message: err.message };
  }

  if (typeof err === "object" && err !== null) {
    const e = err as { message?: string; code?: number | string };
    return { message: e.message ?? "Unknown error", code: e.code };
  }

  return { message: String(err) };
}
