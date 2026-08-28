import React, { useState } from 'react';
import { X, Smartphone, Phone, MessageSquare, AlertCircle, Heart, Check, Radio, RotateCcw, Sparkles } from 'lucide-react';

interface TapSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderNow: () => void;
}

export const TapSimulatorModal: React.FC<TapSimulatorModalProps> = ({
  isOpen,
  onClose,
  onOrderNow
}) => {
  const [deviceType, setDeviceType] = useState<'iphone' | 'android'>('iphone');
  const [tapState, setTapState] = useState<'idle' | 'tapping' | 'scanned'>('idle');
  const [petName, setPetName] = useState('Cooper');
  const [ownerPhone, setOwnerPhone] = useState('(519) 555-0149');
  const [ownerName, setOwnerName] = useState('Emma & Michael');
  const [medicalNote, setMedicalNote] = useState('Friendly golden retriever. Microchipped. Requires daily eye drops.');

  if (!isOpen) return null;

  const handleSimulateTap = () => {
    setTapState('tapping');
    setTimeout(() => {
      setTapState('scanned');
    }, 700);
  };

  const handleReset = () => {
    setTapState('idle');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Top Header */}
        <div className="bg-[#FAF9F6] px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center">
              <Radio className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-base font-['Outfit',sans-serif]">
                Interactive NFC Tap Simulator
              </h3>
              <p className="text-xs text-slate-500">
                Experience exactly what a good Samaritan sees when tapping your pet's tag
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Controls Bar: OS Toggle & Reset */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-100 p-2 rounded-xl text-xs">
            <div className="flex items-center gap-1 font-semibold text-slate-700">
              <span>Simulate Device:</span>
              <button
                type="button"
                onClick={() => setDeviceType('iphone')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  deviceType === 'iphone'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Apple iPhone (iOS)
              </button>
              <button
                type="button"
                onClick={() => setDeviceType('android')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  deviceType === 'android'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Google / Samsung (Android)
              </button>
            </div>

            {tapState === 'scanned' && (
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 font-bold px-2 py-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Tap Again</span>
              </button>
            )}
          </div>

          {/* Interactive Screen Stage */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left: Tag to Tap */}
            <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-[#FAF9F6] rounded-2xl border border-slate-200 text-center">
              <div className="relative mb-4">
                {tapState === 'tapping' && (
                  <div className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-75" />
                )}
                
                {/* Physical Tag Graphic */}
                <div className="w-28 h-28 rounded-full bg-slate-900 text-white shadow-xl flex flex-col items-center justify-center relative border-4 border-slate-700">
                  <div className="absolute top-1.5 w-3 h-3 rounded-full bg-slate-400 border border-slate-600" />
                  <Radio className="w-5 h-5 text-amber-400 mb-1" />
                  <span className="font-extrabold text-xs tracking-wider uppercase font-['Outfit',sans-serif]">
                    {petName}
                  </span>
                  <span className="text-[8px] font-bold text-slate-400">LONDON PET ID</span>
                </div>
              </div>

              <p className="text-xs font-bold text-slate-800 mb-1">
                {tapState === 'scanned' ? 'Tag Read Successfully!' : 'Collar Tag Ready'}
              </p>
              <p className="text-[11px] text-slate-500 mb-4">
                {tapState === 'scanned' ? 'Contact details appeared on phone!' : 'Click button below to simulate phone contactless tap.'}
              </p>

              <button
                id="simulator-tap-action-btn"
                onClick={handleSimulateTap}
                disabled={tapState === 'tapping'}
                className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-amber-600 hover:bg-amber-700 shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                <Smartphone className="w-4 h-4" />
                <span>{tapState === 'scanned' ? 'Tap Phone Again' : 'Tap Phone to Tag'}</span>
              </button>
            </div>

            {/* Right: Simulated Smartphone Screen */}
            <div className="md:col-span-7">
              <div className="bg-slate-950 rounded-3xl p-3 shadow-2xl border-4 border-slate-800 text-white min-h-[340px] flex flex-col justify-between">
                
                {/* Phone Speaker Notch */}
                <div className="w-20 h-4 bg-slate-900 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                </div>

                {tapState === 'idle' && (
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 text-amber-400 flex items-center justify-center animate-pulse">
                      <Radio className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-200">
                        Hold phone against collar tag
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        (No app needed. Click "Tap Phone to Tag" to simulate)
                      </p>
                    </div>
                  </div>
                )}

                {tapState === 'tapping' && (
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center animate-spin">
                      <Radio className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-bold text-amber-300">Reading NFC Chip...</p>
                  </div>
                )}

                {tapState === 'scanned' && (
                  <div className="flex-1 space-y-3 animate-fade-in pt-1">
                    
                    {/* Simulated OS Notification Header */}
                    <div className="bg-slate-900/95 border border-slate-800 rounded-xl p-2.5 flex items-center gap-2.5 shadow-sm">
                      <div className="w-6 h-6 rounded bg-amber-500 flex items-center justify-center text-white text-[10px] font-bold">
                        🐾
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-[11px] font-bold text-slate-200 leading-tight">
                          London Pet ID • Contact Card
                        </p>
                        <p className="text-[10px] text-slate-400">
                          {deviceType === 'iphone' ? 'NFC Tag Detected' : 'Contact Details Available'}
                        </p>
                      </div>
                      <span className="text-[10px] text-slate-400">now</span>
                    </div>

                    {/* Full Pet Finder Reconnection Card */}
                    <div className="bg-slate-900 rounded-2xl p-3.5 border border-slate-800 space-y-2.5 text-left">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wide">
                            Lost Pet Found in London, ON
                          </span>
                          <h4 className="text-lg font-black text-white font-['Outfit',sans-serif]">
                            {petName}
                          </h4>
                          <p className="text-xs text-slate-300">
                            Family: <strong className="text-white">{ownerName}</strong>
                          </p>
                        </div>
                        <span className="text-2xl">🐕</span>
                      </div>

                      {/* Instant Finder Action Buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 text-center shadow-xs cursor-pointer"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Call {ownerPhone}</span>
                        </button>
                        <button
                          type="button"
                          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 text-center shadow-xs cursor-pointer"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Send SMS</span>
                        </button>
                      </div>

                      {/* Care info */}
                      <div className="bg-amber-500/15 border border-amber-500/30 rounded-xl p-2 text-[11px] text-amber-200">
                        <strong className="text-amber-300 block font-bold">Important Pet Notes:</strong>
                        {medicalNote}
                      </div>
                    </div>

                  </div>
                )}

                {/* Simulated Home Bar */}
                <div className="w-24 h-1 bg-slate-700 rounded-full mx-auto mt-2"></div>
              </div>
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            Ready to give your dog or cat the same 1-tap protection?
          </p>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOrderNow();
              }}
              className="w-1/2 sm:w-auto px-5 py-2 text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-xl shadow-sm transition-all cursor-pointer"
            >
              Order Your Tag — $29 CAD
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
