import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tapaswini Pradhan | Frontend Engineer',
  description:
    'Frontend Engineer with 6.5 years of overall IT experience and 4+ years specializing in React.js, Angular, Next.js and TypeScript.',
  openGraph: {
    title: 'Tapaswini Pradhan | Frontend Engineer',
    description:
      'Frontend Engineer with 6.5 years of overall IT experience and 4+ years specializing in React.js, Angular, Next.js and TypeScript.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
