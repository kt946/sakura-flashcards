import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

import Flashcard from '@/components/Flashcard';
import { genkiData } from '@/data';

interface FlashcardPageProps {
  params: {
    studySetId: string;
    lessonId: string;
    flashcardId: string;
  };
}

export default function FlashcardPage({ params }: FlashcardPageProps) {
  const { studySetId, lessonId, flashcardId } = params;
  const studySet = genkiData.filter((set) => set.slug === studySetId)[0];
  const lesson = studySet.data.filter((lesson) => lesson.slug === lessonId)[0];
  const unit = lesson.units.filter((unit) => unit.slug === flashcardId)[0];

  return (
    <div className="w-full rounded-lg bg-black border border-violet-900 p-4 lg:p-6">
      <div className="mb-12 space-y-5">
        <div className="space-y-1.5">
          {/* Back link */}
          <Link
            href={`/studysets/${studySetId}`}
            className="flex items-center gap-2 text-lg font-semibold text-violet-400 hover:text-violet-300 custom-transition"
          >
            <FaArrowLeft /> Back
          </Link>
          <h1 className="text-2xl sm:text-4xl font-bold">{unit.title}</h1>
          <p className="text-neutral-400 font-semibold">
            Lesson {lesson.lessonNumber}: {lesson.lessonTitle} ({lesson.lessonPages})
          </p>
        </div>

        {/* Flashcard Component */}
        <Flashcard cardData={unit.items} />
      </div>

      <section className="space-y-5">
        <h2 className="text-xl font-bold">Terms in this set ({unit.items.length})</h2>
        <ul className="space-y-2">
          {unit.items.map((item, i) => (
            <li
              key={`${unit.slug}-${i}`}
              className="grid sm:grid-cols-2 items-center gap-4 rounded-lg bg-zinc-900 p-4 lg:p-6"
            >
              <div className="text-2xl">{item.frontSide}</div>
              <div className="text-lg">{item.backSide}</div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
