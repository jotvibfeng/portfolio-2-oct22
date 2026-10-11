import {
  Briefcase,
  FileText,
  Globe,
  Home,
  Layers,
  Mail,
  MessageCircle,
  Palette,
  Rocket,
  Settings,
  Smartphone,
  User,
  type LucideIcon,
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import type { IconType } from 'react-icons';

type LinksType = {
  label: string;
  link: string;
  icon: LucideIcon;
};

type SocialLinksType = Omit<LinksType, 'icon'> & {
  icon: IconType;
};

export const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  {
    label: 'Projects',
    link: '#projects',
    icon: Briefcase,
  },
  { label: 'About', link: '#about', icon: User },
  {
    label: 'Services',
    link: '#services',
    icon: Settings,
  },
  { label: 'Resume', link: '#resume', icon: FileText },
  {
    label: 'Reviews',
    link: '#testimonials',
    icon: MessageCircle,
  },
  { label: 'Contact', link: '#contact', icon: Mail },
];

const socialLinks: SocialLinksType[] = [
  {
    icon: FaFacebookF,
    label: 'Facebook',
    link: '/#',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    link: '/#',
  },
  {
    icon: FaXTwitter,
    label: 'Twitter',
    link: '/#',
  },
  {
    icon: FaYoutube,
    label: 'Youtube',
    link: '/#',
  },
];
