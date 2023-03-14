import React, { Component , useState} from 'react';
import ReactDOM from 'react-dom/client';
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
            
                          <div id='test'></div>

                 <div className='btn'>
                    <div className='btn-log'>
                        <button id='btn' type='submit' className='btn-1'><i class="fa-regular fa-user"></i> LOG IN </button>
                    </div>
                    <div className='btn-sin'>
                    <button id='btn' type='submit' className='btn-2'><i class="fa-solid fa-id-card"></i> SIGN UP </button>
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

            </div>
        );
    
}

// root.render(<Sidebar />)
export default Head;