"use client";

import { useMemo } from 'react';
import { useCoins } from '@/hooks/useCoins';
import { CoinCard } from '@/components/CoinCard';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ErrorMessage } from '@/components/ErrorMessage';

export default function DashboardPage() {
  const { coins, isLoading, error } = useCoins();

  const randomCoins = useMemo(() => {
    if (!coins || !Array.isArray(coins)) return [];

    const shuffled = [...coins].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  }, [coins]);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-medium">Dashboard</h1>
      <p>
        Welcome to the admin area. This is where you can manage your application.
      </p>

      {isLoading && <LoadingSpinner />}

      {!isLoading && randomCoins.length > 0 && (
        <div>
          <h2 className="text-xl font-medium mb-2">10 Random Coins</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {randomCoins.map((coin) => (
              <CoinCard key={coin.id} coin={coin} />
            ))}
          </div>
        </div>
      )}

      {error && <ErrorMessage message={error.message} />}
    </div>
  );
}