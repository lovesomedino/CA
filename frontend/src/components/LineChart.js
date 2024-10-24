import Dropdown from 'react-bootstrap/Dropdown';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LineChart(props) {
    const fileId = props.fileId;
    const url = 'http://127.0.0.1:8000/api';

    const [selectedColumn, setSelectedColumn] = useState('');
    const [columnList, setColumnList] = useState([{}]);
    const [labels, setLabels] = useState([{}]);
    const [counts, setCounts] = useState([{}]);

    const getDropDownData = () => {
        axios.get(url + '/' + fileId + '/dropdown').then(
            response => {
                console.log(response);
                setSelectedColumn(response.data[0]);
                setColumnList(response.data);
            }
        ).catch(error => {
            console.log(error);
        });
    };

    useEffect(() => {
        getDropDownData();
    }, []);

    const selectColumn = (column) => {
        setSelectedColumn(column);
    };

    const getData = () => {
        axios.get(url + '/' + fileId + '/chart/' + selectedColumn).then(
            response => {
                console.log(response);
                setLabels(response.data[0]);
                setCounts(response.data[1]);
            }
        ).catch(error => {
            console.log(error);
        });
    };

    useEffect(() => {
        getData();
    }, [selectedColumn]);

    const data = {
        labels: labels,
        datasets: [{
            label: 'count',
            data: counts,
        }]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div className="card mb-4">
            <div className="card-header py-3 d-flex justify-content-between align-items-center">
                <h6 className="m-0 font-weight-bold text-primary">Line Chart</h6>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        {selectedColumn}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {columnList.map(column => {
                            return(
                                <Dropdown.Item onClick={()=>{selectColumn(column)}}>{column}</Dropdown.Item>
                            )
                        })}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="card-body">
                <Line data={data} options={options}/>   
            </div>
        </div>
    );
}

export default LineChart;