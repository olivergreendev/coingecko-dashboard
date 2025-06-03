interface DataCardProp {
  title: string,
  value: string,
  valueChange: string
}

export function DataCard({ title, value, valueChange }: DataCardProp) {
  return (
    <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark border">
      <svg width="58" height="58" viewBox="0 0 58 58" fill="none">
        <circle cx="29" cy="29" r="29" fill="#3FD97F" />
        <path d="M26.562 29a2.437 2.437 0 114.875 0 2.437 2.437 0 01-4.875 0z" fill="#fff" />
        <path fillRule="evenodd" clipRule="evenodd" d="M18.166 29c0 1.776.46 2.374 1.382 3.57 1.838 2.389 4.922 5.097 9.452 5.097s7.614-2.708 9.452-5.096c.92-1.197 1.381-1.795 1.381-3.57 0-1.777-.46-2.375-1.381-3.571-1.838-2.389-4.922-5.096-9.452-5.096s-7.614 2.707-9.452 5.096c-.921 1.196-1.381 1.794-1.381 3.57zM29 24.938a4.063 4.063 0 100 8.125 4.063 4.063 0 000-8.125z" fill="#fff" />
      </svg>
      <div className="mt-6 flex items-end justify-between">
        <dl>
          <dt className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">{value}</dt>
          <dd className="text-sm font-medium text-dark-6">{title}</dd>
        </dl>
        <dl className="text-sm font-medium text-green">
          <dt className="flex items-center gap-1.5">
            {valueChange}
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
              <path d="M4.357 2.393L.91 5.745 0 4.861 5 0l5 4.861-.909.884-3.448-3.353V10H4.357V2.393z" />
            </svg>
          </dt>
        </dl>
      </div>
    </div>
  )
}