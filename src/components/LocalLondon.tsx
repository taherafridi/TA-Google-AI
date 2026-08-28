import React from 'react';
import { MapPin, Heart, Truck, Sparkles, ShieldCheck, Dog, Cat } from 'lucide-react';
import { SERVICE_AREAS } from '../data/content';

interface LocalLondonProps {
  onOpenResources: () => void;
}

export const LocalLondon: React.FC<LocalLondonProps> = ({ onOpenResources }) => {
  return (
    <section id="local" className="py-16 md:py-24 bg-[#FAF9F6] border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold text-emerald-900 bg-emerald-100 border border-emerald-200 px-3.5 py-1 rounded-full uppercase tracking-wider">
            Community First • Southwestern Ontario
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit',sans-serif]">
            Proudly Made for Local Pet Owners
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We are not a faceless corporate subscription service. We are local pet parents dedicated to keeping London & Middlesex pets safe and home where they belong.
          </p>
        </div>

        {/* Local Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-['Outfit',sans-serif]">
                London & Middlesex
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Full coverage across Downtown, Masonville, Byron, Westmount, White Oaks, Old South, Argyle, plus Dorchester, Komoka, Arva, and Ilderton.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-amber-700">
              Fast local mail dispatch
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-4">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-['Outfit',sans-serif]">
                St. Thomas & Elgin County
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Serving the Railway City, Central Elgin, Port Stanley, and surrounding rural communities with prompt mailbox delivery.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-emerald-700">
              Direct Canada Post lettermail
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center mb-4">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-['Outfit',sans-serif]">
                Woodstock, Strathroy & Oxford
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Reaching Ingersoll, Strathroy-Caradoc, Mount Brydges, Thamesford, and Woodstock pet families.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-blue-700">
              Regional support & care
            </div>
          </div>

        </div>

        {/* Local Community Banner & Pet Safety Resources Modal Trigger */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Local London Pet Network Guide</span>
            </div>
            <h4 className="text-xl font-bold text-slate-900 font-['Outfit',sans-serif]">
              Need local pet licensing or emergency assistance?
            </h4>
            <p className="text-sm text-slate-600 max-w-xl">
              We compiled quick links for City of London licensing, Humane Society London & Middlesex, and 24/7 London Veterinary Emergency.
            </p>
          </div>

          <button
            id="local-open-resources-btn"
            onClick={onOpenResources}
            className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors shrink-0 cursor-pointer"
          >
            View Local Pet Resources →
          </button>
        </div>

      </div>
    </section>
  );
};
