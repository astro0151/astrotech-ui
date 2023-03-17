import React, {useState} from "react";
import './Register.css'
import CustomerService from "./services/CustomerService";
function Register(){
    const [labName, setLabName] = useState('');
    const [emailId, setEmailID] = useState('');
    const [password, setPassword] = useState('');
    const [contact, setContact] = useState('');
    const [gst, setGst] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [labAddress, setLabAddress] = useState('');

    let saveRegisterDetails=(e)=>{
        e.preventDefault();
        let adminObj={
            labName, emailId, password, contact, gst, ownerName,labAddress
        }
        CustomerService.registerAdmin(adminObj).then((response)=>{
            console.log(response.data);
        }).catch(err=>{
            console.log(err);
        })
        console.log(adminObj); // see object details in console browser
    }
    return (<div className="reg-container">
        <form className="form-container">

        
        <h3 className="heading">Register your lab</h3>
        
        <div>
        <label className="lab-name">Lab name : </label>
        <input className="inp-lab"  placeholder="enter lab name"
         type={"text"} name="lab-name"  value={labName} onChange={(e)=>{ setLabName(e.target.value) } }     />
        </div>
        <div>
        <label className="email-name">Email Id : </label>
        <input className="inp-email" placeholder="enter email addresss"
        type={"email"} name="emailId"  value={emailId} onChange={(e)=>{ setEmailID(e.target.value) } }  />
        </div>
        <div>
        <label className="pass-name">Password : </label>
        <input className="inp-pass" placeholder="enter password" 
        type={"password"} name="password"  value={password} onChange={(e)=>{ setPassword(e.target.value) } } />
        </div>
        <div>
        <label className="cpass-name">Confirm password : </label>
        <input className="inp-cpass" placeholder="re-enter password"  />
        </div>
        <div>
        <label className="contact-name">Contact No : </label>
        <input  className="inp-cont" placeholder="enter contact number"
        type={"number"} name="contact"  value={contact} onChange={(e)=>{ setContact(e.target.value) } } />
        </div>
        <div>
        <label className="gst-name">GSTIN : </label>
        <input className="inp-gst" placeholder="enter registered GSTIN" 
        type={"text"} name="gst"  value={gst} onChange={(e)=>{ setGst(e.target.value) } }  />
        </div>
        <div>
        <label className="owner-name">Owner name : </label>
        <input  className="inp-own" placeholder="enter owner's name"
        type={"text"} name="ownerName"  value={ownerName} onChange={(e)=>{ setOwnerName(e.target.value) } } />
        </div>
        <div>
        <label className="address-name">Lab address : </label>
        <input className="inp-add"  placeholder="enter lab full address" 
        type={"text"} name="labAddress"  value={labAddress} onChange={(e)=>{ setLabAddress(e.target.value) } } />
        </div>
        <div className="btn-container">
            <button id="btn-reg" onClick={(e)=>saveRegisterDetails(e)} >Register</button>
        </div>
        </form>
    </div>)
}
export default Register;