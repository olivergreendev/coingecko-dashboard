import { Coin } from '@/types/coin';

interface CoinCardProps {
  coin: Coin;
}

export function CoinCard({ coin }: CoinCardProps) {
  return (
    <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <p className="font-medium text-lg">{coin.name}</p>
      <p className="text-sm text-gray-600">ID: {coin.id}</p>
      <p className="text-sm text-gray-600">Symbol: {coin.symbol.toUpperCase()}</p>
    </div>
  );
} 