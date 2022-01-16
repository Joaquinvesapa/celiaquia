import React from 'react'
import './styleFooter.css'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div style={{backgroundColor: "#3d3d3d", minHeight: "250px", zIndex: "4", position:"relative"}}>
      <div className='container'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>+Info</li>
          <li>Recetas</li>
          <li>Contacto</li>

        </ul>
      </div>
    </div>  
  )
}

export default Footer
