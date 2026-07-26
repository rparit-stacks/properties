export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">
        <section>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            How can we help you?
          </h1>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl">
            For now, this page is a static support overview. In the future, it
            can be connected to tickets, live chat, and FAQs for your investors.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-white font-semibold mb-1">Email Support</h2>
            <p className="text-sm text-gray-400 mb-2">
              Reach out to our team for any questions.
            </p>
            <p className="text-accent text-sm font-medium">
              support@minilands.in
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-white font-semibold mb-1">Phone</h2>
            <p className="text-sm text-gray-400 mb-2">
              Talk to our support team during business hours.
            </p>
            <p className="text-accent text-sm font-medium">+91 9294553783</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-white font-semibold mb-1">Knowledge Center</h2>
            <p className="text-sm text-gray-400 mb-2">
              Coming soon: guides, tutorials, and FAQs.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
