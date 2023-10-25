import { MRT_ColumnDef } from 'material-react-table'
import { Rule } from '../../types'
import ContentCopy from '@mui/icons-material/ContentCopy'
import Chip from '@mui/material/Chip'

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
    enableClickToCopy: true, // habilitar el boton de copiar
    muiTableBodyCellCopyButtonProps: {
      fullWidth: true,
      startIcon: <ContentCopy />,
      sx: { justifyContent: 'flex-start' },
    },
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
    filterSelectOptions: [
      'BUG',
      'VULNERABILITY',
      'CODE_SMELL',
      'SECURITY_HOTSPOT',
    ],
    enableColumnFilterModes: false,
  },
  {
    header: 'SEVERIDAD',
    accessorKey: 'severity',
    size: 10,
    filterVariant: 'select',
    filterSelectOptions: ['INFO', 'MINOR', 'MAJOR', 'CRITICAL', 'BLOCKER'],
    enableColumnFilterModes: false,
  },
  {
    id: 'col-state',
    header: 'ESTADO',
    accessorKey: 'state',
    size: 10,
    filterVariant: 'select',
    filterSelectOptions: [
      { text: 'ACTIVADO', value: 'ACTIVE' },
      { text: 'DESACTIVADO', value: 'DESACTIVE' },
    ],
    enableColumnFilterModes: false,
    // personalizar el renderizado de la celda
    Cell: ({ row }) => (
      <Chip
        variant='outlined'
        label={row.original.state === 'ACTIVE' ? 'Activado' : 'Desactivado'}
        color={row.original.state === 'ACTIVE' ? 'success' : 'error'}
        size='small'
      />
    ),
    // CENTRAR EL HEADER Y LAS CELDAS
    // muiTableBodyCellProps: {
    //   align: 'center',
    // },
  },
  {
    header: 'FECHA',
    accessorKey: 'date',
    size: 10,
    enableColumnFilterModes: false,
    sortingFn: 'datetime',
  },
]
