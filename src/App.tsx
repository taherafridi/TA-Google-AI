import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatIsNFC } from './components/WhatIsNFC';
import { HowItWorks } from './components/HowItWorks';
import { NfcVsMicrochip } from './components/NfcVsMicrochip';
import { Durability } from './components/Durability';
import { Pricing } from './components/Pricing';
import { LocalLondon } from './components/LocalLondon';
import { FAQ } from './components/FAQ';
import { OrderForm } from './components/OrderForm';
import { Footer } from './components/Footer';
import { TapSimulatorModal } from './components/TapSimulatorModal';
import { Modals } from './components/Modals';
import { ModalType } from './types';

export default function App() {
  const [simulatorOpen, setSimulatorOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleOpenSimulator = () => {
    setSimulatorOpen(true);
  };

  const handleCloseSimulator = () => {
    setSimulatorOpen(false);
  };

  const handleOrderFromSimulator = () => {
    setSimulatorOpen(false);
    scrollToSection('order');
  };

  const handleOpenModal = (type: ModalType) => {
    setActiveModal(type);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 selection:bg-amber-500 selection:text-white flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Sticky Header */}
      <Header
        onOpenSimulator={handleOpenSimulator}
        onScrollToSection={scrollToSection}
        onOpenContact={() => handleOpenModal('contact')}
      />

      {/* Main Single-Page Sections */}
      <main className="flex-1">
        <Hero
          onOrderClick={() => scrollToSection('order')}
          onHowItWorksClick={() => scrollToSection('how-it-works')}
          onOpenSimulator={handleOpenSimulator}
        />

        <WhatIsNFC onOpenSimulator={handleOpenSimulator} />

        <HowItWorks
          onOrderClick={() => scrollToSection('order')}
          onOpenSimulator={handleOpenSimulator}
        />

        <NfcVsMicrochip />

        <Durability />

        <Pricing
          onOrderClick={() => scrollToSection('order')}
          onOpenSimulator={handleOpenSimulator}
        />

        <LocalLondon onOpenResources={() => handleOpenModal('resources')} />

        <FAQ />

        <OrderForm onOpenSimulator={handleOpenSimulator} />
      </main>

      {/* Footer */}
      <Footer
        onScrollToSection={scrollToSection}
        onOpenModal={handleOpenModal}
      />

      {/* Interactive NFC Phone Tap Simulation Modal */}
      <TapSimulatorModal
        isOpen={simulatorOpen}
        onClose={handleCloseSimulator}
        onOrderNow={handleOrderFromSimulator}
      />

      {/* Secondary Light Modals (Privacy, Terms, Refunds, Resources, Contact) */}
      <Modals
        activeModal={activeModal}
        onClose={handleCloseModal}
      />
    </div>
  );
}
