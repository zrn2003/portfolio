import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#publications', label: 'Publications' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    navLinks.forEach((link) => {
      const sectionId = link.href.slice(1);
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.nav
      initial={{ y: -100, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className={`fixed top-4 left-1/2 z-50 transition-all duration-300 w-[92%] max-w-fit border-2 border-black dark:border-zinc-700 bg-white dark:bg-[#16171b] shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_rgba(0,0,0,0.8)] ${isOpen ? 'rounded-none' : 'rounded-none'} ${scrolled ? 'py-2 px-3 sm:px-4' : 'py-2.5 px-4 sm:px-6'}`}
    >
      <div className="flex items-center justify-between gap-4 sm:gap-6">
        {/* Logo */}
        <a href="#home" className="font-mono font-black text-xl sm:text-2xl text-black dark:text-white whitespace-nowrap flex items-center hover:translate-x-[2px] transition-transform">
          ZN<span className="text-[#ffff00] drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 text-xs font-bold font-mono uppercase tracking-wider transition-all duration-300 border-2 ${activeSection === link.href.slice(1)
                  ? 'bg-[#ffff00] border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] text-black'
                  : 'bg-transparent border-transparent text-black dark:text-zinc-200 hover:border-black dark:hover:border-zinc-700 hover:bg-[#f0f0f0] dark:hover:bg-zinc-800'
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Theme Toggle Button */}
        {mounted && (
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-1.5 sm:p-2 border-2 border-black dark:border-zinc-700 bg-[#f0f0f0] dark:bg-zinc-800 text-black dark:text-[#ffff00] shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_rgba(0,0,0,0.8)] hover:bg-[#ffff00] hover:text-black dark:hover:bg-[#ffff00] dark:hover:text-black transition-colors"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 font-bold" /> : <Moon className="w-4 h-4 font-bold" />}
          </button>
        )}

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="p-2 text-black dark:text-white border-2 border-transparent hover:border-black dark:hover:border-zinc-700 hover:bg-[#ffff00] hover:text-black transition-colors">
            {isOpen ? <X className="w-5 h-5 font-bold" /> : <Menu className="w-5 h-5 font-bold" />}
          </button>
        </div>
      </div>

      {/* Mobile nav expanding Island */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white dark:bg-[#16171b]"
          >
            <div className="py-4 mt-2 border-t-2 border-black dark:border-zinc-700 flex flex-col gap-2 px-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2.5 text-xs font-bold font-mono uppercase tracking-widest border-2 transition-all ${activeSection === link.href.slice(1)
                      ? 'bg-[#ffff00] border-black text-black shadow-[2px_2px_0px_rgba(0,0,0,1)]'
                      : 'bg-transparent border-transparent text-black dark:text-zinc-200 hover:border-black dark:hover:border-zinc-700 hover:bg-[#f0f0f0] dark:hover:bg-zinc-800'
                    }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
