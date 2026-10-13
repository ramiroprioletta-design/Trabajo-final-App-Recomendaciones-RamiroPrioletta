# RecomendApp

Aplicación web instalable (PWA) para compartir recomendaciones de series. El catálogo y los comentarios se pueden consultar sin cuenta; las publicaciones y los comentarios requieren una sesión de Supabase. Solo quien creó una recomendación puede editarla o eliminarla.

## Preparar Supabase

1. Creá un proyecto en [Supabase](https://supabase.com/) e ingresá a su panel.
2. Abrí **SQL Editor**, creá una consulta nueva, pegá el contenido de `supabase-setup.sql` y ejecutala. El script crea las tablas si faltan; si ya tenés las tablas de los prácticos anteriores, les agrega los campos de usuario y conserva los registros. También activa RLS, define las políticas de acceso y crea el bucket público `portadas` (imágenes PNG/JPG/WebP/GIF de hasta 5 MB).
3. En **Project Settings > API**, copiá la **Project URL** y la **Publishable key** (la clave pública `sb_publishable_...`; nunca uses ni publiques `service_role` o una clave secreta).
4. Pegá esos valores en `supabaseClient.js`, reemplazando las dos cadenas `PEGÁ_ACÁ...`.
5. En **Authentication > Providers > Email**, dejá habilitado Email. Si la confirmación de correo está activa, cada cuenta debe confirmar su dirección antes de iniciar sesión.

## Probar en la computadora

1. Abrí esta carpeta con Visual Studio Code e instalá/activá la extensión **Live Server**.
2. Hacé clic derecho en `index.html` y elegí **Open with Live Server**. No abras el HTML con doble clic: los módulos JavaScript necesitan servirse por HTTP.
3. Probá el catálogo como visitante, creá una cuenta y luego publicá una recomendación. Probá una portada opcional, un comentario, la edición y el borrado.
4. Creá una segunda cuenta. Debe poder ver y comentar la recomendación de la primera, pero no editarla ni borrarla. También podés probar la vista pública en una ventana de incógnito.

## Publicar y abrir como app en el celular

1. Creá en GitHub un repositorio público nuevo, sin inicializarlo con README ni otros archivos.
2. En la terminal de VS Code, desde esta carpeta, ejecutá:

   ```bash
   git init
   git add .
   git commit -m "Crear app de recomendaciones con autenticación"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```

   Reemplazá la URL por la del repositorio que acabás de crear. Si Git informa que el repositorio ya existe localmente, no vuelvas a ejecutar `git init`; continuá desde `git add .`.
3. En GitHub, abrí **Settings > Pages**. Elegí **Deploy from a branch**, seleccioná `main` y `/ (root)`, y guardá.
4. Cuando Pages publique el sitio, abrí la dirección indicada por GitHub en Chrome en el celular y elegí **Instalar aplicación** o **Agregar a la pantalla principal**.

La app consulta Supabase en línea; el catálogo no queda disponible sin conexión.
