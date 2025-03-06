"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  // Navigation links
  const links = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'Work' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' }
  ];

  return (
    <nav className="w-full py-6 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Logo/Name */}
        <Link href="/" className="text-xl font-bold mb-4 sm:mb-0">
          <span className="gradient-text">Chris Fiorino</span>
        </Link>
        
        {/* Navigation Links */}
        <ul className="flex space-x-6 items-center">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link 
                href={href}
                className={`text-sm font-medium hover:opacity-70 transition-all ${
                  pathname === href ? 'opacity-100' : 'opacity-80'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          
          {/* CTA Button */}
          <li>
            <Link 
              href="/contact" 
              className="ml-2 px-4 py-2 rounded-lg gradient-bg text-white font-medium hover:opacity-90 transition-all text-sm"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
} 