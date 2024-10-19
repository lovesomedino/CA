import React from 'react'
import { useLocation } from 'react-router-dom'
import DropDown from './DropDown'
import BarChart from './charts/BarChart'
import PieChart from './charts/PieChart'
import LineChart from './charts/LineChart'

function ChartView() {
    const location = useLocation();
    const fileId = location.state.id;

    return (
        <div style={{marginLeft: "240px", height: "100vh"}}>
            <div className="container-fluid">
                <div className="d-flex align-items-center my-2">
                    <p className="lead mb-0 me-2">Current column is</p>
                    <DropDown />
                </div>
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Bar Chart</h6>
                            </div>
                            <div className="card-body">
                                <div className="chart-bar">
                                    <BarChart />
                                </div>
                            </div>
                        </div>
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Area Chart</h6>
                            </div>
                            <div className="card-body">
                                <div className="chart-area">
                                    <LineChart />
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
                                    <PieChart />
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