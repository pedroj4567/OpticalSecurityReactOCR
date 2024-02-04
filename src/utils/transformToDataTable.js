export const transformToDataTable = (apiResponse) => {
    if (!apiResponse || !Array.isArray(apiResponse) || apiResponse.length === 0) {
      return { columns: [], data: [] };
    }
  
    const columns = Object.keys(apiResponse[0]).map((key) => ({
      Header: key,
      accessor: key,
    }));
  
    const data = apiResponse.map((item) => {
      const row = {};
      columns.forEach((column) => {
        row[column.accessor] = item[column.accessor];
      });
      return row;
    });
  
    return { columns, data };
  };