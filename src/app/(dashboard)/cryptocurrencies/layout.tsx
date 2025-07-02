import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cryptocurrencies | BlockStream',
};

export default function CryptocurrenciesPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 