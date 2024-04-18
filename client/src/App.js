import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <ToastContainer
        position='top-center'
      />

      <Header />
      <main className='min-h-[calc(100vh-120px)] pt-16'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App