import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
    const [clickStateDataGrid, setClickStateDataGrid] = useState(true);
    const [clickStateAnalysis, setClickStateAnalysis] = useState(false);


    const clickDataGrid = () => {
        // @@todo 데이터 그리드 컴포넌트 렌더링

        setClickStateDataGrid(true);
        setClickStateAnalysis(false);
    };

    const clickAnalysis = () => {
        // @@todo 분석 결과 컴포넌트 렌더링

        setClickStateDataGrid(false);
        setClickStateAnalysis(true);
    }

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary fixed-top vh-100 overflow-auto" style={{width: "240px"}}>
            <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <Link to="/" className="fs-4" style={{textDecoration: "none"}}>
                    Home
                </Link>
            </a>`
            <hr></hr>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <button onClick={clickDataGrid} className={`nav-link ${clickStateDataGrid? "active": "link-body-emphasis"}`} style={{textAlign: "left", width: "100%"}}>
                        Data Grid
                    </button>
                </li>
                <li>
                    <button onClick={clickAnalysis} className={`nav-link ${clickStateAnalysis? "active": "link-body-emphasis"}`} style={{textAlign: "left", width: "100%"}}>
                        Analysis
                    </button>
                </li>
            </ul>
            <hr></hr>
        </div>
    );
}

export default SideBar