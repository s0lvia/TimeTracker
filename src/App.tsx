import React from 'react';
import { 
  BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom";
import './App.scss';
import Daily from './screens/daily';
import Weekly from './screens/weekly';
import Monthly from './screens/monthly';

function App() {
  return (
    <BrowserRouter> 
        <Routes>
          <Route path ="/" element={<Daily/>} />
          <Route path ="/weekly" element={<Weekly/>} />
          <Route path ="/monthly" element={<Monthly/>} />
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
