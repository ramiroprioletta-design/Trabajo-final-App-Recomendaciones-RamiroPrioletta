import { supabase } from "./supabaseClient.js";

export async function obtenerSeriesBD() {
  return supabase
    .from("series")
    .select("*")
    .order("created_at", { ascending: false });
}

export async function obtenerComentariosBD() {
  return supabase
    .from("comentarios")
    .select("*")
    .order("created_at", { ascending: true });
}

export async function subirImagenStorage(archivo, usuarioId) {
  const tiposPermitidos = ["image/png", "image/jpeg", "image/webp", "image/gif"];
  if (!tiposPermitidos.includes(archivo.type)) {
    throw new Error("La portada debe ser PNG, JPG, WebP o GIF.");
  }
  if (archivo.size > 5 * 1024 * 1024) {
    throw new Error("La portada no puede superar los 5 MB.");
  }

  const extension = archivo.name.split(".").pop()?.toLowerCase() || "img";
  const ruta = `${usuarioId}/${crypto.randomUUID()}.${extension}`;
  const { error } = await supabase.storage
    .from("portadas")
    .upload(ruta, archivo, { contentType: archivo.type, upsert: false });

  if (error) throw error;

  const { data } = supabase.storage.from("portadas").getPublicUrl(ruta);
  return data.publicUrl;
}

export async function crearSerieBD(nuevaSerie) {
  return supabase.from("series").insert(nuevaSerie);
}

export async function editarSerieBD(id, cambios) {
  return supabase.from("series").update(cambios).eq("id", id);
}

export async function eliminarSerieBD(id) {
  return supabase.from("series").delete().eq("id", id);
}

export async function agregarComentarioBD(comentario) {
  return supabase.from("comentarios").insert(comentario);
}
