import React, {useState, useEffect} from 'react'
import axios from 'axios'

function UploadFile() {
    const [file, setFile] = useState('');
    const [fileList, setFileList] = useState([{}]);

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
                getFileList();
            }
        ).catch(error => {
            console.log(error);
        });
    };

    const getFileList = () => {
        axios.get(url + '/files/').then(
            response => {
                setFileList(response.data);
            }
        ).catch(error => {
            console.log(error)
        });
    };

    const deleteFile = (id) => {
        axios.delete(url + '/files/' + `${id}/`).then(
            response => {
                console.log(response);
                getFileList();
            }
        ).catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        getFileList();
    }, [fileList]);

    return(
        <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold text-body-emphasis">CSV Analysis</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Upload your csv file.</p>
                <div className="d-flex">
                    <input type="file" onChange={e => setFile(e.target.files[0])} className="form-control" />
                    <button type="button" onClick={saveFile} className="btn btn-primary btn-md px-3 gap-3 mx-2">Submit</button>
                </div>
                <ol className="list-group list-group-numbered my-4">
                    {fileList.map(file => {
                        return(
                            <li className="list-group-item">
                                <a>{file.file}</a>
                                <button type="button" onClick={() => deleteFile(file.id)} className="btn btn-primary btn-sm px-2 gap-3 mx-2">Delete</button>
                            </li>
                        )
                    })}
                </ol>
            </div>
        </div>
    );
}

export default UploadFile