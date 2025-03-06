"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if we're on mobile when component mounts and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);
  
  // Navigation links
  const links = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'Work' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact Me', isButton: true }
  ];

  return (
    <nav className="w-full py-6 px-4 md:px-8 relative">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        {/* Logo/Name */}
        <Link href="/" className="text-xl font-bold z-20">
          <span className="gradient-text">Chris Fiorino</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => 
            link.isButton ? (
              <Link 
                key={link.href}
                href={link.href} 
                className="px-4 py-2 rounded-lg gradient-bg text-white font-medium hover:opacity-90 transition-all text-sm whitespace-nowrap"
              >
                {link.label}
              </Link>
            ) : (
              <Link 
                key={link.href}
                href={link.href}
                className={`text-sm font-medium hover:opacity-70 transition-all ${
                  pathname === link.href ? 'opacity-100' : 'opacity-80'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
        
        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden z-20 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            // X icon when menu is open
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon when menu is closed
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        
        {/* Mobile Menu Overlay - Drop down from top */}
        {isMobile && (
          <div 
            className={`fixed inset-0 bg-black bg-opacity-95 z-10 transition-all duration-300 ease-in-out ${
              isMenuOpen 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-full pointer-events-none'
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full">
              {links.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className={`text-xl py-4 ${
                    link.isButton 
                      ? 'px-6 my-2 rounded-lg gradient-bg text-white font-medium' 
                      : pathname === link.href ? 'text-[#ff5a36]' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 