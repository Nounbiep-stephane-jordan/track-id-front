import './App.css';
import WebAppIndex from './webApp/webAppIndex';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebsiteIndex from './website/websiteIndex';
import { AppContext } from './context/context';
import { useState } from 'react';


function App() {
  const [showModal,setShowModal] = useState(false)
  return (
    <div className="App">
      <AppContext.Provider value={{showModal,setShowModal}}> 
      <BrowserRouter>
      <Routes>
      <Route path="/webapp" element={<WebAppIndex/>} />
      <Route path="/" element={<WebsiteIndex/>} />
      </Routes>
      </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
