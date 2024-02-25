import Link from 'next/link';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

import { navLinks } from '@/constants';

type MobileSidebarProps = {
  toggleSidebar: () => void;
};

const framerSidebarPanel = {
  initial: { x: '100%' },
  animate: { x: 0 },
  exit: { x: '100%' },
  transition: { type: 'tween', duration: 0.3 },
};

const framerSidebarBackground = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.3 },
};

const MobileSidebar = ({ toggleSidebar }: MobileSidebarProps) => {
  return (
    <>
      {/* Backdrop Blur */}
      <motion.div
        onClick={toggleSidebar}
        {...framerSidebarBackground}
        className="fixed bottom-0 left-0 right-0 top-0 z-50 bg-[rgba(0,0,0,0.1)] backdrop-blur-sm"
      />

      {/* Sidebar Menu */}
      <motion.div
        {...framerSidebarPanel}
        className="fixed top-0 bottom-0 right-0 z-[60] w-full h-screen max-w-sm bg-zinc-900 border-l-2 border-violet-900"
      >
        <div className="relative h-full flex flex-col p-4 max-sm:py-2 z-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Menu</h2>
            <button
              type="button"
              onClick={toggleSidebar}
              className="p-2 hover:opacity-60 transition duration-300 ease-in-out"
            >
              <X className="size-7" />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.studySetId ? `${link.href}/${link.studySetId}` : link.href}
                className="py-2 px-3 rounded-lg border border-zinc-700 hover:bg-zinc-700 transition duration-300 ease-in-out"
                onClick={toggleSidebar}
              >
                <span className="relative">{link.text}</span>
              </Link>
            ))}
          </div>
        </div>
        {/* Background Pattern */}
        <div className="fixed inset-0 w-full h-full z-0 bg-diamond-pattern bg-center" />
      </motion.div>
    </>
  );
};

export default MobileSidebar;
