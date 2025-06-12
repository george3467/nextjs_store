import './globals.css';
import SideNav from '@/app/ui/sidenav';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import SignoutButton from '@/app/ui/signoutButton';
import { Providers } from '@/app/providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>

          {/* Top blue banner */}
          <div className="w-full bg-blue-600 px-6 py-4">
            <div className="text-white flex items-center space-x-4">
              <div className="flex flex-row items-center leading-none text-white">
                <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
                <p className="ml-2 text-[36px] font-semibold">Online Store</p>
              </div>
              <SignoutButton />     {/* will only show if user is signed in */}
            </div>
          </div>

          {/* Main layout */}
          <div className="flex h-[calc(100vh-72px)] flex-col md:flex-row md:overflow-hidden pr-0 md:pr-12 lg:pr-20 xl:pr-32">
            <div className="w-full flex-none md:w-64">
              <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}