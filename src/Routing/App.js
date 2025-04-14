import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UseLocation from "../Common/GoToTop/UseLocation-up";
import MyContextProvider from '../Common/Context/MyContextProvider';
import Home from '../Components/Home/Home';
import Header from '../Common/Header/Header';
import './App.css'

const App = () => {
  return (
    <MyContextProvider>
      <UseLocation/>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path="/login" element={user ? <Navigate to="/Login" /> : <Login setUser={setUser} />} />
        <Route path="/register" element={user ? <Navigate to="/register" /> : <Register />} /> */}
      
      </Routes>
      
    </MyContextProvider>
  )
}

export default App