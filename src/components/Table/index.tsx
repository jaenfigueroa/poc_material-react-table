import { Suspense, lazy, memo } from 'react'
import Skeleton from '@mui/material/Skeleton'
import { MaterialReactTable } from 'material-react-table'
import { Rule } from '../../types'
import { columns } from './columns'
import { useQuery, UseQueryResult } from 'react-query'
//Import Material React Table Translations
import { MRT_Localization_ES } from 'material-react-table/locales/es'

const SelectTableOptions = lazy(() => import('./SelectTableOptions'))

const fetchData = async () => {
  const response = await fetch('/rules')
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
        return (
          <Suspense fallback={<Skeleton variant='text' />}>
            <SelectTableOptions />
          </Suspense>
        )
      }}
      enableStickyHeader
      enableStickyFooter
      muiTableContainerProps={{ sx: { minHeight: 'calc(100vh - 200px)' } }}
      initialState={{
        // numero de elementos por pagina y pagina por defecto
        pagination: { pageSize: 20, pageIndex: 0 },
        // buscador visible por defecto
        showGlobalFilter: true,
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
        style: {
          paddingTop: '5px',
          paddingLeft: '8px',
        },
      }}
      // personalizar el buscador global
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
      //memorizar las celdas de la tabla para mejorar el rendimiento, pero algunas funciones se rompen
      // estas funciones no son compatibles con el memorizado: density toggle, column resizing
      // memoMode='cells' // memoize table cells to improve render performance, but break some features
      // desactivar el cambio de densidad de las filas porque rompe la memorizacion de las celdas
      enableDensityToggle={false}
      // cambiar el idioma de la tabla a español
      localization={MRT_Localization_ES}
      //PERSONALIZAR MAS LA TABLA
      //footer de la tabla
      // muiBottomToolbarProps={{
      //   style: {
      //     background: '#121212',
      //   },
      // }}
      // //contenedor para copiar
      // muiTableBodyCellCopyButtonProps={{
      //   style: {
      //     paddingLeft: '20px',
      //   },
      // }}
      // todas las celdas de la tabla
      // muiTableBodyCellProps={{
      //   style: {
      //     // padding: '0 30px',
      //     // background: '#181818',
      //   },
      // }}
      // //header de la tabla
      // muiTableHeadCellProps={{
      //   style: {
      //     background: '#121212',
      //   },
      // }}
      // muiTopToolbarProps={{
      //   style: {
      //     background: '#121212',
      //   },
      // }}
      // muiTableBodyCellSkeletonProps={{
      //   animation: 'wave',
      //   variant: 'text',
      //   style: {
      //     margin: '20px 0',
      //   },
      // }}
    />
  )
})

export default Table
