import React from 'react'
import { useLocation } from 'react-router-dom';

function Analysis() {
    const location = useLocation();
    const fileId = location.state.id;

    return (
        <div>
            <div style={{marginLeft: "240px", height: "100vh"}}>Analysis {fileId}</div>
        </div>
    );
}

export default Analysis