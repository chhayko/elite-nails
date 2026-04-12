import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { POSTS } from "@/lib/blog-data";

const BASE_URL = "https://www.elitenails.biz";

type Props = { params: Promise<{ locale: string }> };

export async function generateStaticParams() {
  return [{ locale: "nl" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "nl") return {};
  const canonical = `${BASE_URL}/nl/blog`;
  return {
    title: { absolute: "Blog | Nageladvies & Tips | Elite Nails" },
    description:
      "Nageladvies, tips en inspiratie van Elite Nails in Sint-Martens-Lierde. Lees alles over russische manicure, BIAB en gelnagels.",
    alternates: { canonical },
    openGraph: {
      title: "Blog | Nageladvies & Tips | Elite Nails",
      description:
        "Nageladvies, tips en inspiratie van Elite Nails in Sint-Martens-Lierde. Lees alles over russische manicure, BIAB en gelnagels.",
      url: canonical,
      siteName: "Elite Nails",
      images: [{ url: `${BASE_URL}/frames/frame-0001.jpg`, width: 1200, height: 630 }],
    },
  };
}

export default async function BlogIndex({ params }: Props) {
  const { locale } = await params;
  if (locale !== "nl") notFound();

  const posts = Object.values(POSTS).sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  return (
    <>
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
        {/* Header */}
        <header className="px-6 md:px-16 py-16 max-w-3xl border-b border-white/10">
          <p className="text-mauve-light text-xs tracking-[0.35em] uppercase mb-4">
            Elite Nails Lierde
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-cream leading-tight">
            Blog — Nageladvies & Inspiratie
          </h1>
          <div className="mt-8 h-px w-24 bg-white/20" />
          <p className="mt-8 text-cream/70 text-lg font-light leading-relaxed">
            Alles wat je wilt weten over russische manicure, BIAB, gelnagels en nagelzorg — geschreven door het team van Elite Nails.
          </p>
        </header>

        {/* Post list */}
        <section className="px-6 md:px-16 max-w-3xl divide-y divide-white/10">
          {posts.map((post) => {
            const date = new Date(post.publishDate);
            const formatted = date.toLocaleDateString("nl-BE", {
              day: "numeric",
              month: "long",
              year: "numeric",
            });
            const excerpt =
              post.intro.length > 120
                ? post.intro.slice(0, 120).trimEnd() + "…"
                : post.intro;

            return (
              <article key={post.slug} className="py-12">
                <p className="text-cream/30 text-xs tracking-[0.2em] uppercase font-sans mb-3">
                  {formatted}
                </p>
                <h2 className="font-serif text-2xl md:text-3xl font-light text-cream leading-snug mb-4">
                  <Link
                    href={`/nl/blog/${post.slug}`}
                    className="hover:text-cream/80 transition-colors duration-200"
                  >
                    {post.h1}
                  </Link>
                </h2>
                <p className="text-cream/60 text-base font-light leading-relaxed mb-6">
                  {excerpt}
                </p>
                <Link
                  href={`/nl/blog/${post.slug}`}
                  className="text-mauve-light text-xs tracking-[0.25em] uppercase hover:text-cream transition-colors duration-200"
                >
                  Lees verder &#8594;
                </Link>
              </article>
            );
          })}
        </section>
      </main>

      <footer className="bg-charcoal border-t border-white/10 px-6 md:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-cream/30 text-xs tracking-[0.2em] uppercase">
          &#169; {new Date().getFullYear()} Elite Nails &#183; Sint-Martens-Lierde
        </p>
        <Link
          href="/nl"
          className="text-cream/30 hover:text-cream/60 text-xs tracking-[0.2em] uppercase transition-colors duration-300"
        >
          &#8592; Home
        </Link>
      </footer>
    </>
  );
}
