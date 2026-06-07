export default function PrivacyPolicy() {
  const appName = "Bulgario";
  const contactEmail = "alonsoalarconaguilar123@gmail.com";
  const effectiveDate = "6 de junio de 2026";
  const dataController = "Alonso Alarcón Aguilar";

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 leading-relaxed">
      <h1 className="text-3xl font-bold mb-2">Política de Privacidad — {appName}</h1>
      <p className="text-sm text-gray-500 mb-8">
        Última actualización: {effectiveDate}
      </p>

      <p className="mb-6">
        Esta Política de Privacidad describe cómo la aplicación móvil <strong>{appName}</strong> (la &quot;App&quot;)
        recopila, usa y protege tu información. Al usar la App, aceptas las prácticas descritas
        en este documento.
      </p>

      <p className="mb-6">
        <strong>Responsable del tratamiento:</strong> {dataController}<br />
        <strong>Contacto:</strong>{" "}
        <a
          href={`mailto:${contactEmail}`}
          className="text-blue-600 underline dark:text-blue-400"
        >
          {contactEmail}
        </a>
      </p>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        1. Información que recopilamos
      </h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">1.1 Información de tu cuenta de Google (inicio de sesión)</h3>
      <p className="mb-3">
        Si decides iniciar sesión con Google, recibimos de Google la siguiente información de tu perfil:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Tu <strong>nombre</strong></li>
        <li>Tu <strong>dirección de correo electrónico</strong></li>
        <li>Tu <strong>identificador de usuario de Google</strong> (un ID numérico)</li>
        <li>Tu <strong>foto de perfil</strong> (si está disponible)</li>
      </ul>
      <p className="mb-6">
        No recibimos tu contraseña de Google en ningún momento.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-3">1.2 Inicio de sesión como invitado</h3>
      <p className="mb-6">
        Puedes usar la App como <strong>invitado</strong> sin proporcionar ninguna información personal. En
        ese caso no recopilamos datos de cuenta.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-3">1.3 Datos que tú creas dentro de la App</h3>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li><strong>Lotes de fermentación</strong> (tipo de kéfir, cantidad de gránulos, temperatura, notas, etc.)</li>
        <li><strong>Publicaciones y comentarios</strong> de la sección &quot;Cercanos&quot; (texto que escribes, ciudad y país que indicas)</li>
        <li><strong>Imágenes de recetas</strong> que decidas subir</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-3">1.4 Permisos del dispositivo</h3>
      <p className="mb-3">
        La App solicita los siguientes permisos solo cuando son necesarios:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li><strong>Notificaciones:</strong> para avisarte cuando una fermentación está lista.</li>
        <li><strong>Reproducción de audio y vibración:</strong> para la alarma de fermentación. La App <strong>no graba audio</strong> ni usa el micrófono para capturar sonido.</li>
        <li><strong>Acceso a fotos / galería:</strong> únicamente cuando eliges subir una imagen de receta.</li>
        <li><strong>Internet:</strong> para iniciar sesión y para subir o descargar imágenes de recetas.</li>
      </ul>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        2. Cómo se almacena tu información
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>En tu dispositivo:</strong> los lotes de fermentación, publicaciones, comentarios y tus tokens de sesión se guardan localmente en tu dispositivo (almacenamiento seguro y almacenamiento local de la App). Estos datos no se envían a nuestros servidores.</li>
        <li><strong>En la nube (Google Cloud Storage):</strong> las imágenes de recetas que subes se almacenan en un bucket privado de Google Cloud Storage. El acceso a estas imágenes se realiza mediante URLs firmadas temporales.</li>
      </ul>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        3. Cómo usamos tu información
      </h2>
      <p className="mb-3">
        Usamos la información para:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Autenticarte y mantener tu sesión iniciada.</li>
        <li>Mostrar tu nombre y foto de perfil dentro de la App.</li>
        <li>Guardar y mostrar tus lotes de fermentación, publicaciones y comentarios.</li>
        <li>Permitir subir y mostrar imágenes de recetas.</li>
        <li>Enviarte notificaciones locales relacionadas con tus fermentaciones.</li>
      </ul>
      <p className="mb-6">
        <strong>No vendemos tu información personal</strong> ni la usamos con fines publicitarios.
      </p>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        4. Servicios de terceros
      </h2>
      <p className="mb-3">
        La App utiliza los siguientes servicios de terceros, que pueden procesar datos según sus propias políticas de privacidad:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Google Sign-In</strong> (Google LLC) — autenticación.<br />
        Política:{" "}
        <a
          href="https://policies.google.com/privacy"
          className="text-blue-600 underline dark:text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://policies.google.com/privacy
        </a>
        </li>
        <li><strong>Google Cloud Storage</strong> (Google LLC) — almacenamiento de imágenes de recetas.<br />
        Política:{" "}
        <a
          href="https://cloud.google.com/terms/cloud-privacy-notice"
          className="text-blue-600 underline dark:text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://cloud.google.com/terms/cloud-privacy-notice
        </a>
        </li>
      </ul>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        5. Conservación y eliminación de datos
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Los datos almacenados localmente se eliminan cuando <strong>cierras sesión</strong> o <strong>desinstalas</strong> la App.</li>
        <li>Para solicitar la eliminación de imágenes que hayas subido a la nube o de cualquier dato asociado a tu cuenta, escríbenos a{" "}
        <a
          href={`mailto:${contactEmail}`}
          className="text-blue-600 underline dark:text-blue-400"
        >
          {contactEmail}
        </a>
        {" "}y atenderemos tu solicitud en un plazo razonable.</li>
      </ul>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        6. Seguridad
      </h2>
      <p className="mb-6">
        Tomamos medidas razonables para proteger tu información, incluyendo el almacenamiento
        seguro de los tokens de sesión en el dispositivo y el uso de buckets privados con acceso
        mediante URLs firmadas temporales. Sin embargo, ningún método de transmisión o
        almacenamiento es 100 % seguro.
      </p>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        7. Privacidad de los menores
      </h2>
      <p className="mb-6">
        La App no está dirigida a menores de 13 años y no recopilamos conscientemente
        información de menores de esa edad.
      </p>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        8. Cambios en esta política
      </h2>
      <p className="mb-6">
        Podemos actualizar esta Política de Privacidad ocasionalmente. Publicaremos la versión
        actualizada con una nueva fecha de &quot;Última actualización&quot;. Te recomendamos revisarla
        periódicamente.
      </p>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        9. Contacto
      </h2>
      <p className="mb-12">
        Si tienes preguntas sobre esta Política de Privacidad, contáctanos en:{" "}
        <a
          href={`mailto:${contactEmail}`}
          className="text-blue-600 underline dark:text-blue-400"
        >
          {contactEmail}
        </a>
      </p>
    </main>
  );
}
