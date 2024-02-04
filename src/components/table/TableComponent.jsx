import React, { useMemo } from 'react';
import { useTable, useGlobalFilter, usePagination } from 'react-table';

const TableComponent = ({ data, columns }) => {
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
      initialState: { pageSize: 5 }, // Set your initial page size here
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
      <input
        type="text"
        value={globalFilter || ''}
        onChange={handleInputChange}
        placeholder="Search..."
        className="p-2 mb-4"
      />

      {/* Table */}
      <table {...getTableProps()} className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="px-6 py-3">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="px-6 py-4 whitespace-nowrap dark:text-white">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-4">
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {paginationProps.pageCount}
          </strong>{' '}
        </span>
        <button onClick={() => previousPage()} disabled={!canPreviousPage} className="ml-2 px-2 py-1 bg-blue-500 text-white rounded">
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage} className="ml-2 px-2 py-1 bg-blue-500 text-white rounded">
          Next
        </button>
      </div>
    </div>
  );
};


export default TableComponent;