import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.scss';
import SystemRoutes from './routes/SystemRoutes';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <SystemRoutes />
    </div>
  );
}

export default App;
