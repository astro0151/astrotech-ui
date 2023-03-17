import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
// Note:> css for login.jsx is written inside home.css........ need to change

const Login=()=>{
        
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
    // let regex = /^[^\s@] + @[^\s@] + \.[^\s@]{2,3}$/i;
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!values.email){
        errors.email="user email is required..."
    }else if(!regex.test(values.email)){
        errors.email="email is not valid"
    }
    if(!values.password){
        errors.password="user password is required..."
    }else if(values.password.length<8){
           errors.password="password lenght should be 8 chars or more"
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
        <div>
            <div className='middle-main' >
                    {/* {Object.keys(formErr).length===0 && isSubmit? ( <div>Sign in success</div> ) : (<div>email or password is wrong</div>)} */}
                    {/* <pre>{ JSON.stringify(formValues,undefined,2) }</pre> */}
                    <form action='/' id='user-login' onSubmit={handleSubmit}>
                        <div className='first-para'>
                            <p> &ldquo; Enter login credential for  Admin login</p>
                        </div>
                        <div className='title-name'>
                           
                        <h3 className='email'>Enter user I D :&gt;</h3>
                        <p className='emailerr'> {formErr.email} </p>
                        <div className='required-msg'></div>
                        <input id='email' className="emailid" type={"text"} name="email"  onChange={handleChange} value={formValues.email} placeholder=" Email ID"/>
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
                        
                        <button    id='btn-btn'> &lt;   L O G I N &gt;</button> 
                       {/* <Link id='btn-btn'>&lt; L O G I N &gt;</Link> */}
                        <p className='register-link'>Register lab here&gt;</p> <a className='reg-link' href=''>click here</a>
                        <div className='link-icon'></div> 
                    </form>
                </div>
        </div>
    )
}
export default Login;