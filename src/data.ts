import { France, Germany, Iceland, Norway, USA } from 'assets';

import { TData } from 'types';

export const data: TData[] = [
  {
    id: crypto.randomUUID(),
    title: 'France',
    url: France,
  },
  {
    id: crypto.randomUUID(),
    title: 'Germany',
    url: Germany,
  },
  {
    id: crypto.randomUUID(),
    title: 'Iceland',
    url: Iceland,
  },
  {
    id: crypto.randomUUID(),
    title: 'Norway',
    url: Norway,
  },
  {
    id: crypto.randomUUID(),
    title: 'USA',
    url: USA,
  },
];
