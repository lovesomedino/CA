import React from 'react'
import { useLocation } from 'react-router-dom'
import BarChart from './charts/BarChart'
import PieChart from './charts/PieChart'
import LineChart from './charts/LineChart'

function ChartView() {
    const location = useLocation();
    const fileId = location.state.id;

    return (
        <div style={{marginLeft: "240px", height: "100vh"}}>
            <div class="container-fluid">
                 <div class="row">
                    <div class="col-xl-8 col-lg-7">
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Bar Chart</h6>
                            </div>
                            <div class="card-body">
                                <div class="chart-bar">
                                    <BarChart />
                                </div>
                            </div>
                        </div>
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Area Chart</h6>
                            </div>
                            <div class="card-body">
                                <div class="chart-area">
                                    <LineChart />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-5">
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Pie Chart</h6>
                            </div>
                            <div class="card-body">
                                <div class="chart-pie pt-4">
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