import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className={`fixed top-6 left-1/2 z-50 transition-all duration-300 w-[90%] max-w-fit border-2 border-black bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)] ${isOpen ? 'rounded-none' : 'rounded-none'} ${scrolled ? 'py-2 px-4' : 'py-3 px-6'}`}
    >
      <div className="flex items-center justify-between gap-6 md:gap-10">
        {/* Logo */}
        <a href="#home" className="font-mono font-black text-2xl text-black whitespace-nowrap pl-2 flex hover:translate-x-[2px] transition-transform">
          ZN<span className="text-[#ffff00] drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-1.5 text-sm font-bold font-mono uppercase tracking-widest transition-all duration-300 border-2 ${activeSection === link.href.slice(1)
                  ? 'bg-[#ffff00] border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] text-black'
                  : 'bg-transparent border-transparent text-black hover:border-black hover:bg-[#f0f0f0]'
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-black border-2 border-transparent hover:border-black hover:bg-[#ffff00] transition-colors shadow-none hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]">
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
            className="md:hidden overflow-hidden bg-white"
          >
            <div className="py-4 mt-2 border-t-2 border-black flex flex-col gap-2 px-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-sm font-bold font-mono uppercase tracking-widest border-2 transition-all ${activeSection === link.href.slice(1)
                      ? 'bg-[#ffff00] border-black text-black shadow-[2px_2px_0px_rgba(0,0,0,1)]'
                      : 'bg-transparent border-transparent text-black hover:border-black hover:bg-[#f0f0f0]'
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
