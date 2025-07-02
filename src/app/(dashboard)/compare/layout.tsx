import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compare | BlockStream',
};

export default function CryptocurrenciesPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}