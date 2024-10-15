import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GridView from './GridView'
import Analysis from './Analysis';

function Result() {
    const [isDataGrid, setIsDataGrid] = useState(true);
    const [isAnalysis, setIsAnalysis] = useState(false);

    const clickDataGrid = () => {
        setIsDataGrid(true);
        setIsAnalysis(false);
    };

    const clickAnalysis = () => {
        setIsDataGrid(false);
        setIsAnalysis(true);
    }

    return (
        <div>
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary fixed-top vh-100 overflow-auto" style={{width: "240px"}}>
                <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <Link to="/" className="fs-4" style={{textDecoration: "none"}}>
                        Home
                    </Link>
                </a>
                <hr></hr>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <button onClick={clickDataGrid} className={`nav-link ${isDataGrid? "active": "link-body-emphasis"}`} style={{textAlign: "left", width: "100%"}}>
                            Data Grid
                        </button>
                    </li>
                    <li>
                        <button onClick={clickAnalysis} className={`nav-link ${isAnalysis? "active": "link-body-emphasis"}`} style={{textAlign: "left", width: "100%"}}>
                            Analysis
                        </button>
                    </li>
                </ul>
                <hr></hr>
            </div>
            {isDataGrid&&<GridView />}
            {isAnalysis&&<Analysis />}
        </div>    
    );
}

export default Result