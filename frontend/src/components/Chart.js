import React from 'react'
import { useLocation } from 'react-router-dom';

function Chart() {
    const location = useLocation();
    const fileId = location.state.id;

    return (
        <div>
            <div style={{marginLeft: "240px", height: "100vh"}}>Chart</div>
        </div>
    );
}

export default Chart