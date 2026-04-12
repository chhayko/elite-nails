import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { POSTS } from "@/lib/blog-data";

const BASE_URL = "https://www.elitenails.biz";

const slugs = Object.keys(POSTS);

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return slugs.map((slug) => ({ locale: "nl", slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale !== "nl") return {};
  const post = POSTS[slug];
  if (!post) return {};
  const canonical = `${BASE_URL}/nl/blog/${slug}`;
  return {
    title: { absolute: post.metaTitle },
    description: post.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: canonical,
      siteName: "Elite Nails",
      type: "article",
      publishedTime: post.publishDate,
      images: [{ url: `${BASE_URL}/frames/frame-0001.jpg`, width: 1200, height: 630 }],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { locale, slug } = await params;
  if (locale !== "nl") notFound();
  const post = POSTS[slug];
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.h1,
    description: post.metaDescription,
    datePublished: post.publishDate,
    author: {
      "@type": "Organization",
      name: "Elite Nails Lierde",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Elite Nails Lierde",
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/frames/frame-0001.jpg` },
    },
    url: `${BASE_URL}/nl/blog/${slug}`,
    image: `${BASE_URL}/frames/frame-0001.jpg`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}/nl/blog/${slug}` },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.sections.slice(0, -1).map((s) => ({
      "@type": "Question",
      name: s.heading,
      acceptedAnswer: {
        "@type": "Answer",
        text: s.body.join(" "),
      },
    })),
  };

  return (
    <>
      <Script
        id={`json-ld-blog-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id={`json-ld-faq-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-charcoal/90 backdrop-blur-md border-b border-white/5">
        <Link
          href="/nl"
          className="text-cream/60 hover:text-cream text-xs tracking-[0.2em] uppercase transition-colors duration-300 flex items-center gap-2"
        >
          <span>&#8592;</span>
          <span>Home</span>
        </Link>
        <Link
          href="/nl"
          className="text-cream font-serif text-lg font-light tracking-[0.15em] uppercase"
        >
          Elite Nails
        </Link>
        <a
          href="https://www.instagram.com/elite_nails_lierde/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block text-cream/60 hover:text-mauve text-xs tracking-[0.2em] uppercase transition-colors duration-300"
        >
          Instagram
        </a>
      </nav>

      <main className="bg-charcoal min-h-screen text-cream pt-24">
        {/* Hero */}
        <header className="px-6 md:px-16 py-16 max-w-3xl border-b border-white/10">
          <p className="text-mauve-light text-xs tracking-[0.35em] uppercase mb-4">
            Blog — Elite Nails Lierde
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-cream leading-tight text-balance">
            {post.h1}
          </h1>
          <div className="mt-8 h-px w-24 bg-white/20" />
          <p className="mt-8 text-cream/70 text-lg font-light leading-relaxed">
            {post.intro}
          </p>
        </header>

        {/* Article body */}
        <article className="px-6 md:px-16 max-w-3xl">
          {post.sections.map((section, i) => (
            <section key={i} className="py-12 border-b border-white/10 last:border-0">
              <h2 className="font-serif text-2xl md:text-3xl font-light text-cream mb-6 leading-snug">
                {section.heading}
              </h2>
              {section.body.map((paragraph, j) => (
                <p
                  key={j}
                  className="text-cream/70 text-base font-light leading-relaxed mb-4 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
              {section.table && (
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full text-sm font-light border-collapse">
                    <thead>
                      <tr>
                        {section.table.headers.map((h, k) => (
                          <th
                            key={k}
                            className="text-left text-cream/50 text-xs tracking-[0.2em] uppercase py-3 pr-6 border-b border-white/10 font-sans font-normal"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, k) => (
                        <tr key={k} className="border-b border-white/5 last:border-0">
                          {row.map((cell, l) => (
                            <td
                              key={l}
                              className={`py-3 pr-6 align-top leading-relaxed ${
                                l === 0
                                  ? "text-cream/60 font-sans text-xs tracking-wide uppercase"
                                  : "text-cream/80"
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}
        </article>

        {/* Internal links */}
        {post.relatedLinks && post.relatedLinks.length > 0 && (
          <section className="px-6 md:px-16 py-12 border-t border-white/10 max-w-3xl">
            <p className="text-mauve-light text-xs tracking-[0.35em] uppercase mb-6">Lees ook</p>
            <ul className="space-y-3">
              {post.relatedLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-cream/80 hover:text-cream text-sm font-light underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition-colors duration-200"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* CTA */}
        <section className="px-6 md:px-16 py-20 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center gap-8 max-w-3xl">
          <div className="flex-1">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-cream mb-3">
              Klaar om te boeken?
            </h2>
            <p className="text-cream/60 text-sm font-light">
              Stuur ons een DM op Instagram voor beschikbaarheid en afspraken.
            </p>
          </div>
          <a
            href="https://www.instagram.com/elite_nails_lierde/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-mauve text-cream text-xs tracking-[0.25em] uppercase px-10 py-4 hover:bg-mauve/20 transition-colors duration-300"
          >
            Boek via Instagram
          </a>
        </section>
      </main>

      <footer className="bg-charcoal border-t border-white/10 px-6 md:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-cream/30 text-xs tracking-[0.2em] uppercase">
          &#169; {new Date().getFullYear()} Elite Nails &#183; Sint-Martens-Lierde
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="/nl/blog"
            className="text-cream/30 hover:text-cream/60 text-xs tracking-[0.2em] uppercase transition-colors duration-300"
          >
            Blog
          </Link>
          <Link
            href="/nl"
            className="text-cream/30 hover:text-cream/60 text-xs tracking-[0.2em] uppercase transition-colors duration-300"
          >
            &#8592; Home
          </Link>
        </div>
      </footer>
    </>
  );
}
