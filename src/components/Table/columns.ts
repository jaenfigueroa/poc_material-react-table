import { MRT_ColumnDef } from 'material-react-table'
import { Rule } from '../../types'

export const columns: MRT_ColumnDef<Rule>[] = [
  {
    header: 'CÓDIGO',
    accessorKey: 'code',
    size: 10,
    filterVariant: 'select', // indicar el tipo de selector de los filtros
    filterSelectOptions: [
      { text: 'HTML', value: 'html' },
      { text: 'CSS', value: 'css' },
      { text: 'Javascript', value: 'javascript' },
      { text: 'PHP', value: 'php' },
    ],
    enableColumnFilterModes: false, // desactivar el selector de tipos de coindcidencias del buscador
  },
  {
    header: 'REGLA',
    accessorKey: 'description',
    size: 500,
    enableColumnFilterModes: false,
  },
  {
    header: 'TIPO',
    accessorKey: 'type',
    size: 10,
    filterVariant: 'select',
    filterSelectOptions: ['SECURITY_HOSTPOT', 'CODE_SMEEL'],
    enableColumnFilterModes: false,
  },
  {
    header: 'SEVERIDAD',
    accessorKey: 'severity',
    size: 10,
    filterVariant: 'select',
    filterSelectOptions: ['MINOR', 'MAYOR'],
    enableColumnFilterModes: false,
  },
  {
    header: 'ESTADO',
    accessorKey: 'state',
    size: 10,
    filterVariant: 'select',
    filterSelectOptions: ['ACTIVE', 'DESACTIVE'],
    enableColumnFilterModes: false,
  },
  {
    header: 'FECHA',
    accessorKey: 'date',
    size: 10,
    enableColumnFilterModes: false,
  },
]
