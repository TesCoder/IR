import { Html, Head, Main, NextScript } from 'next/document';
import { OrganizationSchema } from '../components/Schema';

export default function Document() {
  const orgSchema = OrganizationSchema();

  return (
    <Html lang="en">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossOrigin="anonymous"
        />
        {/* Global Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </Head>
      <body>
        <Main />
        {/* Add Bootstrap JS below */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-w76AqEQJQHVj7ZP7r+0WvLe7dY/jZBfY9U+zJk9gGIGb1pQEpQ0Kp5Vx1fJ6jIW3"
          crossOrigin="anonymous"
          defer
        ></script>
        <NextScript />
      </body>
    </Html>
  );
}
