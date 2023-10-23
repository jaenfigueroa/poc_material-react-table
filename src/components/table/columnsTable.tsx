import { useMemo } from 'react';
import { MRT_ColumnDef } from 'material-react-table';
import { Rule } from './IRule';

const generateColumns = (): MRT_ColumnDef<Rule>[] => {
    return [
        {
            accessorKey: 'codigo',
            header: 'Codigo',
        },
        {
            accessorKey: 'regla',
            header: 'Regla',
        },
        {
            accessorKey: 'tipo',
            header: 'Tipo',
        },
        {
            accessorKey: 'severidad',
            header: 'Severidad',
        },
        {
            accessorKey: 'e_actual',
            header: 'E.Actual',
        },
        {
            accessorKey: 'fecha',
            header: 'Fecha',
        },
    ];
};

export const columns = useMemo(() => generateColumns(), []);