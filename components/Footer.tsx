import Link from 'next/link';
import { FaHeart, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="z-40 py-4 flex justify-center items-center border-t border-gray-300/20 bg-zinc-900">
      <div className="container max-md:px-4 flex max-sm:flex-col-reverse justify-between items-center gap-4">
        <p className="flex items-center text-neutral-400 text-sm">
          Made with <FaHeart className="mx-1" /> from
          <Link
            href="https://github.com/kt946"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 hover:underline hover:text-neutral-100"
          >
            Kyle.
          </Link>
        </p>
        <Link
          href="https://github.com/kt946/sakura-flashcards"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-60 custom-transition"
        >
          <FaGithub className="size-7" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
