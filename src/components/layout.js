import React from 'react';
import Navbar from './navbar';
import "./styles/global.css";


export default function Layout({children}) {
  return (
    <div>
      <Navbar />      
      {children}
      <footer>
        <h1>footer</h1>
      </footer>
    </div>
    
  )
}
