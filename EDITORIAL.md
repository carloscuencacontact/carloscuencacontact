# Publicar noticias

El panel de redacción usa Supabase para guardar borradores, noticias publicadas e imágenes en la nube. La portada y las páginas de noticia muestran automáticamente los contenidos publicados. Las noticias estáticas de portada se mantienen en los archivos del sitio; las nuevas publicaciones se guardan en Supabase.

## Configuración inicial

1. Crea un proyecto en [Supabase](https://supabase.com/) y guarda su URL y su clave pública **anon/publishable**. Nunca uses una clave `service_role` en el navegador ni la subas al repositorio.
2. Abre **SQL Editor** en Supabase, pega el contenido de `supabase-schema.sql` y ejecútalo. Crea la tabla de noticias, las reglas de acceso y el bucket público `news-images`.
3. En **Authentication → Providers → Email**, desactiva los registros públicos. Crea una cuenta por periodista desde **Authentication → Users** y usa una contraseña segura.
4. Asigna el rol editorial a cada cuenta desde SQL Editor, reemplazando el correo:

   ```sql
   update auth.users
   set raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb) || '{"role":"editor"}'::jsonb
   where email = 'periodista@tu-dominio.es';
   ```

   La persona debe cerrar y volver a iniciar sesión para recibir el rol nuevo. Solo cuentas con `app_metadata.role = editor` pueden crear, cambiar o eliminar noticias.
5. Edita `supabase-config.js` y completa `url` y `anonKey` con los datos públicos del proyecto. La clave pública está protegida por las políticas RLS; no pongas nunca la clave `service_role` aquí.
6. Publica los archivos de la web en un alojamiento estático servido por HTTPS. Añade el dominio público en **Authentication → URL Configuration → Redirect URLs**. No abras el sitio desde `file://`: el navegador necesita un origen HTTP/HTTPS para conectarse a Supabase.

La configuración del proyecto y la clave pública no son contraseñas, pero conviene coordinarlas con quien administre el repositorio. Las políticas de base de datos son la protección que impide a visitantes y cuentas sin el rol editorial modificar contenido.

## Uso para periodistas

1. Abre `redaccion.html` en el dominio publicado e inicia sesión con la cuenta editorial.
2. Escribe el titular, la sección, el resumen y el cuerpo. Separa los párrafos con una línea en blanco.
3. Sube una imagen JPG, PNG o WebP de hasta 5 MB, o indica una URL de imagen.
4. Pulsa **Guardar borrador** para seguir editando después, o **Publicar noticia** para mostrarla en la web. Los artículos guardados se pueden abrir con **Editar**, revisar con **Ver** y retirar con **Eliminar**.

Las imágenes cargadas quedan en el bucket público `news-images`; las noticias y los borradores se conservan en la base de datos del proyecto aunque se cierre el navegador.
