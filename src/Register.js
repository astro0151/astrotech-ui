import React from "react";
import './Register.css'
function Register(){
    return (<div className="reg-container">
        <form>

        
        <h3 className="heading">Register your lab</h3>
        
        <div>
        <label className="lab-name">Lab name : </label>
        <input className="inp-lab"  placeholder="enter lab name" />
        </div>
        <div>
        <label className="email-name">Email Id : </label>
        <input className="inp-email" placeholder="enter email addresss" />
        </div>
        <div>
        <label className="pass-name">Password : </label>
        <input className="inp-pass" placeholder="enter password" />
        </div>
        <div>
        <label className="cpass-name">Confirm password : </label>
        <input className="inp-cpass" placeholder="re-enter password"  />
        </div>
        <div>
        <label className="contact-name">Contact No : </label>
        <input  className="inp-cont" placeholder="enter contact number"/>
        </div>
        <div>
        <label className="gst-name">GSTIN : </label>
        <input className="inp-gst" placeholder="enter registered GSTIN"  />
        </div>
        <div>
        <label className="owner-name">Owner name : </label>
        <input  className="inp-own" placeholder="enter owner's name"/>
        </div>
        <div>
        <label className="address-name">Lab address : </label>
        <input className="inp-add"  placeholder="enter lab full address" />
        </div>
        <div className="btn-container">
            <button id="btn-reg">Register</button>
        </div>
        </form>
    </div>)
}
export default Register;