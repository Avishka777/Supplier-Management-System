import React from 'react';
import { DataGrid } from "@mui/x-data-grid"; 
import CustomToolbar from "./CustomToolbar"; 
import { createTheme, ThemeProvider } from "@mui/material/styles"; 
import { useState } from "react"; 
import './customDataGrid.scss'; 

// Create custom theme
const customTheme = createTheme({
    palette: {
      primary: {
        main: "#0D6BC2" 
      }
    }
});

// CustomDataGrid component
function CustomDataGrid({ data, columns, searchBar, report }) {

  // Function to get unique identifier for each row
  const getRowId = (row) => {
    return row._id; 
  }

  return (
    // ThemeProvider to provide custom theme to DataGrid
    <ThemeProvider theme={customTheme}>
        <DataGrid
            className="customDataGrid" 
            rows={data} 
            columns={columns} 
            getRowId={getRowId} 
            pageSize={10} 
            checkboxSelection 
            components={{ 
                Toolbar: (props) => (
                    <CustomToolbar {...props} searchBar={searchBar} report={report} />)
            }}
            getRowClassName={() => "grid-cell"}
        />
    </ThemeProvider>
  )
}

export default CustomDataGrid;
