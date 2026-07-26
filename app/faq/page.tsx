export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            FAQs – Everything You Need to Know About Investing with Minilands
        </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Find answers to the most common questions about how Minilands works,
            who can invest, and how you earn returns.
          </p>
        </div>

        <div className="space-y-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          {/* What is Minilands? */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              What is Minilands?
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Minilands is a real estate platform offering fractional ownership,
              enabling individuals to invest in Indian residential properties and
              benefit from both rental income and long-term value growth.
            </p>
          </div>

          {/* How Minilands Works */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              How does Minilands work?
            </h2>
            <div className="space-y-2 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                Minilands simplifies real estate investing by offering carefully
                vetted residential properties in high-growth, low-risk locations
                across India.
              </p>
              <p>
                Explore investment-ready listings, choose based on your budget,
                and invest with ease.
              </p>
              <p>
                Start earning passive rental income and benefit from long-term
                property appreciation—without the hassle of property management.
              </p>
            </div>
          </div>

          {/* Who can invest */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              Who can invest in Minilands properties?
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Minilands is open to Indian citizens, companies, Hindu Undivided
              Families (HUFs), Trusts, and Non-Resident Indians (NRIs). NRIs
              simply need to have an NRO account to get started.
            </p>
          </div>

          {/* Minimum investment */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              What is the minimum investment amount?
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              The minimum amount you can invest depends on the specific property
              listed. However, many opportunities start at just ₹1 lakh, making
              it accessible for a wide range of investors.
            </p>
          </div>

          {/* Minilands vs REIT */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              How is Minilands different from a REIT?
            </h2>
            <div className="space-y-2 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                While REITs are publicly traded and typically deal with large
                portfolios worth over ₹500 crores, Minilands allows direct
                fractional investment in handpicked residential properties.
                Investors benefit from rental income and potential capital
                appreciation on specific assets.
              </p>
              <p>
                With SEBI’s introduction of Small and Medium REIT (SM REIT)
                guidelines for platforms managing ₹50 crore or more in assets,
                Minilands aims to register as an SM REIT once it reaches the
                required threshold. Until then, it continues to follow SEBI&apos;s
                best practices to ensure transparency and compliance.
              </p>
            </div>
          </div>

          {/* Physical presence */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              Is physical presence required to invest?
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              No. The entire investment process with Minilands is seamless and
              fully online—no paperwork or in-person visits needed.
            </p>
          </div>

          {/* Property visit */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              Can I visit the property before investing?
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Yes. Investors are welcome to visit listed properties. You can
              schedule a guided tour by contacting our support team.
            </p>
          </div>

          {/* When sold */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              When will the property be sold?
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Each property has a unique holding period. Some are designed for
              short-term investment and are sold at a pre-agreed price. Others
              are long-term assets with an exit timeline of 5 to 7 years. In
              such cases, a sale happens only when 75% of the co-owners vote in
              favor.
            </p>
          </div>

          {/* Revenue model */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              How does Minilands earn revenue?
            </h2>
            <div className="space-y-2 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>Minilands earns through a mix of management and performance fees:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <span className="font-semibold">
                    Short-Term Residential Properties:
                  </span>{" "}
                  Annual management fee of 0.9% of the total investment.
                </li>
                <li>
                  <span className="font-semibold">
                    Long-Term Residential Properties:
                  </span>{" "}
                  10% of rental income as management fee (only if rented) and
                  20% performance fee on profits exceeding an 8% annual return.
                </li>
                <li>
                  <span className="font-semibold">Vacation Homes:</span> 5% of
                  rental income as management fee (if rented) and 0.5% of the
                  sale value as a performance fee.
                </li>
                <li>
                  <span className="font-semibold">Plotted Land:</span> 1% of the
                  sale value as a performance fee.
                </li>
              </ul>
            </div>
          </div>

          {/* Price determination */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              How is the property price determined?
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              The purchase price is based on the property&apos;s area multiplied by
              the rate per square foot. For example, a 1,000 sq. ft. home priced
              at ₹7,000 per sq. ft. would cost ₹70,00,000.
            </p>
          </div>

          {/* Referral program */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              Does Minilands offer a referral program?
            </h2>
            <div className="space-y-2 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                Yes. When you refer a friend or family member who invests, both
                of you receive an additional 1% return (up to ₹10,000) on your
                total gains.
              </p>
              <p className="font-semibold">Referral Program Terms:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>You must be an existing investor.</li>
                <li>You can only refer new customers.</li>
                <li>
                  Rewards are credited once the referred investment is fully
                  funded.
                </li>
              </ul>
            </div>
          </div>

          {/* Channel partner */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              Is there a channel partner program?
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Yes. Minilands collaborates with channel partners. If you&apos;re
              interested in partnering with us, reach out at{" "}
              <span className="text-accent">support@minilands.com</span> or call{" "}
              <span className="text-accent">+91-9258375583</span>.
            </p>
          </div>

          {/* Documents required */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              What documents are required to invest with Minilands?
            </h2>
            <div className="text-gray-300 text-sm md:text-base leading-relaxed space-y-2">
              <p>To initiate your investment, we&apos;ll need:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>PAN Card</li>
                <li>
                  Address proof (Aadhar, Driver&apos;s License, or Passport)
                </li>
                <li>
                  Bank statement or cancelled cheque with your name printed
                </li>
              </ol>
              <p>For NRIs: only NRO account details are accepted.</p>
            </div>
          </div>

          {/* Lock-in period */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              Is there a lock-in period on my investment?
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Yes, each property has a lock-in period designed to maximize
              potential returns. This duration varies per investment, and we are
              actively working on offering more flexible exit options in the
              future.
            </p>
          </div>

          {/* Fractional ownership */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              How does fractional ownership work at Minilands?
            </h2>
            <div className="text-gray-300 text-sm md:text-base leading-relaxed space-y-2">
              <p>
                Each property is owned through a Special Purpose Vehicle (SPV), a
                separate legal entity formed specifically to acquire the asset.
              </p>
              <p>Depending on the SPV structure, ownership is allotted as follows:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <span className="font-semibold">
                    Private Limited Company:
                  </span>{" "}
                  You become a shareholder and debenture holder in proportion to
                  your investment.
                </li>
                <li>
                  <span className="font-semibold">LLP (Limited Liability Partnership):</span>{" "}
                  You are added as a partner in the LLP.
                </li>
              </ul>
            </div>
          </div>

          {/* SPV definition */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              What is a Special Purpose Vehicle (SPV)?
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              An SPV is a standalone legal entity created solely to hold a
              specific property. At Minilands, every asset has its own SPV,
              which allows investors to pool funds and become collective owners
              of the property.
            </p>
          </div>

          {/* If Minilands stops operating */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              What happens to my investment if Minilands stops operating?
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Each SPV operates independently from Minilands. While Minilands
              manages the assets, your investment remains safe under the SPV,
              which can continue functioning under a new asset manager. Moreover,
              Minilands&apos; founders also co-invest in these SPVs, aligning their
              interests with yours.
            </p>
          </div>

          {/* Proof of investment */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              How do I know my money has been invested in the property?
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Once a property is fully funded, Minilands handles the complete
              registration process in the SPV&apos;s name—including payment of stamp
              duty, GST, and registration fees. You&apos;ll receive official
              documents as proof of ownership.
            </p>
          </div>

          {/* Documents received */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              What documents will I receive for my investment?
            </h2>
            <div className="text-gray-300 text-sm md:text-base leading-relaxed space-y-2">
              <p>Depending on the SPV type, you&apos;ll receive:</p>
              <p className="font-semibold">For Private Limited Company SPVs:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Investment Commitment Agreement (ICA)</li>
                <li>Share Certificate</li>
                <li>Debenture Certificate</li>
                <li>Sale Deed</li>
                <li>Buyback Agreement (if applicable)</li>
              </ul>
              <p className="font-semibold">For LLP SPVs:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Expression of Interest (EOI)</li>
                <li>Shareholder Agreement</li>
                <li>Sale Deed</li>
                <li>Property Management Agreement (if applicable)</li>
              </ul>
            </div>
          </div>

          {/* Returns payout */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              How and when will I receive returns?
            </h2>
            <div className="text-gray-300 text-sm md:text-base leading-relaxed space-y-2">
              <p>
                If the property generates rental income, returns are transferred
                quarterly or annually to your verified bank account. Specific
                payout schedules are shared once the asset is acquired.
              </p>
              <p>
                For land investments, returns are distributed at the end of the
                holding period—when the property is sold.
              </p>
            </div>
          </div>

          {/* Not fully funded */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              What if a property doesn&apos;t get fully funded?
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Minilands only accepts funds after full investor commitment is
              secured. If the property doesn&apos;t meet its funding goal, your
              Investment Commitment Agreement (ICA) or Expression of Interest
              (EOI) is automatically cancelled.
            </p>
          </div>

          {/* Returns guaranteed */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              Are returns guaranteed?
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Returns are subject to market conditions and cannot be guaranteed.
              While Minilands provides performance estimates, they are indicative
              and not assured. We recommend caution with any investment offering
              &quot;guaranteed&quot; returns.
            </p>
          </div>

          {/* Exit options */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              How can I exit my investment?
            </h2>
            <div className="text-gray-300 text-sm md:text-base leading-relaxed space-y-2">
              <p>Once your lock-in period ends, there are two ways to exit:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>
                  <span className="font-semibold">Property Sale:</span> If a
                  profitable opportunity arises, Minilands will propose a sale to
                  all co-owners. If 75% or more agree, the property is sold, and
                  profits (after tax and fees) are distributed.
                </li>
                <li>
                  <span className="font-semibold">Share Transfer:</span> You can
                  sell your ownership to someone you know, or Minilands can help
                  connect you with potential buyers from its investor network.
                </li>
              </ol>
            </div>
          </div>

          {/* Taxation intro */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              What are the tax implications on my returns?
            </h2>
            <div className="text-gray-300 text-sm md:text-base leading-relaxed space-y-2">
              <p>
                Your returns from investments through Minilands may be taxed in
                two parts:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <span className="font-semibold">
                    Capital Gains (from property appreciation):
                  </span>{" "}
                  Profits made from the sale of a property are treated as capital
                  gains. Since most properties are held for more than two years,
                  these gains generally qualify as long-term capital gains,
                  currently taxed at 20% with indexation benefits available.
                </li>
                <li>
                  <span className="font-semibold">Rental Income:</span> The tax
                  treatment of rental income depends on how the SPV is
                  structured.
                </li>
              </ul>
            </div>
          </div>

          {/* Tax by SPV type */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              How is rental income taxed for different SPV structures?
            </h2>
            <div className="text-gray-300 text-sm md:text-base leading-relaxed space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <span className="font-semibold">
                    Private Limited Company SPVs:
                  </span>{" "}
                  Rental income distributed to investors is taxed under the head
                  &quot;Income from Other Sources&quot; based on each investor&apos;s
                  individual income tax slab.
                </li>
                <li>
                  <span className="font-semibold">LLP SPVs:</span> The LLP pays a
                  flat tax rate of 30% (plus surcharge and cess). Income
                  distributed to partners (investors) is tax-free in their hands.
                </li>
              </ul>
            </div>
          </div>

          {/* TDS */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              Is Tax Deducted at Source (TDS) applicable?
            </h2>
            <div className="text-gray-300 text-sm md:text-base leading-relaxed space-y-2">
              <p>
                Yes. If the SPV is a Private Limited Company, TDS will be
                deducted on the returns distributed:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>For Indian residents: TDS is 10%.</li>
                <li>
                  For NRIs: TDS is 20%, or as per applicable DTAA rates,
                  subject to a valid Tax Residency Certificate (TRC) and
                  compliance with Indian tax laws.
                </li>
              </ul>
            </div>
          </div>

          {/* NRI taxation */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              How are returns taxed for NRIs?
            </h2>
            <div className="text-gray-300 text-sm md:text-base leading-relaxed space-y-2">
              <p>
                For Non-Resident Indians (NRIs), income sourced or received in
                India—such as rental returns or capital gains—is taxable if it
                exceeds the basic exemption limit. These are taxed according to
                regular income slab rates under Indian tax law.
              </p>
              <p>
                NRIs may also benefit from the Double Taxation Avoidance
                Agreement (DTAA) between India and their country of residence,
                which can reduce or eliminate double taxation—provided they
                submit a valid TRC.
              </p>
              <p className="text-gray-400 text-xs md:text-sm">
                We recommend consulting a professional tax advisor for
                personalised advice, as tax laws are subject to change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


