import React, {useState} from 'react'
import axios from 'axios'

function UploadFile() {
    const [file, setFile] = useState('');

    const url = 'http://127.0.0.1:8000/api';

    const saveFile = () => {
        let formData = new FormData();
        formData.append("file", file);

        let axiosConfig = {
            headers: {
                'Content-Type': 'multpart/form-data'
            }
        };

        axios.post(url + '/files/', formData, axiosConfig).then(
            response => {
                console.log(response);
            }
        ).catch(error => {
            console.log(error);
        });
    };

    return(
        <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold text-body-emphasis">CSV Analysis</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Upload your csv file.</p>
                <div className="d-flex">
                    <input type="file" onChange={e => setFile(e.target.files[0])} className="form-control" />
                    <button type="button" onClick={saveFile} className="btn btn-primary btn-md px-3 gap-3 mx-2">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default UploadFile