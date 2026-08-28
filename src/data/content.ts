import { TagColor, FaqItem } from '../types';

export const TAG_COLORS: TagColor[] = [
  {
    id: 'matte-onyx',
    name: 'Matte Onyx',
    hex: '#1E293B',
    accentHex: '#0F172A',
    textColor: '#F8FAFC',
    description: 'Sleek, minimalist dark slate finish with high contrast.'
  },
  {
    id: 'london-navy',
    name: 'London Navy',
    hex: '#1E3A8A',
    accentHex: '#172554',
    textColor: '#EFF6FF',
    description: 'Deep Thames blue with satin smooth coating.'
  },
  {
    id: 'forest-pine',
    name: 'Forest Pine',
    hex: '#14532D',
    accentHex: '#052E16',
    textColor: '#F0FDF4',
    description: 'Rich Springbank Park evergreen shade.'
  },
  {
    id: 'sunset-ember',
    name: 'Sunset Ember',
    hex: '#D97706',
    accentHex: '#B45309',
    textColor: '#FFFBEB',
    description: 'Warm golden amber that stands out on dark coats.'
  },
  {
    id: 'dusty-rose',
    name: 'Dusty Rose',
    hex: '#BE185D',
    accentHex: '#831843',
    textColor: '#FDF2F8',
    description: 'Soft vibrant berry tone, lightweight & elegant.'
  },
  {
    id: 'mist-silver',
    name: 'Mist Silver',
    hex: '#475569',
    accentHex: '#334155',
    textColor: '#F8FAFC',
    description: 'Understated matte graphite tone for all collars.'
  }
];

export const SERVICE_AREAS = [
  { name: 'City of London', detail: 'North, South, Downtown, Byron, Masonville, Westmount, Argyle' },
  { name: 'St. Thomas & Elgin', detail: 'Central Elgin & Southwold' },
  { name: 'Woodstock & Oxford', detail: 'Ingersoll, Tillsonburg & Thamesford' },
  { name: 'Strathroy-Caradoc', detail: 'Mount Brydges & Delaware' },
  { name: 'Middlesex County', detail: 'Dorchester, Komoka, Arva, Ilderton, Lucan' }
];

