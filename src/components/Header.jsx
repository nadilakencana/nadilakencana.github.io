import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'About',      id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects',   id: 'projects' },
  { label: 'Skills',     id: 'skills' },
  { label: 'Contact',    id: 'contact' },
];

const Header = ({ name }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observers = NAV_ITEMS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.25, rootMargin: '-64px 0px 0px 0px' }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-[#f4f4f400] backdrop-blur-lg border-blue-900/50">
        <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl font-bold text-white">{name}</span>

            {/* Desktop Navigation */}
            <div className="hidden space-x-8 md:flex">
              {NAV_ITEMS.map(({ label, id }) => {
                const isActive = activeSection === id;
                return (
                  <a
                    key={id}
                    href={`#${id}`}
                    className={`relative group py-1 transition-colors duration-200 ${
                      isActive ? 'text-blue-400' : 'text-slate-300 hover:text-blue-400'
                    }`}
                  >
                    {label}
                    {/* Bottom border — full width when active, slides in from left on hover */}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(o => !o)}
              className="p-2 rounded-md md:hidden text-slate-400 hover:text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closeMobileMenu} />

        <div
          className={`fixed top-0 right-0 w-64 h-full transition-transform duration-300 ease-in-out shadow-2xl border-l border-blue-900/50 text-slate-200 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            background: 'radial-gradient(circle at right top, rgb(12 55 163 / 40%), transparent 40%), radial-gradient(circle at left bottom, rgb(20 83 224 / 40%), transparent 50%), rgb(2, 6, 23)'
          }}
        >
          <div className="flex items-center justify-between p-4 border-b border-blue-900/50">
            <span className="text-xl font-bold text-white">Menu</span>
            <button onClick={closeMobileMenu} className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-blue-800">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="mt-8">
            <div className="px-2 space-y-1">
              {NAV_ITEMS.map(({ label, id }) => {
                const isActive = activeSection === id;
                return (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={closeMobileMenu}
                    className={`block px-3 py-2 text-base font-medium transition-colors rounded-md border-l-2 ${
                      isActive
                        ? 'text-white bg-blue-800/60 border-blue-400'
                        : 'text-slate-300 hover:text-white hover:bg-blue-800 border-transparent'
                    }`}
                  >
                    {label}
                  </a>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
