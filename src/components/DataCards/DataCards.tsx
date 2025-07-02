import { DataCard } from '@/components/DataCards/DataCard';

const MOCK_DATA = [
  {
    title: 'Bitcoin',
    value: '$105,816',
    valueChange: 0.2,
    icon: 'https://coin-images.coingecko.com/coins/images/1/small/bitcoin.png?1696501400'
  },
  {
    title: 'Ethereum',
    value: '$2,606.75',
    valueChange: 0.4,
    icon: 'https://coin-images.coingecko.com/coins/images/279/small/ethereum.png?1696501628'
  },
  {
    title: 'Tether',
    value: '$1.00',
    valueChange: 0,
    icon: 'https://coin-images.coingecko.com/coins/images/325/small/Tether.png?1696501661'
  },
  {
    title: 'XRP',
    value: '$2.26',
    valueChange: 0.5,
    icon: 'https://coin-images.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png?1696501442'
  },
];

export function DataCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      {MOCK_DATA.map(card => (
        <DataCard
          key={card.title}
          title={card.title}
          value={card.value}
          valueChange={card.valueChange}
          icon={card.icon}
        />
      ))}
    </div>
  )
}