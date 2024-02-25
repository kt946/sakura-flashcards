export const navLinks = [
  { href: '/', key: 'Home', text: 'Home' },
  { href: '/studysets', studySetId: 'genki-1', key: 'genki-1', text: 'Genki Vol. 1' },
  { href: '/studysets', studySetId: 'genki-2', key: 'genki-2', text: 'Genki Vol. 2' },
];

type Item = {
  name: string;
  slug: string;
  description?: string;
  color?: string;
};

export const StudySets: { name: string; items: Item[] }[] = [
  {
    name: 'Study Sets',
    items: [
      {
        name: 'Genki Volume I (Third Edition)',
        slug: 'studysets/genki-1',
        description: 'A beginner course in elementary Japanese (Lessons 1-12)',
      },
      {
        name: 'Genki Volume II (Third Edition)',
        slug: 'studysets/genki-2',
        description: 'An intermediate course in elementary Japanese (Lessons 13-23)',
      },
    ],
  },
];
