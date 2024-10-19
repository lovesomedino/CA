import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Bar } from 'react-chartjs-2'
import 'chart.js/auto'

function BarChart(props) {
    const fileId = props.id;
    const column = props.column;

    const url = 'http://127.0.0.1:8000/api';

    const [labels, setLabels] = useState([{}]);
    const [counts, setCounts] = useState([{}]);
    
    const getData = () => {
        axios.get(url + '/' + fileId + '/chart/' + column).then(
            response => {
                setLabels(response.data[0]);
                setCounts(response.data[1]);
            }
        ).catch(error => {
            console.log(error);
        });
    };

    useEffect(() => {
        getData();
    }, [column]);

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

    return <Bar data={data} options={options}/>;
};

export default BarChart;