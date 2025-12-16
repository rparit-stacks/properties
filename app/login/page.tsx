export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent/90 uppercase mb-2">
            MiniLands Investor Portal
          </p>
          <h1 className="text-2xl font-bold text-white mb-1">Login</h1>
          <p className="text-gray-400 text-sm">
            Access your fractional real estate investments and portfolio.
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1.5">
              Email address
            </label>
            <input
              type="email"
              className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1.5">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between text-xs text-gray-400">
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                className="rounded border-white/20 bg-transparent text-accent focus:ring-accent"
              />
              <span>Remember me</span>
            </label>
            <button
              type="button"
              className="text-accent hover:text-accent/80 font-medium"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="button"
            className="w-full rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-black shadow-lg hover:bg-accent/90 transition-colors"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-400">
          Don&apos;t have access yet? Contact our team and we&apos;ll help you
          get started with MiniLands investments.
        </p>
      </div>
    </div>
  );
}

