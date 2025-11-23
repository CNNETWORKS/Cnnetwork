import React from 'react';
import { Cloud, Share2, Shield, Server, Globe, Zap, Lock, AlertTriangle, Heart, Wifi } from 'lucide-react';
import { Provider, StoryStep } from './types';

export const PROVIDERS: Provider[] = [
  { name: 'Cloudflare', category: 'CDN / Security', description: 'Global edge network & DDoS protection.' },
  { name: 'CloudFront', category: 'AWS CDN', description: 'Fast, highly secure and programmable CDN.' },
  { name: 'BunnyCDN', category: 'CDN', description: 'Next-generation CDN with lightning performance.' },
  { name: 'Fastly', category: 'Edge Cloud', description: 'Programmable edge for modern applications.' },
  { name: 'Akamai', category: 'CDN Leader', description: 'The original and largest distributed platform.' },
  { name: 'Google Cloud', category: 'Cloud', description: 'High performance scalable infrastructure.' },
  { name: 'Alibaba Cloud', category: 'Cloud', description: 'Leading cloud provider in Asia & beyond.' },
  { name: 'AliyunOSS', category: 'Storage', description: 'Encrypted, secure object storage service.' },
  { name: 'Vercel', category: 'Frontend Cloud', description: 'Develop, preview, ship. Edge first.' },
  { name: 'Netlify', category: 'Platform', description: 'Fastest way to build modern web projects.' },
  { name: 'Varnish', category: 'Caching', description: 'High-performance HTTP accelerator.' },
  { name: 'Tengine', category: 'Web Server', description: 'Web server from Taobao, based on Nginx.' },
  { name: 'ESF', category: 'Google', description: 'Edge Serving Framework (Internal).' },
  { name: 'GHS', category: 'Google', description: 'Google Hosted Services.' },
  { name: 'SFFE', category: 'Google', description: 'Small File Front End.' },
  { name: 'gfrontend', category: 'Google', description: 'Google Frontend Infrastructure.' },
];

export const STORY_STEPS: StoryStep[] = [
  {
    id: 1,
    title: "How It Started",
    icon: 'start',
    content: [
      "In the early infrastructure years, CDNs and routing systems were evolving.",
      "Because of open ports, weak firewall rules, and misconfigured CDN edges, the world experienced accidental 'free net phases'.",
      "It wasn't a feature. It was a beautiful glitch in the matrix."
    ]
  },
  {
    id: 2,
    title: "It Was Never Official",
    icon: 'wifi',
    content: [
      "No telecom ever approved it.",
      "It happened because systems were not fully mature.",
      "The 'free net era' was a global phenomenon, driven by curiosity and exploration."
    ]
  },
  {
    id: 3,
    title: "Why It Ended: The Bad Actors",
    icon: 'warn',
    highlight: "The turning point.",
    content: [
      "The era didn't end naturally. It was ruined by abuse.",
      "People sold illegal 'tricks', fraud groups exploited weaknesses, and attackers hammered servers.",
      "This triggered alarms. Telecoms deployed massive upgrades: DPI (Deep Packet Inspection), strict SNI filtering, and TLS handshake verification.",
      "These upgrades shut down the accidental loopholes forever."
    ]
  },
  {
    id: 4,
    title: "The Price of Security",
    icon: 'price',
    content: [
      "As telecoms locked everything down, prices went up.",
      "Prepaid plans increased, unlimited packs vanished, and data rates soared.",
      "Nostalgia grew for the freedom and community of the early days."
    ]
  },
  {
    id: 5,
    title: "Why We Want It Back",
    icon: 'heart',
    content: [
      "We don't want illegal access.",
      "We want fairness, affordable browsing, and a return to community-based learning.",
      "CN Network preserves this feeling through knowledge, not misuse."
    ]
  }
];

export const GLOSSARY = [
  { term: 'CDN', def: 'Content Delivery Network. A group of servers distributed geographically to speed up delivery of web content.' },
  { term: 'SNI', def: 'Server Name Indication. An extension of the TLS protocol that indicates which hostname is being attempted at the start of the handshake.' },
  { term: 'Tunneling', def: 'A protocol that allows for the secure movement of data from one network to another.' },
  { term: 'Edge', def: 'The "edge" of the network, closest to the user, where processing and caching happen to reduce latency.' },
  { term: 'DPI', def: 'Deep Packet Inspection. A method of examining the data part (and possibly also the header) of a packet as it passes an inspection point.' },
  { term: 'SSH', def: 'Secure Shell. A cryptographic network protocol for operating network services securely over an unsecured network.' },
];