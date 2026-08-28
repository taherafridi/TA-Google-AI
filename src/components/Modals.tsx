import React, { useState } from 'react';
import { X, ShieldCheck, FileText, RefreshCcw, MapPin, Mail, ExternalLink, Phone, CheckCircle2 } from 'lucide-react';
import { ModalType } from '../types';
import { LOCAL_RESOURCES } from '../data/content';

interface ModalsProps {
  activeModal: ModalType;
  onClose: () => void;
}

export const Modals: React.FC<ModalsProps> = ({ activeModal, onClose }) => {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactMessage, setContactMessage] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactName, setContactName] = useState('');

  if (!activeModal || activeModal === 'simulator') return null;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      // simulate response
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-[#FAF9F6] px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {activeModal === 'privacy' && <ShieldCheck className="w-5 h-5 text-emerald-600" />}
            {activeModal === 'terms' && <FileText className="w-5 h-5 text-amber-600" />}
            {activeModal === 'refund' && <RefreshCcw className="w-5 h-5 text-blue-600" />}
            {activeModal === 'resources' && <MapPin className="w-5 h-5 text-purple-600" />}
            {activeModal === 'contact' && <Mail className="w-5 h-5 text-amber-600" />}

            <h3 className="font-extrabold text-slate-900 text-base font-['Outfit',sans-serif]">
              {activeModal === 'privacy' && 'Privacy Policy & Data Security'}
              {activeModal === 'terms' && 'Terms of Service & Hardware Warranty'}
              {activeModal === 'refund' && 'Refund & Re-Programming Policy'}
              {activeModal === 'resources' && 'London & Middlesex Local Pet Resources'}
              {activeModal === 'contact' && 'Contact London Pet ID Team'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-700 leading-relaxed">
          
          {/* Privacy Policy Modal */}
          {activeModal === 'privacy' && (
            <div className="space-y-4">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-emerald-950 text-xs space-y-1">
                <p className="font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  Zero Public Databases • Zero Trackers • Zero Cloud Profiles
                </p>
                <p>
                  Unlike typical SaaS pet tags, London Pet ID does not maintain an online user account or public web registry. Your information is programmed directly into the physical NFC hardware chip.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1 font-['Outfit',sans-serif]">
                  1. Information Storage
                </h4>
                <p className="text-xs text-slate-600">
                  The pet name, phone numbers, and emergency care notes you provide during order checkout are written onto the passive NFC microchip embedded in your pet's tag. Only individuals physically in proximity who tap the tag with a smartphone can read this information.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1 font-['Outfit',sans-serif]">
                  2. Order & Payment Details
                </h4>
                <p className="text-xs text-slate-600">
                  We collect your shipping name, address, and email solely to fulfill and dispatch your physical order in London, Ontario. We never sell, rent, or trade your personal or pet information to third-party marketers or advertisers.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1 font-['Outfit',sans-serif]">
                  3. Contact Our Privacy Officer
                </h4>
                <p className="text-xs text-slate-600">
                  For questions regarding your data or to request deletion of your order records, please email privacy@londonpetid.ca.
                </p>
              </div>
            </div>
          )}

          {/* Terms & Hardware Warranty Modal */}
          {activeModal === 'terms' && (
            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-950 text-xs space-y-1">
                <p className="font-bold">
                  Lifetime Protection Guarantee ($29.00 CAD One-Time)
                </p>
                <p>
                  Your purchase grants you lifetime ownership of the physical NFC hardware tag with zero recurring software subscription fees.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1 font-['Outfit',sans-serif]">
                  1. Chip Lifetime Functionality
                </h4>
                <p className="text-xs text-slate-600">
                  The internal passive NFC chip requires no battery and is rated for over 100,000 read cycles. If your NFC chip fails due to a manufacturing defect within 2 years of purchase, we will replace it free of charge.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1 font-['Outfit',sans-serif]">
                  2. Complementary Protection
                </h4>
                <p className="text-xs text-slate-600">
                  London Pet ID is designed as an immediate first-aid identification tool for the general public. It does not replace municipal pet licensing or mandatory veterinary microchips required by regional bylaws.
                </p>
              </div>
            </div>
          )}

          {/* Refund & Re-Programming Policy */}
          {activeModal === 'refund' && (
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-blue-950 text-xs space-y-1">
                <p className="font-bold flex items-center gap-1.5">
                  <RefreshCcw className="w-4 h-4 text-blue-700" />
                  Simple $10 Re-Programming Mailer
                </p>
                <p>
                  Moved houses or changed your cell number? You don't need a monthly subscription. We offer a quick $10 re-programming mailer!
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1 font-['Outfit',sans-serif]">
                  30-Day Happiness Guarantee
                </h4>
                <p className="text-xs text-slate-600">
                  If you or your pet are unsatisfied with the fit, weight, or build quality of your tag within 30 days of receipt, send it back for a full refund of your purchase price.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1 font-['Outfit',sans-serif]">
                  How to Change Your Info
                </h4>
                <p className="text-xs text-slate-600">
                  Because tags are encoded directly onto hardware to prevent online hacking and avoid subscription fees, email help@londonpetid.ca to request an updated replacement or re-programming packet.
                </p>
              </div>
            </div>
          )}

          {/* Local London Pet Resources Modal */}
          {activeModal === 'resources' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-600">
                Helpful local directory for pet parents residing in London, St. Thomas, Woodstock, and Middlesex County:
              </p>

              <div className="grid grid-cols-1 gap-3">
                {LOCAL_RESOURCES.map((res, i) => (
                  <div key={i} className="bg-[#FAF9F6] border border-slate-200 rounded-xl p-3.5 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-slate-900 text-sm font-['Outfit',sans-serif]">
                        {res.title}
                      </h4>
                      <span className="text-[10px] font-bold bg-slate-200 text-slate-800 px-2 py-0.5 rounded">
                        {res.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">
                      {res.desc}
                    </p>
                    <div className="text-xs font-semibold text-amber-700 pt-1">
                      {res.contact}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact Us Modal */}
          {activeModal === 'contact' && (
            <div className="space-y-4">
              {contactSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg">Message Sent!</h4>
                  <p className="text-xs text-slate-600">
                    Thank you {contactName || 'there'}, our London workshop team will reply to <strong>{contactEmail}</strong> within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3.5">
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900">
                    We serve <strong>London, St. Thomas, Woodstock, Strathroy, Ingersoll & Middlesex County</strong>. Have a bulk order question or custom request?
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. John Miller"
                      className="w-full bg-[#FAF9F6] border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="john@example.ca"
                      className="w-full bg-[#FAF9F6] border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">How can we help?</label>
                    <textarea
                      required
                      rows={3}
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Ask us anything about phone compatibility, tag sizing, local pickup, or re-programming..."
                      className="w-full bg-[#FAF9F6] border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs text-white bg-amber-600 hover:bg-amber-700 transition-colors shadow-sm cursor-pointer"
                  >
                    Send Message to London Team
                  </button>
                </form>
              )}
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
