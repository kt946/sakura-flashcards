import lesson_0_data from './lessons/lesson-0/lesson-0-data';
import lesson_1_data from './lessons/lesson-1/lesson-1-data';
import lesson_2_data from './lessons/lesson-2/lesson-2-data';
import lesson_3_data from './lessons/lesson-3/lesson-3-data';
import lesson_4_data from './lessons/lesson-4/lesson-4-data';
import lesson_5_data from './lessons/lesson-5/lesson-5-data';
import lesson_6_data from './lessons/lesson-6/lesson-6-data';
import lesson_7_data from './lessons/lesson-7/lesson-7-data';
import lesson_8_data from './lessons/lesson-8/lesson-8-data';
import lesson_9_data from './lessons/lesson-9/lesson-9-data';
import lesson_10_data from './lessons/lesson-10/lesson-10-data';
import lesson_11_data from './lessons/lesson-11/lesson-11-data';
import lesson_12_data from './lessons/lesson-12/lesson-12-data';
import lesson_13_data from './lessons/lesson-13/lesson-13-data';

const genki_1_data = [
  lesson_0_data,
  lesson_1_data,
  lesson_2_data,
  lesson_3_data,
  lesson_4_data,
  lesson_5_data,
  lesson_6_data,
  lesson_7_data,
  lesson_8_data,
  lesson_9_data,
  lesson_10_data,
  lesson_11_data,
  lesson_12_data,
];

const genki_2_data = [lesson_13_data];

export const genkiData = [
  { name: 'Genki Vol. I', slug: 'genki-1', data: genki_1_data },
  { name: 'Genki Vol. II', slug: 'genki-2', data: genki_2_data },
];
