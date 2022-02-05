import React from 'react';
import './style.css';
import {useState,useEffect} from "react";
import {Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import TopRated from './components/TopRated';
import Popular from './components/Popular';
import LoginPage from './components/LoginPage';
import ErrorPage from './components/ErrorPage';
import ProfilePage from './components/ProfilePage';
import Details from './components/DetailPage/Details';

export default function App() {
  const navRoutes = [
    { title: 'Ana Sayfa', path: '/', element: <Home />, isNav: true },
    { title: 'Top Rated', path: 'toprated', element: <TopRated />, isNav: true },
    { title: 'Popular', path: 'popular', element: <Popular /> },
    { title: 'Login', path: 'login', element: <LoginPage /> },
    { title: 'Error', path: 'loginerror', element: <ErrorPage /> },
    { title: 'Profile', path: 'profile', element: <ProfilePage /> },
    { title: 'Detail', path: 'detail/:movieId', element: <Details /> },
  
  ];

  return (
    <>
      <Navbar />
      <Routes>
      {navRoutes.map((item,index)=>(<Route key={index} path={item.path} element={item.element}></Route>))}
      
      </Routes>
      
    </>
  );
}
