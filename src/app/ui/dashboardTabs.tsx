'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// This component renders dashboard navigation tabs for switching between pages.
export default function DashboardTabs() {

  // Get the current pathname from the Next.js router
  const pathname = usePathname();

  // Define the available tabs with their labels and corresponding routes
  const tabs = [
    { label: 'Pending Orders', href: '/dashboard' },
    { label: 'Current Inventory', href: '/dashboard/inventory' },
  ];

  return (
    <div className="flex space-x-4 mb-6">

      {/* Loop through each tab and render a link */}
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;

        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`min-w-[140px] px-4 py-2 rounded-md font-medium transition-colors ${
              isActive
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}