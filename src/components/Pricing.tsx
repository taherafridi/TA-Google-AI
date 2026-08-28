import React from 'react';
import { Check, ShieldCheck, Zap, Heart, Truck, Sparkles, ArrowRight, Ban } from 'lucide-react';

interface PricingProps {
  onOrderClick: () => void;
  onOpenSimulator: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOrderClick, onOpenSimulator }) => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold text-amber-900 bg-amber-100 border border-amber-200 px-3.5 py-1 rounded-full uppercase tracking-wider">
            Clear, Honest Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit',sans-serif]">
            Pay Once. Protected for Life.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            The tag is yours for life — you never pay for it again. No renewal fees, no apps to buy, no monthly subscription traps.
          </p>
        </div>

        {/* Central Pricing Hero Card */}
        <div className="max-w-3xl mx-auto bg-gradient-to-b from-[#FAF9F6] to-amber-50/30 rounded-3xl border-2 border-amber-400 p-8 sm:p-10 shadow-lg relative">
          
          {/* Top Pill Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-600 text-white font-extrabold text-xs px-4 py-1.5 rounded-full shadow-sm uppercase tracking-wider">
            Lifetime NFC Tag Package
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Price block */}
            <div className="md:col-span-6 text-center md:text-left space-y-3 md:border-r md:border-slate-200 md:pr-6">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Single Pet Tag
              </span>
              
              <div className="flex items-baseline justify-center md:justify-start gap-1">
                <span className="text-5xl sm:text-6xl font-black text-slate-900 font-['Outfit',sans-serif]">
                  $29
                </span>
                <span className="text-xl font-bold text-slate-600">.00</span>
                <span className="text-sm font-semibold text-slate-500 ml-1">CAD</span>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-100/90 px-3 py-1 rounded-full">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>One-time purchase • $0 monthly forever</span>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed pt-2">
                Includes custom physical programming in London, ON, stainless split ring, and standard local lettermail delivery.
              </p>

              <div className="pt-2">
                <button
                  id="pricing-order-cta-btn"
                  onClick={onOrderClick}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-white bg-amber-600 hover:bg-amber-700 shadow-md shadow-amber-600/20 text-base transition-all hover:scale-[1.01] cursor-pointer"
                >
                  <span>Order Your Tag — $29 CAD</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Feature Checklist */}
            <div className="md:col-span-6 space-y-3.5">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Everything Included:
              </h4>

              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Custom NFC Programming:</strong> Your name, numbers & medical notes baked into the chip.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Zero App Requirement:</strong> Native iPhone & Android instant 1-tap reading.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>100% Waterproof & Winter-Proof:</strong> Sealed IP68 resin enclosure built for Ontario weather.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Free Local Delivery:</strong> Shipped right to your mailbox in London & Middlesex County.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Heavy-Duty Hardware:</strong> Includes rustproof stainless steel split ring.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Multi-Pet Bundle callout */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 bg-white/70 p-4 rounded-xl">
            <div className="flex items-center gap-2">
              <span className="text-base">🐾</span>
              <span>
                <strong>Have multiple pets?</strong> Save $6 on 2 tags ($52 total) or save $12 on 3 tags ($75 total) at checkout!
              </span>
            </div>
            <button
              onClick={onOrderClick}
              className="text-amber-700 font-bold hover:underline shrink-0"
            >
              Configure multi-tag order →
            </button>
          </div>

        </div>

        {/* Anti-Subscription comparison reminder */}
        <div className="mt-12 max-w-2xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-slate-600">
          <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
            <Ban className="w-4 h-4" />
          </div>
          <p>
            <strong>Compare to monthly SaaS pet tags:</strong> At $7.99/month, other brands cost you over $95 every single year. With London Pet ID, you pay $29 once and never again.
          </p>
        </div>

      </div>
    </section>
  );
};
