import React, { useState } from 'react';
import { TagColor, OrderData } from '../types';
import { TAG_COLORS } from '../data/content';
import {
  Smartphone,
  ShieldCheck,
  Truck,
  Check,
  AlertCircle,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Heart,
  HelpCircle,
  Copy,
  CheckCircle2,
  RefreshCw,
  Eye
} from 'lucide-react';

interface OrderFormProps {
  onOpenSimulator: () => void;
}

export const OrderForm: React.FC<OrderFormProps> = ({ onOpenSimulator }) => {
  const [selectedColor, setSelectedColor] = useState<TagColor>(TAG_COLORS[0]);
  const [quantity, setQuantity] = useState<number>(1);

  const [formData, setFormData] = useState<OrderData>({
    tagColor: TAG_COLORS[0].id,
    quantity: 1,
    petName: 'Barnaby',
    petSpecies: 'dog',
    ownerName: 'Sarah Jenkins',
    primaryPhone: '(519) 555-0194',
    secondaryContact: '(519) 555-0821 (Alex)',
    careNotes: 'Microchipped • Friendly • Needs daily thyroid medication',
    shippingName: '',
    shippingEmail: '',
    shippingAddress: '',
    shippingCity: 'London',
    shippingPostal: '',
    newsletterOptIn: true,
    agreedToTerms: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderReference, setOrderReference] = useState('');
  const [copiedRef, setCopiedRef] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const calculatePrice = () => {
    if (quantity === 1) return { base: 29, discount: 0, total: 29 };
    if (quantity === 2) return { base: 58, discount: 6, total: 52 };
    if (quantity === 3) return { base: 87, discount: 12, total: 75 };
    // 4 or more: $24 each
    return { base: quantity * 29, discount: quantity * 5, total: quantity * 24 };
  };

  const pricing = calculatePrice();

  const handleColorSelect = (color: TagColor) => {
    setSelectedColor(color);
    setFormData((prev) => ({ ...prev, tagColor: color.id }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.petName.trim()) newErrors.petName = 'Pet name is required';
    if (!formData.primaryPhone.trim()) newErrors.primaryPhone = 'Primary phone number is required';
    if (!formData.shippingName.trim()) newErrors.shippingName = 'Full shipping name is required';
    if (!formData.shippingEmail.trim() || !formData.shippingEmail.includes('@')) {
      newErrors.shippingEmail = 'Valid email is required for order confirmation';
    }
    if (!formData.shippingAddress.trim()) newErrors.shippingAddress = 'Street address is required';
    if (!formData.shippingCity.trim()) newErrors.shippingCity = 'City is required';
    if (!formData.shippingPostal.trim()) newErrors.shippingPostal = 'Postal code is required';
    if (!formData.agreedToTerms) newErrors.agreedToTerms = 'Please accept order terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      const firstError = Object.keys(errors)[0];
      const el = document.getElementsByName(firstError)[0];
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);

    // Simulate API dispatch (e.g. Formspree / backend endpoint)
    setTimeout(() => {
      const randomRef = `LDN-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderReference(randomRef);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleCopyRef = () => {
    navigator.clipboard.writeText(orderReference);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  const handleResetOrder = () => {
    setIsSubmitted(false);
    setFormData((prev) => ({
      ...prev,
      shippingName: '',
      shippingEmail: '',
      shippingAddress: '',
      shippingPostal: ''
    }));
  };

  return (
    <section id="order" className="py-16 md:py-24 bg-[#FAF9F6] border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-amber-900 bg-amber-100 border border-amber-200 px-3.5 py-1 rounded-full uppercase tracking-wider">
            Custom Programming & Pre-Order
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit',sans-serif]">
            Order Your London Pet ID Tag
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Personalize your tag color, enter the contact info to program into the NFC chip, and have it delivered directly to your door in London & Middlesex County.
          </p>
        </div>

        {isSubmitted ? (
          /* Order Confirmation Screen */
          <div className="max-w-2xl mx-auto bg-white rounded-3xl border-2 border-emerald-500 p-8 sm:p-10 shadow-xl text-center space-y-6 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider">
                Order Received & Queued for Programming
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 font-['Outfit',sans-serif]">
                Thank You, {formData.shippingName || 'Pet Parent'}!
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                We sent an order receipt and programming confirmation to <strong className="text-slate-900">{formData.shippingEmail}</strong>.
              </p>
            </div>

            {/* Order Reference Box */}
            <div className="bg-[#FAF9F6] border border-slate-200 rounded-2xl p-5 text-left space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-slate-500">Order Reference</span>
                  <p className="text-lg font-black text-slate-900 font-mono">{orderReference}</p>
                </div>
                <button
                  onClick={handleCopyRef}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedRef ? 'Copied!' : 'Copy Ref'}</span>
                </button>
              </div>

              <div className="border-t border-slate-200 pt-3 grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-slate-500">Pet Name:</span>
                  <p className="font-bold text-slate-800">{formData.petName}</p>
                </div>
                <div>
                  <span className="text-slate-500">Tag Style:</span>
                  <p className="font-bold text-slate-800">{selectedColor.name}</p>
                </div>
                <div>
                  <span className="text-slate-500">Phone Programmed:</span>
                  <p className="font-bold text-slate-800">{formData.primaryPhone}</p>
                </div>
                <div>
                  <span className="text-slate-500">Total Charged:</span>
                  <p className="font-bold text-emerald-700">${pricing.total}.00 CAD (One-time)</p>
                </div>
              </div>
            </div>

            {/* Next Steps Info */}
            <div className="text-left bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-blue-900 space-y-1.5">
              <p className="font-bold flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-blue-700" />
                What happens next?
              </p>
              <p className="text-blue-800 leading-relaxed">
                1. Our London workshop writes your contact details to the hardware NFC chip.
                <br />
                2. Your tag is dispatched via Canada Post Lettermail within 24-48 business hours to <strong>{formData.shippingAddress}, {formData.shippingCity}</strong>.
                <br />
                3. Simply clip the tag to your pet's collar when it arrives — it is ready to work immediately!
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={handleResetOrder}
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 underline cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Place another order for a second pet</span>
              </button>
            </div>
          </div>
        ) : (
          /* Main Order Builder Form */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-8">
              
              {/* Step 1: Color Selection */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-bold text-slate-900 font-['Outfit',sans-serif] flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-xs flex items-center justify-center font-black">1</span>
                    Choose Tag Color
                  </label>
                  <span className="text-xs font-semibold text-slate-500">
                    Selected: <strong className="text-slate-900">{selectedColor.name}</strong>
                  </span>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                  {TAG_COLORS.map((color) => {
                    const isSelected = selectedColor.id === color.id;
                    return (
                      <button
                        type="button"
                        key={color.id}
                        onClick={() => handleColorSelect(color)}
                        className={`p-2.5 rounded-xl border flex flex-col items-center gap-1.5 transition-all text-center cursor-pointer ${
                          isSelected
                            ? 'border-amber-500 bg-amber-50/50 ring-2 ring-amber-500/20'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div
                          className="w-7 h-7 rounded-full shadow-inner border border-black/10 flex items-center justify-center"
                          style={{ backgroundColor: color.hex }}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 text-white drop-shadow" />}
                        </div>
                        <span className="text-[11px] font-semibold text-slate-800 leading-tight">
                          {color.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Quantity Selection */}
              <div>
                <label className="text-sm font-bold text-slate-900 font-['Outfit',sans-serif] flex items-center gap-2 mb-3">
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-xs flex items-center justify-center font-black">2</span>
                  How Many Tags?
                </label>

                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setQuantity(1)}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      quantity === 1
                        ? 'border-amber-500 bg-amber-50/70 font-bold text-amber-950 ring-2 ring-amber-500/20'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                    }`}
                  >
                    <div className="text-sm font-bold">1 Tag</div>
                    <div className="text-xs text-slate-500">$29 CAD</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setQuantity(2)}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer relative ${
                      quantity === 2
                        ? 'border-amber-500 bg-amber-50/70 font-bold text-amber-950 ring-2 ring-amber-500/20'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                    }`}
                  >
                    <span className="absolute -top-2 right-2 bg-emerald-600 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded-full">
                      SAVE $6
                    </span>
                    <div className="text-sm font-bold">2 Tags</div>
                    <div className="text-xs text-slate-500">$52 CAD</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setQuantity(3)}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer relative ${
                      quantity === 3
                        ? 'border-amber-500 bg-amber-50/70 font-bold text-amber-950 ring-2 ring-amber-500/20'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                    }`}
                  >
                    <span className="absolute -top-2 right-2 bg-emerald-600 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded-full">
                      SAVE $12
                    </span>
                    <div className="text-sm font-bold">3 Tags</div>
                    <div className="text-xs text-slate-500">$75 CAD</div>
                  </button>
                </div>
              </div>

              {/* Step 3: Contact Info to Program into NFC Chip */}
              <div className="space-y-4 pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-slate-900 font-['Outfit',sans-serif] flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-xs flex items-center justify-center font-black">3</span>
                    Info to Program onto Tag Microchip
                  </label>
                  <span className="text-[11px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                    Baked into hardware
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Pet's Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="petName"
                      value={formData.petName}
                      onChange={handleInputChange}
                      placeholder="e.g. Luna, Cooper, Milo"
                      className={`w-full bg-[#FAF9F6] border rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 ${
                        errors.petName ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-amber-500/20 focus:border-amber-500'
                      }`}
                    />
                    {errors.petName && <p className="text-rose-600 text-xs mt-1">{errors.petName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Pet Species
                    </label>
                    <select
                      name="petSpecies"
                      value={formData.petSpecies}
                      onChange={handleInputChange}
                      className="w-full bg-[#FAF9F6] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    >
                      <option value="dog">Dog 🐕</option>
                      <option value="cat">Cat 🐈</option>
                      <option value="other">Other Pet 🐾</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Primary Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="primaryPhone"
                      value={formData.primaryPhone}
                      onChange={handleInputChange}
                      placeholder="(519) 000-0000"
                      className={`w-full bg-[#FAF9F6] border rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 ${
                        errors.primaryPhone ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-amber-500/20 focus:border-amber-500'
                      }`}
                    />
                    {errors.primaryPhone && <p className="text-rose-600 text-xs mt-1">{errors.primaryPhone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Secondary Phone / Name (Optional)
                    </label>
                    <input
                      type="text"
                      name="secondaryContact"
                      value={formData.secondaryContact}
                      onChange={handleInputChange}
                      placeholder="e.g. (519) 111-2222 (Dave)"
                      className="w-full bg-[#FAF9F6] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Special Care, Medical, or Dietary Notes
                  </label>
                  <textarea
                    name="careNotes"
                    rows={2}
                    value={formData.careNotes}
                    onChange={handleInputChange}
                    placeholder="e.g. Microchipped, Friendly, Needs daily medication, Deaf, Reward if found"
                    className="w-full bg-[#FAF9F6] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  />
                  <span className="text-[11px] text-slate-500">
                    This appears on the finder's phone screen instantly when they tap the collar.
                  </span>
                </div>
              </div>

              {/* Step 4: Shipping Address */}
              <div className="space-y-4 pt-2 border-t border-slate-100">
                <label className="text-sm font-bold text-slate-900 font-['Outfit',sans-serif] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-xs flex items-center justify-center font-black">4</span>
                  Middlesex / London Shipping Address
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="shippingName"
                      value={formData.shippingName}
                      onChange={handleInputChange}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full bg-[#FAF9F6] border rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 ${
                        errors.shippingName ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-amber-500/20 focus:border-amber-500'
                      }`}
                    />
                    {errors.shippingName && <p className="text-rose-600 text-xs mt-1">{errors.shippingName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address (For Order Updates) <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="shippingEmail"
                      value={formData.shippingEmail}
                      onChange={handleInputChange}
                      placeholder="sarah@example.com"
                      className={`w-full bg-[#FAF9F6] border rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 ${
                        errors.shippingEmail ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-amber-500/20 focus:border-amber-500'
                      }`}
                    />
                    {errors.shippingEmail && <p className="text-rose-600 text-xs mt-1">{errors.shippingEmail}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Street Address & Unit <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="shippingAddress"
                    value={formData.shippingAddress}
                    onChange={handleInputChange}
                    placeholder="e.g. 450 Richmond Street, Apt 3B"
                    className={`w-full bg-[#FAF9F6] border rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 ${
                      errors.shippingAddress ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-amber-500/20 focus:border-amber-500'
                    }`}
                  />
                  {errors.shippingAddress && <p className="text-rose-600 text-xs mt-1">{errors.shippingAddress}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      City / Area <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="shippingCity"
                      value={formData.shippingCity}
                      onChange={handleInputChange}
                      placeholder="London, St. Thomas, Woodstock, etc."
                      className={`w-full bg-[#FAF9F6] border rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 ${
                        errors.shippingCity ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-amber-500/20 focus:border-amber-500'
                      }`}
                    />
                    {errors.shippingCity && <p className="text-rose-600 text-xs mt-1">{errors.shippingCity}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Postal Code <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="shippingPostal"
                      value={formData.shippingPostal}
                      onChange={handleInputChange}
                      placeholder="N6A 3E4"
                      className={`w-full bg-[#FAF9F6] border rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 ${
                        errors.shippingPostal ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-amber-500/20 focus:border-amber-500'
                      }`}
                    />
                    {errors.shippingPostal && <p className="text-rose-600 text-xs mt-1">{errors.shippingPostal}</p>}
                  </div>
                </div>
              </div>

              {/* Consent & Checkbox terms */}
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreedToTerms"
                    checked={formData.agreedToTerms}
                    onChange={handleInputChange}
                    className="mt-0.5 rounded border-slate-300 text-amber-600 focus:ring-amber-500"
                  />
                  <span>
                    I confirm that the contact info above is accurate and will be permanently programmed into my physical tag chip. ($29 CAD one-time payment).
                  </span>
                </label>
                {errors.agreedToTerms && <p className="text-rose-600 text-xs">{errors.agreedToTerms}</p>}

                <label className="flex items-start gap-2.5 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    name="newsletterOptIn"
                    checked={formData.newsletterOptIn}
                    onChange={handleInputChange}
                    className="mt-0.5 rounded border-slate-300 text-amber-600 focus:ring-amber-500"
                  />
                  <span>
                    Send me occasional London & Middlesex local pet safety reminders and dog park news. (No spam, unsubscribe anytime).
                  </span>
                </label>
              </div>

              {/* Submit CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="order-form-submit-btn"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-2xl font-bold text-white bg-amber-600 hover:bg-amber-700 shadow-md shadow-amber-600/25 transition-all text-base flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span>Securing Your Custom Tag...</span>
                    </>
                  ) : (
                    <>
                      <span>Complete Pre-Order — ${pricing.total}.00 CAD</span>
                      <span className="text-amber-200 text-xs bg-amber-800/40 px-2 py-0.5 rounded-md font-semibold">
                        Free Local Shipping
                      </span>
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-slate-500 mt-2 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>No subscription • Yours for life • Dispatched from London, ON</span>
                </p>
              </div>

            </form>

            {/* Right Column: Live Interactive Dual Previews (Tag Hardware & Finder Phone View) */}
            <div className="lg:col-span-5 space-y-6 sticky top-28">
              
              {/* Card 1: Physical Tag Mockup */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm text-center relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Physical Tag Preview
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    4.5g Waterproof Resin
                  </span>
                </div>

                {/* Tag Visual Representation */}
                <div className="py-4 flex justify-center">
                  <div
                    className="w-40 h-40 rounded-full flex flex-col items-center justify-center relative shadow-lg transition-colors duration-300 border-4 border-slate-100"
                    style={{ backgroundColor: selectedColor.hex, color: selectedColor.textColor }}
                  >
                    {/* Top Ring hole */}
                    <div className="absolute top-2 w-4 h-4 rounded-full bg-slate-300 border-2 border-slate-500 shadow-inner" />
                    
                    {/* NFC Symbol */}
                    <div className="mb-1 opacity-90">
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 2.22.73 4.27 1.95 5.92L3.5 21l3.2-.43C8.28 21.43 10.07 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" opacity="0"/>
                        <circle cx="8" cy="8" r="2.2" />
                        <circle cx="16" cy="8" r="2.2" />
                        <circle cx="4.5" cy="12.5" r="1.8" />
                        <circle cx="19.5" cy="12.5" r="1.8" />
                        <path d="M12 11.5c-3.2 0-5.8 2.3-5.8 5.1 0 1.9 1.6 3.4 3.8 3.4 1.2 0 1.5-.7 2-.7s.8.7 2 .7c2.2 0 3.8-1.5 3.8-3.4 0-2.8-2.6-5.1-5.8-5.1z" />
                      </svg>
                    </div>

                    <span className="font-extrabold text-base tracking-wider uppercase font-['Outfit',sans-serif] px-2 truncate max-w-[130px]">
                      {formData.petName || 'PET NAME'}
                    </span>

                    <span className="text-[10px] font-bold tracking-widest uppercase opacity-80 mt-0.5">
                      LONDON PET ID
                    </span>

                    <span className="text-[9px] opacity-70 tracking-tight">
                      TAP WITH PHONE
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-500">
                  Tag colour: <strong>{selectedColor.name}</strong> • Heavy-duty split ring included
                </p>
              </div>

              {/* Card 2: Live Finder Phone Screen View */}
              <div className="bg-slate-900 rounded-3xl p-5 border-4 border-slate-800 shadow-xl text-white">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                  <div className="flex items-center gap-1.5">
                    <Smartphone className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold text-amber-300">
                      Live Finder Phone Screen
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Instant NFC Popup</span>
                </div>

                {/* Finder Phone mockup card */}
                <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700/80 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wide">
                        Lost Pet Reconnection
                      </span>
                      <h4 className="text-xl font-black text-white font-['Outfit',sans-serif]">
                        {formData.petName || 'Pet Name'}
                      </h4>
                      <p className="text-xs text-slate-300">
                        Belongs to <strong className="text-white">{formData.shippingName || 'Sarah Jenkins'}</strong>
                      </p>
                    </div>
                    <span className="text-2xl">
                      {formData.petSpecies === 'cat' ? '🐈' : formData.petSpecies === 'dog' ? '🐕' : '🐾'}
                    </span>
                  </div>

                  {/* 1-Click Action Buttons for Finder */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <a
                      href={`tel:${formData.primaryPhone}`}
                      onClick={(e) => e.preventDefault()}
                      className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 text-center shadow-xs"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Owner</span>
                    </a>
                    <a
                      href={`sms:${formData.primaryPhone}`}
                      onClick={(e) => e.preventDefault()}
                      className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 text-center shadow-xs"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send SMS</span>
                    </a>
                  </div>

                  {/* Phone & Secondary */}
                  <div className="bg-slate-900/80 rounded-xl p-2.5 text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Primary Phone:</span>
                      <span className="font-bold text-white">{formData.primaryPhone || '(519) 555-0194'}</span>
                    </div>
                    {formData.secondaryContact && (
                      <div className="flex justify-between">
                        <span className="text-slate-400">Secondary:</span>
                        <span className="font-medium text-slate-200">{formData.secondaryContact}</span>
                      </div>
                    )}
                  </div>

                  {/* Care Notes */}
                  {formData.careNotes && (
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-2.5 text-[11px] text-amber-200">
                      <strong className="block text-amber-300 font-bold mb-0.5">⚠️ Care / Medical Notes:</strong>
                      {formData.careNotes}
                    </div>
                  )}

                  <div className="pt-1 text-[10px] text-center text-slate-400">
                    Tapped via London Pet ID contactless tag
                  </div>
                </div>

                <div className="pt-3 text-center">
                  <button
                    type="button"
                    onClick={onOpenSimulator}
                    className="text-xs text-amber-400 hover:text-amber-300 font-bold flex items-center justify-center gap-1 mx-auto cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Launch interactive full tap simulator</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