export const COMPARISON_DATA = [
  {
    feature: 'How a Finder Reaches You',
    nfc: 'Instant 1-tap phone prompt with direct call/SMS button',
    metal: 'Squinting at tiny worn etched lettering',
    microchip: 'Requires transporting pet to a vet clinic with RFID scanner',
    qrTag: 'Requires opening camera, focusing lens, and good lighting'
  },
  {
    feature: 'App Required for Finder?',
    nfc: 'No app needed (Native iOS/Android NFC)',
    metal: 'No',
    microchip: 'Requires specialized $300+ handheld vet reader',
    qrTag: 'Usually opens a slow browser page or third-party app'
  },
  {
    feature: 'Subscription / Ongoing Fees',
    nfc: '$0 — $29 once for life',
    metal: '$0',
    microchip: 'Often $20-$40/year for registry updates',
    qrTag: '$5.99 to $9.99/month on competitor platforms'
  },
  {
    feature: 'Immediate Passerby Assistance',
    nfc: 'Immediate (10 seconds on the sidewalk)',
    metal: 'Fair (if not scratched/chewed)',
    microchip: 'Delayed (often hours or next morning if clinics closed)',
    qrTag: 'Delayed if camera fails to focus or QR is dirty'
  },
  {
    feature: 'Batteries / Charging',
    nfc: 'Zero battery (passive NFC technology)',
    metal: 'None',
    microchip: 'None',
    qrTag: 'None (or GPS tags requiring daily charging)'
  },
  {
    feature: 'Wear & Weather Durability',
    nfc: '100% Waterproof resin & scratchproof chip',
    metal: 'Scratches, tarnishes, and rubs smooth',
    microchip: 'Permanent under skin',
    qrTag: 'QR code sticker rubs off after mud & rain'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'Does whoever finds my pet need a special app to scan the tag?',
    answer: 'No! That is the biggest advantage of NFC. Any modern smartphone (iPhone XS or newer, and almost all Android phones) has built-in NFC reader technology enabled by default. The finder simply taps their phone against your pet’s tag — exactly like tapping a credit card at a checkout — and your contact card opens immediately on their screen.'
  },
  {
    question: 'Does the tag need batteries or ever need to be charged?',
    answer: 'Never. The tag uses passive NFC (Near Field Communication) technology. It draws a tiny surge of power from the finder’s smartphone when held close to it. There are no batteries, no charging cords, and no electronics to corrode or die.'
  },
  {
    question: 'What if my phone number or contact info changes in the future?',
    answer: 'Because we intentionally built London Pet ID without fragile cloud servers, recurring subscription fees, or hackable accounts, the contact info is programmed directly into the physical chip at our London workshop. If you ever move or change your phone number, simply reach out to us! We offer a quick $10 low-cost re-programming mailer or discounted replacement tag without forcing you into an expensive monthly subscription.'
  },
  {
    question: 'Does this replace my pet’s vet microchip?',
    answer: 'They are built to work together perfectly! Microchips are an essential permanent backup when a pet is surrendered to a veterinary hospital or shelter. However, an everyday neighbour or jogger who finds your dog walking down Richmond Street cannot read a microchip without taking time off work and driving to a clinic. London Pet ID solves the crucial first 10 minutes by letting any good Samaritan call you on the spot.'
  },
  {
    question: 'Which smartphones are compatible with NFC pet tags?',
    answer: 'Virtually all modern smartphones! For Apple users, iPhone XS, XR, 11, 12, 13, 14, 15, 16 and newer automatically read NFC tags without opening any app. For Android users (Samsung, Google Pixel, Motorola, LG, etc.), NFC is built-in and enabled by default on virtually all models from the last 8+ years.'
  },
  {
    question: 'Is my personal data safe? Will it be sold or published online?',
    answer: 'Your data is 100% private. Unlike competitor brands that force you to create a public cloud profile and often monetize your pet’s data, London Pet ID has no public online directory. Your chosen phone numbers and notes are stored strictly inside the physical tag microchip. We never sell, share, or track user data.'
  },
  {
    question: 'How does shipping and delivery work around London, Ontario?',
    answer: 'Every tag is custom-programmed right here in London, Ontario and dispatched within 24 to 48 business hours. We provide free local lettermail delivery across London, St. Thomas, Woodstock, Strathroy, and all of Middlesex County. Fast, local, and reliable.'
  },
  {
    question: 'Can cats and small dogs wear this tag without it being heavy?',
    answer: 'Absolutely! Our tags are engineered with lightweight, high-density polymer and sealed resin, weighing just 4.5 grams (lighter than a standard Canadian 2-dollar coin). It comes with an ultra-lightweight stainless steel split ring that clips securely to any feline or canine collar.'
  }
];

export const LOCAL_RESOURCES = [
  {
    title: 'City of London Animal Care & Licensing',
    desc: 'Official City of London pet licensing and regulations for dogs and cats.',
    contact: 'london.ca/living-london/pet-care-licensing',
    badge: 'Municipal'
  },
  {
    title: 'London & Middlesex Lost Pets',
    desc: 'Dedicated community lost and found network helping reunite local pets across Middlesex County.',
    contact: 'facebook.com/groups/LMLostPets',
    badge: 'Community Network'
  },
  {
    title: 'Humane Society London & Middlesex (HSLM)',
    desc: 'Local shelter and adoption agency supporting vulnerable companion animals.',
    contact: 'hslm.ca | (519) 451-0630',
    badge: 'Shelter'
  },
  {
    title: 'London Regional Veterinary Emergency and Referral Hospital',
    desc: '24/7 emergency veterinary triage and scanning services located at 41 Adelaide St S, London.',
    contact: 'londonveterinaryemergency.com | (519) 432-3300',
    badge: '24/7 Emergency'
  }
];
