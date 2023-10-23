import { useState, useEffect } from 'react'
import { MaterialReactTable } from 'material-react-table'
import { MRT_ColumnDef } from 'material-react-table'
import { User } from './types'
import DrawerMain from '../../drawer'

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
  {
    header: 'Ciudad', // Texto del header de la columna
    accessorKey: 'address.city', // Key del objeto que se quiere mostrar
  },
  {
    header: 'Calle',
    accessorKey: 'address.street',
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
      // enableRowSelection // activar selección de filas, con los checkboxs de la izquierda
      // enableColumnOrdering // activar cambiar de posición las columnas al arrastrar y soltar
      enableRowActions // habilitar acciones para la fila
      enableClickToCopy // habilitar copiar al hacer click
      positionActionsColumn='last' // posicionar la columna de acciones al principio
      enableColumnFilterModes // habilitar opciones de filtrado
      renderRowActions={() => <DrawerMain />}
    />
  )
}

export default Table
