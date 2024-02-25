import lesson_0_data from './lessons/lesson-0/lesson-0-data';
import lesson_1_data from './lessons/lesson-1/lesson-1-data';
import lesson_2_data from './lessons/lesson-2/lesson-2-data';
import lesson_3_data from './lessons/lesson-3/lesson-3-data';
import lesson_4_data from './lessons/lesson-4/lesson-4-data';

const genki_1_data = [lesson_0_data, lesson_1_data, lesson_2_data, lesson_3_data, lesson_4_data];

const genki_2_data = [lesson_0_data];

export const genkiData = [
  { name: 'Genki Vol. I', slug: 'genki-1', data: genki_1_data },
  { name: 'Genki Vol. II', slug: 'genki-2', data: genki_2_data },
];
