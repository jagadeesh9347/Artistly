"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Artists", href: "/artists" },
  { name: "Onboard", href: "/onboard" },
  { name: "Dashboard", href: "/dashboard" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-sm px-6 py-4 sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">🎭 Artistly</h1>
        <nav className="flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "text-gray-600 hover:text-blue-700 font-medium transition",
                pathname === item.href && "text-blue-600 font-semibold underline"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
