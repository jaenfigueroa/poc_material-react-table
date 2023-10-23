import { useState, useEffect } from 'react'
import { MaterialReactTable } from 'material-react-table'
import { MRT_ColumnDef } from 'material-react-table'
import { User } from './types'
import SelectTableOptions from './SelectTableOptions'

// Definir las columnas
const columns: MRT_ColumnDef<User>[] = [
  {
    header: 'Nombre y Apellido',
    accessorKey: 'name',
  },
  {
    header: 'Usuario',
    accessorKey: 'username',
  },
  {
    header: 'Correo',
    accessorKey: 'email',
  },
  {
    header: 'Telefono',
    accessorKey: 'phone',
  },
]

const Table = () => {
  const [data, setData] = useState<User[]>([])

  // Traer el array de usuarios desde la API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then((response) => response.json())
      .then((data) => {
        // Asumiendo que los datos tienen una estructura similar a la interfaz User
        setData(data as User[])
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
