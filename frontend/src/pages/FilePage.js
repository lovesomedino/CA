import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import GridView from '../components/GridView';
import ChartView from '../components/ChartView';

function FilePage() {
    const location = useLocation();
    const fileId = location.state.id;

    const [isDataGrid, setIsDataGrid] = useState(true);
    const [isChart, setIsChart] = useState(false);

    const clickDataGrid = () => {
        setIsDataGrid(true);
        setIsChart(false);
    };

    const clickChart = () => {
        setIsDataGrid(false);
        setIsChart(true);
    };

    return (
        <div>
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary fixed-top vh-100 overflow-auto" style={{width: "240px"}}>
                <Link to="/" className="fs-4 d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">                    
                    Home
                </Link>
                <hr></hr>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <button onClick={clickDataGrid} className={`nav-link ${isDataGrid? "active": "link-body-emphasis"}`} style={{textAlign: "left", width: "100%"}}>
                            Data Grid
                        </button>
                    </li>
                    <li>
                        <button onClick={clickChart} className={`nav-link ${isChart? "active": "link-body-emphasis"}`} style={{textAlign: "left", width: "100%"}}>
                            Chart
                        </button>
                    </li>
                </ul>
                <hr></hr>
            </div>
            {isDataGrid&&<GridView fileId={fileId} />}
            {isChart&&<ChartView fileId={fileId} />}
        </div>    
    );
}

export default FilePage;