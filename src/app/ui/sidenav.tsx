'use client';

import Link from 'next/link';
import { UserGroupIcon, HomeIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';							// Hook to get current path
import clsx from 'clsx';


// Define sidebar navigation links with labels, paths, and icons
const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Admin Dashboard', href: '/dashboard', icon: UserGroupIcon },
];

export default function SideNav() {

	// Get current route for active link highlighting
  const pathname = usePathname();

	return (

		<div className="flex h-full flex-col px-3 py-4 md:px-2 bg-gray-100 border-r border-gray-300">
			<div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">

				{/* Loop through the links */}
				{links.map((link) => {
					const LinkIcon = link.icon;
					const isActive = pathname === link.href;

					return (
						<Link
							key={link.name}
							href={link.href}
							className={clsx(
								'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium transition-colors duration-200 md:flex-none md:justify-start md:p-2 md:px-3',
								{
									'bg-blue-600 text-white hover:bg-blue-600': isActive,
									'bg-gray-200 text-gray-800 hover:bg-blue-600 hover:text-white': !isActive,
								}
							)}
						>
							<LinkIcon className="w-6" />
							<p className="hidden md:block">{link.name}</p>
						</Link>
					);
				})}

				{/* Spacer */}
				<div className="hidden h-auto w-full grow rounded-md bg-gray-200 md:block"></div>
			</div>
		</div>
	);
}