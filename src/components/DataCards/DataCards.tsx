import { DataCard } from '@/components/DataCards/DataCard';

const MOCK_DATA = [
  {
    title: 'Total Views',
    value: '3.5K',
    valueChange: '0.43%'
  },
  {
    title: 'Total Profit',
    value: '$4.2K',
    valueChange: '4.35%'
  },
  {
    title: 'Total Products',
    value: '3.5K',
    valueChange: '2.59%'
  },
  {
    title: 'Total Users',
    value: '3.5K',
    valueChange: '-0.95%'
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
        />
      ))}
    </div>
  )
}