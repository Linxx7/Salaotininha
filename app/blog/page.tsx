// app/blog/page.tsx
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionContainer } from "@/components/ui/section-container";
import { getPosts } from "@/lib/data/posts";

export const metadata = buildPageMetadata({
  title: "Blog",
  description:
    "Dicas de beleza, tendências e cuidados capilares. Acompanhe o blog do Salão Tininha.",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-wine-900 px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow light className="mb-5">Blog</SectionEyebrow>
          <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">
            Dicas & Tendências
          </h1>
          <p className="mt-5 text-base leading-relaxed text-wine-200 sm:text-lg">
            Inspiração, cuidados e novidades do mundo da beleza.
          </p>
        </div>
      </section>

      {/* Posts list */}
      <section className="bg-white px-4 py-16 sm:py-24">
        <SectionContainer>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-2xl border border-wine-100 bg-[#faf8f6] p-8 transition-shadow hover:shadow-md"
              >
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-wine-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-wine-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="mt-4 font-serif text-xl font-bold text-gray-900 group-hover:text-wine-700">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-500">
                  {post.summary}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-wine-100 pt-4">
                  <time
                    dateTime={post.date}
                    className="text-xs text-gray-400"
                  >
                    {new Date(post.date).toLocaleDateString("pt-BR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-semibold uppercase tracking-widest text-wine-600 transition-colors hover:text-wine-800"
                  >
                    Ler mais
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
