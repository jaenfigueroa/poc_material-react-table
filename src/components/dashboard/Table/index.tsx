import { useState, useEffect } from 'react'
import { MaterialReactTable } from 'material-react-table'
import { MRT_ColumnDef } from 'material-react-table'
import { Rule } from './types'
import SelectTableOptions from './SelectTableOptions'

// Definir las columnas
const columns: MRT_ColumnDef<Rule>[] = [
  {
    header: 'Codigo',
    accessorKey: 'code',
    size: 50,
  },
  {
    header: 'Regla',
    accessorKey: 'description',
    size: 400,
  },
  {
    header: 'Tipo',
    accessorKey: 'type',
    size: 50,
  },
  {
    header: 'Severidad',
    accessorKey: 'severity',
    size: 50,
  },
  {
    header: 'Est. Actual',
    accessorKey: 'state',
    size: 50,
  },
  {
    header: 'Fecha',
    accessorKey: 'date',
    size: 50,
  },
]

const Table = () => {
  const [data, setData] = useState<Rule[]>([])

  // traer el array de reglas desde la API
  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        // Asumiendo que los datos tienen una estructura similar a la interfaz Rule
        setData(data.rules as Rule[])
        console.log(data.rules)
      })
      .catch((error) => {
        console.error('Error al obtener los datos', error)
      })
  }, [])

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableColumnFilterModes // habilitar opciones de filtrado
      enableRowActions // habilitar acciones para la fila
      positionActionsColumn='first' // posicionar la columna de acciones al principio
      renderRowActions={() => <SelectTableOptions />}
    />
  )
}

export default Table
