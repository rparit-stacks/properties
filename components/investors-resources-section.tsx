"use client";

import { useState } from "react";

export default function InvestorsResourcesSection() {
  const [investmentAmount, setInvestmentAmount] = useState(2000000);
  const [rentalYield, setRentalYield] = useState(7.5);
  const [appreciation, setAppreciation] = useState(7.5);

  const calculateReturns = () => {
    const amount = investmentAmount;
    const yield_rate = rentalYield / 100;
    const appreciation_rate = appreciation / 100;

    const years = [1, 2, 3, 4, 5];
    return years.map((year) => {
      const rentalIncome = amount * yield_rate * year;
      const capitalAppreciation =
        amount * Math.pow(1 + appreciation_rate, year) - amount;
      return {
        year,
        rental: rentalIncome,
        capital: capitalAppreciation,
        total: rentalIncome + capitalAppreciation,
      };
    });
  };

  const returns = calculateReturns();
  const totalROI = returns[4].total;
  const finalValue = investmentAmount + totalROI;
  const avgReturn = (totalROI / investmentAmount / 5) * 100;

  return (
    <section className="section-shine py-16 md:py-20">
      <div className="container relative mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow">Tools</span>
          <h2 className="section-heading mt-5">Investors Resources</h2>
          <p className="section-subheading mt-4">
            Your one-stop resource for real estate investment.
          </p>
          <div className="gold-rule mt-6" />
        </div>

        <div className="glass-panel mx-auto max-w-5xl p-6 shadow-panel md:p-8">
          <h3 className="mb-8 text-center text-2xl font-bold text-white">
            ROI Investment Calculator
          </h3>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <label className="mb-3 block text-lg font-semibold text-white">
                  Enter Investment Amount
                </label>
                <div className="flex items-center gap-3">
                  <span className="font-medium text-accent">₹</span>
                  <input
                    type="number"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(Number(e.target.value) || 0)}
                    className="flex-1 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-white focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
                  />
                </div>
              </div>

              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label className="text-lg font-semibold text-white">Net Rental Yield %</label>
                  <span className="text-lg font-bold text-accent">{rentalYield}%</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="0.1"
                  value={rentalYield}
                  onChange={(e) => setRentalYield(Number(e.target.value))}
                  className="slider h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/10"
                />
                <div className="mt-1 flex justify-between text-xs text-slate-500">
                  <span>1%</span>
                  <span>15%</span>
                </div>
              </div>

              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label className="text-lg font-semibold text-white">Annual Appreciation %</label>
                  <span className="text-lg font-bold text-accent">{appreciation}%</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="0.1"
                  value={appreciation}
                  onChange={(e) => setAppreciation(Number(e.target.value))}
                  className="slider h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/10"
                />
                <div className="mt-1 flex justify-between text-xs text-slate-500">
                  <span>1%</span>
                  <span>15%</span>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-6">
                <div className="mb-2 flex justify-between text-sm text-slate-400">
                  <span className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded bg-emerald-400" />
                    Total Return Rental (5 Years)
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded bg-sky-400" />
                    Capital Appreciation (5 Years)
                  </span>
                </div>
                <div className="mb-4 flex justify-between font-semibold text-white">
                  <span>₹ {Math.round(returns[4].rental).toLocaleString("en-IN")}</span>
                  <span>₹ {Math.round(returns[4].capital).toLocaleString("en-IN")}</span>
                </div>
              </div>

              <div className="mb-6 flex h-40 items-end justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4">
                {returns.map((data) => {
                  const maxValue = Math.max(...returns.map((r) => r.total));
                  const rentalHeight = maxValue > 0 ? (data.rental / maxValue) * 120 : 4;
                  const capitalHeight = maxValue > 0 ? (data.capital / maxValue) * 120 : 4;

                  return (
                    <div key={data.year} className="flex flex-col items-center">
                      <div className="mb-2 flex flex-col items-center">
                        <div
                          className="w-8 rounded-t bg-sky-400"
                          style={{ height: `${capitalHeight}px`, minHeight: "4px" }}
                        />
                        <div
                          className="w-8 rounded-b bg-emerald-400"
                          style={{ height: `${rentalHeight}px`, minHeight: "4px" }}
                        />
                      </div>
                      <span className="text-xs font-medium text-slate-400">{data.year} Year</span>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex justify-between">
                  <span className="text-slate-400">Avg Annualized Return</span>
                  <span className="font-semibold text-white">{avgReturn.toFixed(1)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Total ROI</span>
                  <span className="font-semibold text-white">
                    ₹ {Math.round(totalROI).toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex justify-between border-t border-white/10 pt-3">
                  <span className="text-slate-400">Value After 5 Years</span>
                  <span className="font-bold text-accent">
                    ₹ {Math.round(finalValue).toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: #fecc57;
          cursor: pointer;
          box-shadow: 0 0 12px rgba(254, 204, 87, 0.45);
        }
        .slider::-moz-range-thumb {
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: #fecc57;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 12px rgba(254, 204, 87, 0.45);
        }
      `}</style>
    </section>
  );
}
