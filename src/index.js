import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../src/components/Main';
import TVDetail from '../src/components/TVDetail';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App /> } >
          <Route index element={ <Main/> } />
          <Route path='Shows' element={ <Main/> } >
            <Route path=':number' element={<TVDetail />} />
          </Route>
          <Route path='*' element={
            <div style={{
              padding: '1rem'
            }}>
              <p>Still Building...</p>
            </div>
          }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
