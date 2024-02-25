'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

import MobileSidebar from '@/components/MobileSidebar';
import { navLinks } from '@/constants';

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => setOpen((prev) => !prev);

  return (
    <>
      <header className="sticky top-0 p-4 max-sm:py-2 z-40 bg-zinc-900/60 backdrop-blur border-b border-gray-300/20">
        <nav className="md:container flex max-md:justify-between items-center gap-12">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-60 transition duration-300 ease-in-out"
          >
            <Image
              src="/assets/images/sakura-flashcards-logo.svg"
              alt="Personal logo"
              width={40}
              height={40}
            />
            <Image
              src="/assets/images/sakura-flashcards-text-logo.png"
              alt="Personal logo"
              height={28}
              width={130}
            />
          </Link>
          <ul className="hidden md:flex justify-between items-center space-x-8 uppercase font-bold text-sm tracking-[2px]">
            {navLinks.map((link) => (
              <li
                key={link.key}
                className="hover:opacity-60 transition duration-300 ease-in-out"
              >
                <Link
                  href={link.studySetId ? `${link.href}/${link.studySetId}` : link.href}
                  className="p-2"
                >
                  <span className="relative">{link.text}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-2 text-xl">
            <button
              type="button"
              onClick={toggleSidebar}
              className="md:hidden p-2 hover:opacity-60 transition duration-300 ease-in-out"
              aria-label="toggle sidebar"
            >
              <Menu className="size-7" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence
        mode="wait"
        initial={false}
      >
        {open && <MobileSidebar toggleSidebar={toggleSidebar} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
