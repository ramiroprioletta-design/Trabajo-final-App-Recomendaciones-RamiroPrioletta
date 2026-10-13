const SUPABASE_URL = "https://vbaxdbbfbyyeeefymtjn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_ZnzoHDRra9Zzj0eqi7RjJA_MbjX9nkf";

if (!window.supabase) {
  throw new Error("No se cargó la librería de Supabase. Revisá la conexión a internet.");
}

if (
  SUPABASE_URL === "PEGÁ_ACÁ_TU_SUPABASE_URL" ||
  SUPABASE_PUBLISHABLE_KEY === "PEGÁ_ACÁ_TU_PUBLISHABLE_KEY"
) {
  throw new Error("Completá la URL y la Publishable Key de tu proyecto en supabaseClient.js.");
}

export const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
