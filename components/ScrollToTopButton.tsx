'use client';

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

import { Button } from '@/components/ui/button';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className={`${
        !isVisible ? 'hidden' : 'sm:hidden'
      } fixed z-[45] size-10 rounded-full bottom-2 right-2 border-2 border-violet-900 bg-zinc-900/60 backdrop-blur hover:bg-zinc-800 custom-transition`}
      onClick={scrollToTop}
    >
      <FaArrowUp className="size-5 text-violet-400" />
    </Button>
  );
};

export default ScrollToTopButton;
