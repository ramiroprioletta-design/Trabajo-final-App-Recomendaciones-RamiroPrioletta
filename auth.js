import { supabase } from "./supabaseClient.js";

export async function obtenerSesion() {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data.session;
}

export function escucharCambiosDeSesion(callback) {
  return supabase.auth.onAuthStateChange((_event, session) => {
    queueMicrotask(() => callback(session?.user ?? null));
  });
}

export async function registrarUsuario(email, password) {
  return supabase.auth.signUp({ email, password });
}

export async function iniciarSesion(email, password) {
  return supabase.auth.signInWithPassword({ email, password });
}

export async function cerrarSesion() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}
