import France from './assets/images/France.jpeg';
import Germany from './assets/images/Germany.jpg';
import Iceland from './assets/images/Iceland.jpg';
import Norway from './assets/images/Norway.jpg';
import USA from './assets/images/usa.jpg'
import { DataType } from './models/Data';

export const data: DataType[] = [
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
]