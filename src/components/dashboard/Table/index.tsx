import { MaterialReactTable } from 'material-react-table'
import SelectTableOptions from './SelectTableOptions'
import { Rule } from '../../../types'
import { columns } from './columns'
import { memo } from 'react'
import { useQuery, UseQueryResult } from 'react-query'

const fetchData = async () => {
  const response = await fetch(
    'https://raw.githubusercontent.com/jaenfigueroa/cdn-example/main/new-rules-admin/rules.json',
  )
  const data = await response.json()
  return data.rules
}

const Table = memo(() => {
  const { data, error, isLoading }: UseQueryResult<Rule[]> = useQuery(
    'rules',
    fetchData,
  )

  return (
    <MaterialReactTable
      columns={columns}
      data={data || []}
      enableColumnFilterModes // habilitar opciones de filtrado
      enableRowActions // habilitar acciones para la fila
      positionActionsColumn='last' // posicionar la columna de acciones al final
      renderRowActions={() => {
        //VALOR ORIGINAL DE LA FILA --> console.log(cell.row.original
        return <SelectTableOptions />
      }}
      enableStickyHeader
      enableStickyFooter
      // muiTableContainerProps={{ sx: { minHeight: 'calc(100vh - 200px)' } }}
      initialState={{
        // numero de elementos por pagina y pagina por defecto
        pagination: { pageSize: 20, pageIndex: 0 },
        // buscador visible por defecto
        // showGlobalFilter: true,
        // densidad de filas por defecto
        density: 'comfortable',
        // columnas fijas por defecto - fijar la columna de acciones
        columnPinning: { right: ['mrt-row-actions'] },
        // filtros para columnas activo por defecto
        showColumnFilters: true,
      }}
      //BUSCADOR
      positionGlobalFilter='left'
      muiSearchTextFieldProps={{
        placeholder: `Buscar`,
        sx: { minWidth: '300px' },
        variant: 'outlined',
        size: 'small',
        style: { paddingTop: '5px', paddingLeft: '8px' },
      }}
      // desactivar el cambio de densidad de las filas
      enableDensityToggle={false}
      displayColumnDefOptions={{
        'mrt-row-actions': {
          header: '',
          size: 0,
          muiTableBodyCellProps: { sx: { padding: 0, paddingLeft: '5px' } }, //quitar el padding de la celda de acciones
        },
      }}
      // personalizar el buscador por columnas
      muiTableHeadCellFilterTextFieldProps={{
        sx: { m: '0.5rem 0' },
        variant: 'outlined',
        size: 'small',
        placeholder: 'Todos',
      }}
      /* ESTADO DE LA TABLA */
      state={{
        isLoading: isLoading, // mostrar animacion de cargando la tabla
        showAlertBanner: Boolean(error), // activar el banner superior para mostrar mensajes
      }}
      /* MENSAJE DE LA ALERTA*/
      muiToolbarAlertBannerProps={{
        color: 'error',
        children: 'Error al cargar los datos de la tabla',
      }}
    />
  )
})

export default Table
