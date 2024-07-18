import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './header.css';

const Header = () => {
  return (
   
        <nav className="navbar navbar-expand-lg static-top ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
             
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse mt-2"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item px-2">
                  <button className="bt2" >Home</button>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link" href="#">How it works</a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link" href="#">Teastimonials</a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link" href="#">Pricing</a>
                </li>
              
  
                <button 
              
                  className="bt1 mx-2 "
                  type="submit"
                >
                Sign Up
                </button>
                <button  

                  className="bt2 mx-2 "
                  type="submit"
                >
                <i class="fa-solid fa-user mx-2" style={{color:"white"}}></i>
                  LOGIN
                </button>
              </ul>
            </div>
          </div>
        </nav>
    
  )
}

export default Header




