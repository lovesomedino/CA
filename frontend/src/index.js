import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../src/styles/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import UploadFile from './components/UploadFile'
import GridView from './components/GridView';

function Router(){
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<UploadFile />} />
          <Route path=":id" element={<GridView />} />
        </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
