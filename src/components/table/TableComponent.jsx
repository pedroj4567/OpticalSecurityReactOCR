// TableComponent.js
import React, { useMemo } from 'react';
import { FaEdit, FaPlusCircle, FaTrashAlt } from 'react-icons/fa';
import { useTable, useGlobalFilter, usePagination } from 'react-table';
import SpinnerDark from '../Spinner/SpinnerDark';

const TableComponent = ({ data, columns, totalPages, next, before, actionEdit, deleteAction, createAction, loading }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: totalPages ? totalPages : 1 },
    },
    useGlobalFilter,
    usePagination
  );

  const paginationProps = {
    pageIndex,
    pageSize,
    pageCount: Math.ceil(data.length / pageSize),
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
  };

  const handleInputChange = (e) => {
    setGlobalFilter(e.target.value || undefined);
  };

  return (
    <div className="relative overflow-x-auto">
      {/* Global Filter */}
      <div className='flex justify-between items-center'>
        <input
            type="text"
            value={globalFilter || ''}
            onChange={handleInputChange}
            placeholder="Search..."
            className="p-2 mb-4"
        />
        
        <button
            onClick={createAction}
            className="font-medium bg-[#522b5b] hover:bg-purple-600 text-white flex items-center self-end p-1 rounded shadow-sm mb-2"
        >
            Crear
            <FaPlusCircle className="w-4 h-4 ml-2" />
        </button>
      </div>
     
      {/* Table */}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400" {...getTableProps()}>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="px-6 py-3">
                  {column.render('Header')}
                </th>
              ))}
               {(actionEdit || deleteAction) && <th className="px-6 py-3">Actions</th>}
            </tr>
          ))}
        </thead>

       {loading ? (
        <div className="px-6 py-20 w-full  flex justify-center items-center">
            <SpinnerDark />
        </div>
       ) : (<tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="px-6 py-4 whitespace-nowrap dark:text-white">
                    {cell.render('Cell')}
                  </td>
                ))}
                {
                    (actionEdit || deleteAction) && (
                        <td className="px-6 py-4 flex items-center gap-3">
                        {actionEdit && (
                          <button onClick={() => actionEdit(row.original.uuid)} className="font-medium bg-blue-600 p-1 rounded text-white hover:bg-blue-400 flex items-center">
                          <FaEdit className="w-4 h-4 mr-2" />
                            Edit
                        </button>
                            )}
                        {deleteAction && (
                        <td className="px-6 py-4 whitespace-nowrap dark:text-white">
                          <button onClick={() => deleteAction(row.original.uuid)} className="font-medium p-1 rounded bg-red-600 text-white  hover:bg-red-400 flex items-center">
                              <FaTrashAlt className="w-4 h-4 mr-2 " />
                              Delete
                          </button>
                        </td>
                        )}
                        </td>
                    )
                }
               
              </tr>
            );
          })}
        </tbody>)}

      </table>

      {/* Pagination */}
      <div className="mt-4">
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {paginationProps.pageCount}
          </strong>{' '}
        </span>
        <button onClick={before ? before :() => previousPage()} disabled={!canPreviousPage} className="ml-2 px-2 py-1 bg-blue-500 text-white rounded">
          Previous
        </button>
        <button onClick={next ? next :() => nextPage()} disabled={!canNextPage} className="ml-2 px-2 py-1 bg-blue-500 text-white rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default TableComponent;