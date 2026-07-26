import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/components/blogs";

export default function BlogsListingPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 bg-background border-b border-white/20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Blogs & Insights
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore insights, guides, and market updates on fractional real
              estate investing.
            </p>
            <div className="w-24 h-1 bg-accent mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={post.externalUrl || `/blogs/${post.slug}`}
                target={post.externalUrl ? "_blank" : undefined}
                rel={post.externalUrl ? "noopener noreferrer" : undefined}
                className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="relative h-56">
                  <Image
                    src={post.image || "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="text-white text-xl font-semibold group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


