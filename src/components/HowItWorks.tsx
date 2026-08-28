import React from 'react';
import { PenTool, Cpu, Paperclip, HeartHandshake, ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';

interface HowItWorksProps {
  onOrderClick: () => void;
  onOpenSimulator: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOrderClick, onOpenSimulator }) => {
  const steps = [
    {
      number: '01',
      title: 'Order & Customise',
      desc: 'Pick your tag colour and enter the phone numbers, pet name, and any medical/safety notes you want programmed.',
      badge: 'Takes 60 seconds',
      icon: PenTool,
      color: 'amber'
    },
    {
      number: '02',
      title: 'We Program in London, ON',
      desc: 'Our workshop writes your contact data directly onto the waterproof NFC microchip and dispatches it via local mail.',
      badge: 'Ships in 24-48 hrs',
      icon: Cpu,
      color: 'blue'
    },
    {
      number: '03',
      title: 'Clip to Pet’s Collar',
      desc: 'Attach the lightweight tag with the included stainless steel split ring. It is quiet, comfortable, and jingle-free.',
      badge: 'Zero app setup',
      icon: Paperclip,
      color: 'emerald'
    },
    {
      number: '04',
      title: 'One Tap Reunites You',
      desc: 'If your pet gets loose, anyone with a smartphone taps the tag to instantly view your phone number and call or text you.',
      badge: 'Instant reconnection',
      icon: HeartHandshake,
      color: 'purple'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold text-amber-900 bg-amber-100 border border-amber-200 px-3.5 py-1 rounded-full uppercase tracking-wider">
            Zero Account Setup • Friction-Free
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit',sans-serif]">
            How It Works in 4 Simple Steps
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            No username. No password. No subscription checkout. Just a physical tag engineered to protect your dog or cat for life.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                id={`how-it-works-step-${step.number}`}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs flex flex-col justify-between relative group hover:border-amber-400 hover:shadow-md transition-all"
              >
                <div>
                  {/* Step number and icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-['Outfit',sans-serif] font-black text-2xl text-amber-600 bg-amber-50 border border-amber-200/80 w-12 h-12 rounded-xl flex items-center justify-center">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      {step.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 font-['Outfit',sans-serif]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500 group-hover:text-amber-700 transition-colors">
                  <Icon className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition-colors" />
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick CTA banner below steps */}
        <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-slate-900 font-['Outfit',sans-serif]">
              Want to see what the finder's phone looks like during Step 4?
            </h4>
            <p className="text-sm text-slate-600">
              Try our interactive tag tap simulator on any phone or desktop browser.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              id="how-it-works-try-demo-btn"
              onClick={onOpenSimulator}
              className="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors cursor-pointer"
            >
              Test Tap Simulator
            </button>
            <button
              id="how-it-works-order-btn"
              onClick={onOrderClick}
              className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-amber-600 hover:bg-amber-700 shadow-sm transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Order Tag ($29)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
