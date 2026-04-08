// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getPostBySlug, getPosts } from "@/lib/data/posts";

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Post não encontrado" };

  return buildPageMetadata({
    title: post.title,
    description: post.summary,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      {/* Header */}
      <section className="bg-wine-900 px-4 py-16 sm:py-24">
        <SectionContainer narrow>
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-wine-300 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao blog
          </Link>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-wine-800 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-wine-200"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <time
            dateTime={post.date}
            className="mt-4 block text-sm text-wine-300"
          >
            {new Date(post.date).toLocaleDateString("pt-BR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </SectionContainer>
      </section>

      {/* Content */}
      <section className="bg-white px-4 py-16 sm:py-24">
        <SectionContainer narrow>
          <div className="prose prose-lg mx-auto max-w-2xl text-gray-700">
            {post.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                return (
                  <h3 key={i} className="mt-8 mb-3 font-serif text-xl font-bold text-gray-900">
                    {paragraph.replace(/\*\*/g, "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("**")) {
                const parts = paragraph.split("**");
                return (
                  <p key={i} className="mb-4 leading-relaxed">
                    <strong className="font-semibold text-gray-900">{parts[1]}</strong>
                    {parts[2]}
                  </p>
                );
              }
              return (
                <p key={i} className="mb-4 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
