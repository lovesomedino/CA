import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

function DropDown() {
    const location = useLocation();
    const fileId = location.state.id;

    const url = 'http://127.0.0.1:8000/api';

    const [selectedColumn, setSelectedColumn] = useState();
    const [columnList, setColumnList] = useState([{}]);

    const getData = () => {
        axios.get(url + '/' + fileId + '/dropdown').then(
            response => {
                setSelectedColumn(response.data[0]);
                setColumnList(response.data);
            }
        ).catch(error => {
            console.log(error);
        });
    };

    useEffect(() => {
        getData();
    }, []);
    
    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
                {selectedColumn}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {columnList.map(column => {
                    return(
                        <Dropdown.Item>{column}</Dropdown.Item>
                    )
                })}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropDown