'use client';

import React, { useEffect, useState } from 'react';

export default function Nav() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 100) {
        setShow(false); // Scrolling down
      } else {
        setShow(true); // Scrolling up
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-[0] p-4 left-1/2 -translate-x-1/2 z-[100] transition-transform duration-300 ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <ul className="text-[var(--dmode-text)] rounded-4xl bg-[var(--nav-bg)] flex justify-center items-center md:gap-6 gap-3 md:px-6 px-4 py-2 border border-[#ffffff79]">
      <li>
          <a href="#about" className="hover:text-blue-400">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-400">
            Projects
          </a>
        </li>
        <li>
          <a href="#experience" className="hover:text-blue-400">
            Experience
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
        </li>
        
      </ul>
    </nav>
  );
}
