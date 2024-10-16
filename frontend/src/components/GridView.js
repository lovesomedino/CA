import 'react-data-grid/lib/styles.css'
import DataGrid from 'react-data-grid'
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

function GridView() {
    const location = useLocation();
    const fileId = location.state.id;

    const url = 'http://127.0.0.1:8000/api';

    const [columns, setColumns] = useState([{}]);
    const [rows, setRows] = useState([{}]);

    const getData = () => {
        axios.get(url + '/' + fileId + '/grid').then(
            response => {
                setColumns(response.data[0]);
                setRows(response.data[1]);
            }
        ).catch(error => {
            console.log(error);
        });
    };

    useEffect(() => {
        getData();
    }, []);
    
    return <DataGrid columns={columns} rows={rows} style={{marginLeft: "240px", height: "100vh"}}/>
}

export default GridView