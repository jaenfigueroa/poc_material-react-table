import { useMemo } from 'react';
import { MRT_ColumnDef} from 'material-react-table';
import { Rule } from './IRule'; 

export  const columns = useMemo<MRT_ColumnDef<Rule>[]>(
    () => [
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
    ],
    [],
);