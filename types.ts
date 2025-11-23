import React from 'react'; // Fix: Import React to resolve namespace error

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Provider {
  name: string;
  category: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface StoryStep {
  id: number;
  title: string;
  content: string[];
  highlight?: string;
  // Fix: Add 'wifi' to allowed icon types to resolve error in constants.tsx
  icon: 'start' | 'stop' | 'warn' | 'price' | 'heart' | 'wifi';
}

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light'
}