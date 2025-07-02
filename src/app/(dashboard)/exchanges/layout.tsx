import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Exchanges | BlockStream',
};

export default function ExchangesPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 