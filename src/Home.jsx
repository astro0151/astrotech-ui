import React from "react";
import './Home.css';
import './chatbox.css';
const Home=()=>{
    return (
        <div className='main'>
            <div className='left-side' >
                <div class="ad"  id="ad">
                   
                      
                       <li>
                        {/* image is temp.  */}
                            <img src="./images/ad-img.png" />   
                      </li>
                     <li>
                        {/* <button className='book-order-click-btn'>b o o k &bull; h e r e</button> */}
                        <a className='booking-url ' href="http://localhost:8081">b o o k h e r e</a>
                     </li>
                      
                   
                </div>
            </div>
            {/* user chat-- starts here */}
            <div className="chatbox-container">
                <div className="chat-box">
                    <div className="display-area">
                        
                        <br />
                        <br />
                        <marquee  >Dear visitors ! chat bot is currently under development, it will be enabled soon....</marquee>
                      
                        <marquee className="marq1" behavior="alternate" direction="right" scrollamount="5"> A s t r o ! T e c h</marquee>  
                        <marquee className="marq2" behavior="alternate" direction="left" scrollamount="5"> D e v e l o p e r s</marquee>
                    
                    </div>
                    <div className="chat-btn">
                        <button id="chat-start-btn">Start chat</button>
                    </div>
                    
                </div>
            </div>
            {/* user chat ends here */}

            <div className='right-side' >
                <div className='info'>
                    <h3>Live Development info :&gt;</h3>
                </div>
                <div className='frame'>
                    <p className='p1'> &gt; Team&lt;Solo ali&gt; started develeopment- 20/01/2023</p>
                    <p className='p1'> &gt; Ui testing progrms -dynamic dates</p>
                    <p className='p1'> &gt; MySql integeration</p>
                    <p className='p4'> &gt; Spring boot integeration</p>
                    <p className='p1'>  &gt; Visual ui  and software archetech paper/graph design </p>
                    <p className='p1'> &gt;  hosted web application 02/03/2023</p>
                    <p className='p1'> &gt; React ui update work alph-version started</p>

                </div>
            </div>
       

     </div>
    );

}
export default Home;