import React, { Component , useState} from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import './Head.css';
// import Sidebar from './Sidebar';

const Head = ()=>{
    
    const [style, setStyle] = useState("side-bar");
  
  const displayBar = () => {
    console.log("you just clicked");
  
    
    setStyle("side-bar2");
  };

    

        return (
            <div className='head-nav'>
           
                <div className='texted-logo'>
                    <div className='txt'>
                    <h3>Astro!</h3>
                    <h2>Tech</h2>
                    </div>
                       <p>developers</p>
                </div> 
            
                          <div className='home-icon'>
                          <Link to={"/"} className='icon-home'> <i class="fa-solid fa-house fa-xl"></i></Link>
                          </div>

                 <div className='btn'>
                    <Link to={"/login"} className='btn-1'>Log IN  <i class="fa-regular fa-user"></i></Link>
                    <Link to={"/register"} className='btn-2'>Register <i class="fa-solid fa-id-card"></i></Link>
                </div>


                    <div className='side-bar-container'>
                           <i onClick={displayBar} className="fa-solid fa-bars"></i>
                   
                           <div className={style} >
                    
                            <a href='/'>Home</a>
                             <a href='/'>Contacts</a>
                             <a href='/'>Services</a>
                             <a href='/'>About us</a>
                          </div>
                    </div>
                 

            </div>
        );
    
}

// root.render(<Sidebar />)
export default Head;