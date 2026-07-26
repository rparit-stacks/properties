import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/components/blogs";

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return notFound();
  }

  if (post.externalUrl) {
    return redirect(post.externalUrl);
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 bg-background">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="mb-8">
            <Link
              href="/blogs"
              className="text-accent text-sm hover:text-accent/80"
            >
              ← Back to all articles
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-6">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>

          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-white/10 mb-8">
            <Image
              src={post.image || "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg"}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <article className="prose prose-invert prose-lg max-w-none">
            <p>{post.content}</p>
          </article>
        </div>
      </section>
    </div>
  );
}


