import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import Dropdown from 'react-bootstrap/Dropdown';
import BarChart from './charts/BarChart'
import PieChart from './charts/PieChart'
import LineChart from './charts/LineChart'

function ChartView() {
    const location = useLocation();
    const fileId = location.state.id;

    const url = 'http://127.0.0.1:8000/api';

    const [selectedColumn, setSelectedColumn] = useState('');
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

    const DropDownClick = (column) => {
        setSelectedColumn(column);
    };

    return (
        <div style={{marginLeft: "240px", height: "100vh"}}>
            <div className="container-fluid">
                <div className="d-flex align-items-center my-2">
                    <p className="lead mb-0 me-2">Current column is</p>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                            {selectedColumn}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {columnList.map(column => {
                                return(
                                    <Dropdown.Item onClick={()=>{DropDownClick(column)}}>{column}</Dropdown.Item>
                                )
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Bar Chart</h6>
                            </div>
                            <div className="card-body">
                                <div className="chart-bar">
                                    <BarChart id={fileId} column={selectedColumn} />
                                </div>
                            </div>
                        </div>
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Line Chart</h6>
                            </div>
                            <div className="card-body">
                                <div className="chart-area">
                                    <LineChart id={fileId} column={selectedColumn} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Pie Chart</h6>
                            </div>
                            <div className="card-body">
                                <div className="chart-pie pt-4">
                                    <PieChart id={fileId} column={selectedColumn} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChartView