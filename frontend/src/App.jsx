import React from 'react';
import Homepage from './Pages/HomePage';
import {Route, Routes} from 'react-router-dom';
import Chatpage from './Pages/Chatpage';
import "./App.css"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/chats" element={<Chatpage/>} />
      </Routes>
      
    </>
  )
}

export default App
