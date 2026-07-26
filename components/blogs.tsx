import Image from "next/image";
import Link from "next/link";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  content: string;
  externalUrl?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "fractional-investing-gen-z-real-estate-owners",
    title: "Fractional investing is turning Gen Z into early real estate owners, says Sourish Pal of Client Associates",
    excerpt:
      "Gen Z is revolutionizing real estate investment through fractional ownership platforms, enabling early entry into high-quality properties with small-ticket participation. This tech-enabled approach transforms real estate into a liquid asset.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    author: "Economic Times",
    date: "December 9, 2025",
    content:
      "Fractional ownership platforms are enabling young Indians to step into high-quality property investments far earlier than previous generations. By allowing small-ticket participation, offering app-based transparency, and easing exits, fractional investing is transforming real estate from a traditionally 'lumpy' commitment into a liquid, tech-enabled asset.",
    externalUrl: "https://economictimes.indiatimes.com/markets/digital-real-estate/realty-news/fractional-investing-is-turning-gen-z-into-early-real-estate-owners-says-sourish-pal-of-client-associates/articleshow/125829382.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
  },
  {
    slug: "fractional-ownership-platforms-sebi",
    title: "Fractional Ownership Platforms - SEBI",
    excerpt:
      "Understanding SEBI regulations and guidelines for fractional ownership platforms in India's real estate market.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    author: "Colliers",
    date: "2025",
    content:
      "SEBI has introduced regulations for fractional ownership platforms to ensure transparency and investor protection in the real estate market.",
    externalUrl: "https://www.colliers.com/en-in/news/fractional-ownership-platforms",
  },
  {
    slug: "what-is-fractional-real-estate-investment",
    title: "What Is Fractional Real Estate Investment and How Does It Work?",
    excerpt:
      "A comprehensive guide to understanding fractional real estate investment, its benefits, risks, and how it works for investors.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    author: "Angel One",
    date: "2025",
    content:
      "Fractional real estate investment allows multiple investors to own a share of a property, making real estate investment more accessible and affordable.",
    externalUrl: "https://www.angelone.in/knowledge-center/personal-finance/what-is-fractional-real-estate-investment",
  },
  {
    slug: "understanding-asset-tokenization-digital-asset",
    title: "Understanding Asset Tokenization to Unlock Digital Asset Potential",
    excerpt:
      "Explore how asset tokenization is revolutionizing real estate investment through blockchain technology and digital assets.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
    author: "NPCI",
    date: "2025",
    content:
      "Asset tokenization is transforming how we think about real estate ownership and investment, making it more accessible through digital platforms.",
    externalUrl: "https://www.npci.org.in/blog/understanding-asset-tokenization-to-unlock-digital-asset-potential",
  },
  {
    slug: "invest-high-value-stocks-without-burning-pocket",
    title: "Can you invest in high-value stocks without burning a hole in your pocket?",
    excerpt:
      "Discover how fractional investing principles apply to both stocks and real estate, making high-value investments accessible to everyone.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    author: "Business Standard",
    date: "October 3, 2025",
    content:
      "Fractional investment models are making high-value assets accessible to retail investors, whether in stocks or real estate.",
    externalUrl: "https://www.business-standard.com/finance/personal-finance/can-you-invest-in-high-value-stocks-without-burning-a-hole-in-your-pocket-123100300326_1.html",
  },
];

export default function BlogsSection() {
  const [featuredPost, ...sidePosts] = blogPosts;

  return (
    <section className="py-16 bg-background border-t border-white/20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest Blogs
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Side Posts - Small blogs */}
          <div className="space-y-4 lg:order-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
            {sidePosts.map((post, index) => (
              <Link
                key={index}
                href={post.externalUrl || `/blogs/${post.slug}`}
                target={post.externalUrl ? "_blank" : undefined}
                rel={post.externalUrl ? "noopener noreferrer" : undefined}
                className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex flex-row sm:flex-col lg:flex-row h-full">
                  <div className="relative w-32 sm:w-full lg:w-32 flex-shrink-0 h-32 sm:h-48 lg:h-32">
                    <Image
                      src={post.image || "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 128px"
                    />
                  </div>
                  <div className="p-4 flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <h4 className="text-white text-sm font-semibold mb-2 leading-tight line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-gray-400 text-xs mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-accent truncate mr-2">
                        {post.author}
                      </span>
                      <span className="text-gray-500 flex-shrink-0">
                        {post.date}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Featured Post - Large blog on the right */}
          <div className="lg:col-span-2 lg:order-2 flex justify-center">
            <Link
              href={featuredPost.externalUrl || `/blogs/${featuredPost.slug}`}
              target={featuredPost.externalUrl ? "_blank" : undefined}
              rel={featuredPost.externalUrl ? "noopener noreferrer" : undefined}
              className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 group cursor-pointer max-w-2xl w-full"
            >
              <div className="relative h-80 lg:h-96">
                <Image
                  src={featuredPost.image || "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-accent text-black px-3 py-1 rounded-full text-xs font-medium mb-3">
                    Featured Article
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white text-2xl font-bold mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-300 text-base mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-accent font-medium">
                      {featuredPost.author}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {featuredPost.date}
                    </span>
                  </div>
                  <span className="text-accent hover:text-accent/80 text-sm font-medium transition-colors duration-300">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blogs"
            className="inline-block bg-accent hover:bg-accent/90 text-black px-8 py-3 rounded-full font-medium transition-colors duration-300"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
