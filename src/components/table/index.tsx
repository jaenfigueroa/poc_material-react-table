import { MaterialReactTable } from 'material-react-table'
import { data } from './dataRule';
import { columns } from './columnsTable'

export default function Table() {

    return (
        <MaterialReactTable
            columns={columns}
            data={data}
            enableRowSelection
            enableColumnOrdering
            enableGlobalFilter
        />
    );
}
