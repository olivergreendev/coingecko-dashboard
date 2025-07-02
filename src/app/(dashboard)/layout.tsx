import { Sidebar, Header } from '@/components/layout'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 p-6 bg-gray-50 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
} 