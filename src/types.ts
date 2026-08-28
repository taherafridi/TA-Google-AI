export interface TagColor {
  id: string;
  name: string;
  hex: string;
  accentHex: string;
  textColor: string;
  description: string;
}

export interface OrderData {
  tagColor: string;
  quantity: number;
  petName: string;
  petSpecies: 'dog' | 'cat' | 'other';
  ownerName: string;
  primaryPhone: string;
  secondaryContact: string;
  careNotes: string;
  shippingName: string;
  shippingEmail: string;
  shippingAddress: string;
  shippingCity: string;
  shippingPostal: string;
  newsletterOptIn: boolean;
  agreedToTerms: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export type ModalType = 'simulator' | 'privacy' | 'terms' | 'refund' | 'resources' | 'contact' | null;
