import Head from "next/head";

export default function SEO() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Venkata Sai Ganesh Voora",
    "url": "https://vooravenkatasaiganesh.netlify.app/",
    "sameAs": [
      "https://github.com/yourgithub",
      "https://linkedin.com/in/yourlinkedin",
      "https://twitter.com/ganesh_voora"
    ],
    "jobTitle": "Full-Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Self-employed"
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </Head>
  );
}
