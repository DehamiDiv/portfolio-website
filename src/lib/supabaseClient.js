import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabaseInstance = null;

if (supabaseUrl && supabaseAnonKey) {
  try {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  } catch (error) {
    console.error("Failed to initialize Supabase client:", error);
  }
} else {
  if (typeof window === "undefined") {
    // Only warn on the server side during builds / SSR to avoid cluttering browser console
    console.warn(
      "⚠️ Supabase URL or Anon Key is missing. The contact form will run in fallback mock mode. " +
      "Create a .env.local file with NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to connect to your database."
    );
  }
}

export const supabase = supabaseInstance;
