import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GridView(props) {
    const fileId = props.fileId;
    const url = 'http://127.0.0.1:8000/api';

    const [colDefs, setColDefs] = useState(null);
    const [rowData, setRowData] = useState(null);

    const getData = () => {
        axios.get(url + '/' + fileId + '/grid').then(
            response => {
                console.log(response);
                setColDefs(response.data[0]);
                setRowData(response.data[1]);
            }
        ).catch(error => {
            console.log(error);
        });
    };

    useEffect(() => {
        getData();
    }, []);
    
    const autoSizeStrategy = {
        type: 'fitGridWidth',
        defaultMinWidth: 100,
    };

    return (
        <div className="ag-theme-quartz" style={{padding: "10px", width: `calc(100vw - 240px)`, height: "100vh"}}>
            <AgGridReact rowData={rowData} columnDefs={colDefs} autoSizeStrategy={autoSizeStrategy} />
        </div>
    );
}

export default GridView;