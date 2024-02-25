import Link from 'next/link';
import { StudySets } from '@/constants';

export default function Home() {
  return (
    <div className="container max-md:px-4 flex flex-col justify-between items-center">
      <div className="relative overflow-hidden w-full rounded-lg bg-black border border-violet-900 p-4 lg:p-6">
        <div className="relative z-10 space-y-10">
          <div>
            <h1 className="text-4xl font-bold">Sakura Flashcards</h1>
            <p className="mt-3 md:text-lg">
              Welcome to Sakura Flashcards, your ultimate study companion for mastering Japanese! Designed to align
              seamlessly with the{' '}
              <span>
                <Link
                  href="https://genki3.japantimes.co.jp/en/"
                  className="text-violet-400 hover:text-violet-300 hover:underline"
                >
                  Genki: An Integrated Course in Elementary Japanese (Third Edition)
                </Link>
              </span>{' '}
              textbooks, our exercises are tailored to reinforce your understanding and retention of each lesson's
              material. Simply navigate to any lesson and select the exercise you'd like to
              tackle. Dive in, challenge yourself, and watch your Japanese skills soar! Happy
              studying!
            </p>
          </div>

          {StudySets.map((section) => (
            <section
              key={section.name}
              className="space-y-5"
            >
              <h2 className="font-semibold uppercase tracking-wider text-neutral-400">{section.name}</h2>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {section.items.map((item) => (
                  <Link
                    href={`/${item.slug}`}
                    key={item.name}
                    className="block space-y-1.5 rounded-lg bg-zinc-900 px-5 py-3 hover:bg-zinc-800 custom-transition"
                  >
                    <h3 className="text-lg sm:text-xl font-bold">{item.name}</h3>

                    {item.description && (
                      <p className="line-clamp-3 text-neutral-400 font-semibold">{item.description}</p>
                    )}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
