import { Rule } from './IRule';

export const data: Rule[] = [
    {
        codigo: 'R01',
        regla: 'Regla 1',
        tipo: 'Bug',
        severidad: 'Major',
        e_actual: 'activado',
        fecha: '20-10-2023',
    },
    {
        codigo: 'R02',
        regla: 'Regla 2',
        tipo: 'Vulnerability',
        severidad: 'Critical',
        e_actual: 'desactivado',
        fecha: '08-05-2023',
    },
];