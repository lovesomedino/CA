import BarChart from './BarChart';
import PieChart from './PieChart';
import LineChart from './LineChart';

function ChartView(props) {
    const fileId = props.fileId;
    const url = 'http://127.0.0.1:8000/api';

    return (
        <div className="container-fluid" style={{padding: "10px"}}>
            <div className="row">
                <div className="col-xl-8 col-lg-7">
                    <BarChart fileId={fileId} />
                    <LineChart fileId={fileId} />
                </div>
                <div className="col-xl-4 col-lg-5">
                    <PieChart fileId={fileId}/>
                </div>
            </div>
        </div>
    );
}

export default ChartView;