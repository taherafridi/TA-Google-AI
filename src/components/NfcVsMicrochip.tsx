import React, { useState } from 'react';
import { Check, X, Shield, Sparkles, AlertCircle, Heart, Zap, Stethoscope } from 'lucide-react';
import { COMPARISON_DATA } from '../data/content';

export const NfcVsMicrochip: React.FC = () => {
  return (
    <section id="comparison" className="py-16 md:py-24 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold text-emerald-900 bg-emerald-100 border border-emerald-200 px-3.5 py-1 rounded-full uppercase tracking-wider">
            Better Together
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit',sans-serif]">
            Why Pet Owners Trust NFC Pet ID
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A microchip is essential, but it requires a trip to the vet clinic. London Pet ID provides <strong className="text-slate-900">instant frontline protection</strong> on the street.
          </p>
        </div>

        {/* 2 Big Complementary Cards: First 10 Minutes vs Backline Security */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: London Pet ID (Frontline) */}
          <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/5 rounded-3xl p-7 sm:p-8 border-2 border-amber-400 shadow-sm relative">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-amber-600 text-white font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wide">
                Frontline First-Aid (First 10 Mins)
              </span>
              <Zap className="w-6 h-6 text-amber-600" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-3 font-['Outfit',sans-serif]">
              London Pet ID NFC Tag
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed mb-6">
              When your pet slips out an open gate in London, a neighbour, walker, or driver will usually spot them within minutes.
            </p>

            <ul className="space-y-3 text-sm text-slate-800">
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>Instant contact:</strong> Finder taps with phone on the sidewalk; you get a call or text immediately.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>No clinic needed:</strong> Saves the finder the stress of transporting an anxious dog to an animal hospital.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>Emergency notes visible:</strong> Finder immediately sees dietary or medical warnings (e.g. "Diabetic dog").</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Vet Microchip (Backup) */}
          <div className="bg-slate-50 rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-xs relative">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-slate-800 text-white font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wide">
                Permanent Backup (Shelter & Vet)
              </span>
              <Stethoscope className="w-6 h-6 text-slate-700" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-3 font-['Outfit',sans-serif]">
              Veterinary Microchip
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              An indispensable permanent RFID transponder placed under your pet’s skin by a licensed veterinarian.
            </p>

            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>Can never be lost or removed:</strong> Stays safely beneath the skin for the pet's lifetime.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                </div>
                <span><strong>Requires scanner:</strong> Everyday citizens cannot read a microchip without taking the pet into a clinic.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="w-3.5 h-3.5" />
                </div>
                <span><strong>The Verdict:</strong> Pair London Pet ID with a microchip for total, unbreakable 360° peace of mind.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Detailed Side-by-Side Comparison Matrix */}
        <div className="bg-[#FAF9F6] border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs overflow-hidden">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-900 font-['Outfit',sans-serif]">
              Feature-by-Feature Comparison
            </h3>
            <p className="text-sm text-slate-500">
              How London Pet ID compares against traditional metal tags, microchips, and subscription SaaS tags.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-slate-300">
                  <th className="py-3 px-4 font-bold text-slate-900 w-1/4">Key Capability</th>
                  <th className="py-3 px-4 font-extrabold text-amber-900 bg-amber-100/70 rounded-t-xl w-1/4">
                    London Pet ID (NFC)
                  </th>
                  <th className="py-3 px-4 font-bold text-slate-700 w-1/4">Old Engraved Metal</th>
                  <th className="py-3 px-4 font-bold text-slate-700 w-1/4">SaaS / App QR Tags</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/60 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-900">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-emerald-950 bg-amber-50/50">
                      <div className="flex items-center gap-1.5 text-emerald-800">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{row.nfc}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">
                      {row.metal}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">
                      {row.qrTag}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
