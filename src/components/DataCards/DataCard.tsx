import { Card } from '@/components/common/Card'

interface DataCardProp {
  title: string,
  value: string,
  valueChange: number,
  icon: string
}

export function DataCard({ title, value, valueChange, icon }: DataCardProp) {
  return (
    <Card>
      <img src={icon} width={32} height={32} />
      <div className="mt-6 flex items-end justify-between">
        <dl>
          <dt className="mb-1.5 text-2xl font-bold text-dark dark:text-white">{value}</dt>
          <dd className="text-sm font-medium text-gray-400">{title}</dd>
        </dl>
        <dl className={`text-sm font-medium ${valueChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          <dt className="flex items-center gap-1.5">
            {valueChange.toFixed(2)}%
            {valueChange >= 0 ? (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
                <path d="M4.357 2.393L.91 5.745 0 4.861 5 0l5 4.861-.909.884-3.448-3.353V10H4.357V2.393z" />
              </svg>
            ) : (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
                <path d="M4.357 7.607L.91 4.255 0 5.139 5 10l5-4.861-.909-.884-3.448 3.353V0H4.357v7.607z" />
              </svg>
            )}
          </dt>
        </dl>
      </div>
    </Card>
  )
}