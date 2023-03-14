import React, { Component, useEffect, useState } from 'react';
import './Main.css';
function Main() {
    
   let initValues={
    email: "",
    password: "",
   }
   let   [formValues, setFormValues] = useState(initValues);
   let [formErr, setFormErr] =useState({});
   let [isSubmit, setIsSubmit] = useState(false);

let handleChange=(e)=>{
    let {name, value} = e.target;
    setFormValues({...formValues, [name]:value });
    // console.log(formValues);

}

let validate =(values)=>{
    let errors = { };
    let regex = /^[^\s@] + @[^\s@] + \.[^\s@]{2,3}$/i;
    if(!values.email){
        errors.email="user email is required..."
    }
    if(!values.password){
        errors.password="user password is required..."
    }
    return errors;
}
let handleSubmit =(e)=>{
    e.preventDefault();
    setFormErr(validate(formValues));
    setIsSubmit(true);
}
// useEffect(  ()=>{
//     // console.log(formErr);
//     if(Object.keys(formErr).length===0 && isSubmit){
//         console.log(formValues);
//     }
// },[formErr]  );


        return (
            <div className='main'>
                <div className='left-side' >
                    <div class="ad"  id="ad">
                       
                          
                           <li>
                            {/* image is temp.  */}
                                <img src="./images/ad-img.png" />   
                          </li>
                         <li>
                            <button className='book-order-click-btn'>b o o k &bull; h e r e</button>
                         </li>
                          
                       
                    </div>
                </div>
                {/* user login-- starts here */}
                <div className='middle-main' >
                    {/* {Object.keys(formErr).length===0 && isSubmit? ( <div>Sign in success</div> ) : (<div>email or password is wrong</div>)} */}
                    {/* <pre>{ JSON.stringify(formValues,undefined,2) }</pre> */}
                    <form action='/' id='user-login' onSubmit={handleSubmit}>
                        <div className='first-para'>
                            <p> &Prime; Enter login credential for  &prime;Admin login&prime; &Prime;</p>
                        </div>
                        <div className='title-name'>
                           
                        <h3 className='email'>Enter user I D :&gt;</h3>
                        <p className='emailerr'> {formErr.email} </p>
                        <div className='required-msg'></div>
                        <input id='email' type={"email"} name="email"  onChange={handleChange} value={formValues.email} placeholder=" Email ID"/>
                        </div>
                        <div className='password'>
                           
                        <h3 className='email'>Enter Password :&gt;</h3>
                        <p className='passerr'>{formErr.password}</p>
                        <div className='required-msg'></div>
                        <input id='userpassword'  type={"text"} name="password" onChange={handleChange}  value={formValues.password}  placeholder=" Password"/>
                        </div>
                        <div className='privecy'>
                           <input className='checkbox' type={"checkbox"}  />
                           <p className='box-privecy'>accept! privecy & policy :&gt; </p>
                        </div>
                        
                        <button id='btn-btn'> &lt;   L O G I N &gt;</button> 
                        <p className='register-link'>Register lab here&gt;</p> <a className='reg-link' href=''>click here</a>
                        <div className='link-icon'></div>
                    </form>
                </div>
                {/* user login ends here */}

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

export default Main;