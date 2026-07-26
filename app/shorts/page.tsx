const shorts = [
  {
    id: "QZCeYcIYmUU",
    title: "Quick Property Investment Tips",
    views: "1.2M",
    duration: "0:45",
  },
  {
    id: "TcyR3BJDmi4",
    title: "Dubai Real Estate in 60 Seconds",
    views: "850K",
    duration: "1:00",
  },
  {
    id: "Qss3IzmxnWk",
    title: "Fractional Ownership Explained",
    views: "2.1M",
    duration: "0:38",
  },
  {
    id: "nOShdtNkm44",
    title: "ROI Calculator Quick Demo",
    views: "650K",
    duration: "0:52",
  },
  {
    id: "At9VDm4jToY",
    title: "Market Trends This Week",
    views: "1.8M",
    duration: "0:47",
  },
  {
    id: "zlwYQZ9Vl7s",
    title: "Investment Mistakes to Avoid",
    views: "970K",
    duration: "0:55",
  },
];

export default function ShortsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="py-12">
        <section className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              <span className="text-accent">#</span>Shorts
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
              Bite-sized videos to help you understand fractional real estate,
              market trends, and MiniLands in under a minute.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {shorts.map((short) => (
              <div
                key={short.id}
                className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300"
              >
                <div className="relative">
                  <div className="aspect-[9/16] bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${short.id}`}
                      title={short.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-[10px] font-medium">
                      {short.duration}
                    </div>
                    <div className="absolute top-2 left-2 bg-black/80 text-white px-2 py-1 rounded-full text-[10px] font-bold">
                      #Shorts
                    </div>
                  </div>
                </div>
                <div className="p-3 md:p-4">
                  <h3 className="text-white text-xs md:text-sm font-semibold mb-1 line-clamp-2 leading-tight">
                    {short.title}
                  </h3>
                  <p className="text-gray-400 text-[11px] md:text-xs">
                    {short.views} views
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

