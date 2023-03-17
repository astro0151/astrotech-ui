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
        let labname= document.getElementById("labname").value;
        // let labNameValue=document.getElementByClassName("inp-lab").value;
        let emailValue=document.getElementById("email").value;
        let passwordValue=document.getElementById("password").value;
        let cPasswordValue=document.getElementById("cpassword").value;
        let contactValue=document.getElementById("contact").value;
        let gstValue=document.getElementById("gst").value;
        let ownerNameValue=document.getElementById("owner").value;
        let addressValue=document.getElementById("address").value;
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     
        if(labname===""){
            // alert("name required");
            let p= document.getElementById("alert-for-lab-name");
            p.innerText="lab name is required"
            return;
        }
        if(emailValue===""){
            let p= document.getElementById("alert-for-email");
            p.innerText="email is required"
            return;
        }else if(!regex.test(emailValue)){
            let p= document.getElementById("alert-for-email");
            p.innerText="email is not valid"
            return;
        }
        if(passwordValue===""){
            let p= document.getElementById("alert-for-password");
            p.innerText="password is required"
            return;
        }else if(passwordValue.length<8){
            let p= document.getElementById("alert-for-password");
            p.innerText="password lenth should be min 8 chars"
            return;
        }
        if(cPasswordValue===""){
            // alert("name required");
            let p= document.getElementById("alert-for-re-password");
            p.innerText="confirm password is required"
            return;
        }
        if(passwordValue!==cPasswordValue){
            let p= document.getElementById("alert-for-re-password");
            p.innerText="confirm password not matching"
            return;
        }
        if(contactValue===""){
            let p= document.getElementById("alert-for-contact");
            p.innerText="contact number is required"
            return;
        }else if(contactValue.length<10){
            let p= document.getElementById("alert-for-contact");
            p.innerText="Number should have 10 digits"
            return;
        }
        if(gstValue===""){
            let p= document.getElementById("alert-for-gst");
            p.innerText="GSTIN number is required"
            return;
        }
        if(ownerNameValue===""){
            let p= document.getElementById("alert-for-owner-name");
            p.innerText="Owner's name is required"
            return;
        }
        if(addressValue===""){
            let p= document.getElementById("alert-for-address");
            p.innerText="Full address is required"
            return;
        }
        
        CustomerService.registerAdmin(adminObj).then((response)=>{
            console.log(response.data);
        }).catch(err=>{
            console.log(err);
        })
        console.log(adminObj); // see object details in console browser
    }
// registration validation code



    return (<div className="reg-container">
        <form className="form-container">

        
        <h3 className="heading">Register your lab</h3>
        
        <div>
        <label className="lab-name">Lab name : </label>
        <input className="inp-lab"  placeholder="enter lab name" id="labname"
         type={"text"} name="lab-name"  value={labName} onChange={(e)=>{ setLabName(e.target.value) } }     />
         <p id="alert-for-lab-name"  style={{color: "red"}} ></p>
        </div>
        <div>
        <label className="email-name">Email Id : </label>
        <input className="inp-email" placeholder="enter email addresss"   id="email"
        type={"email"} name="emailId"  value={emailId} onChange={(e)=>{ setEmailID(e.target.value) } }  />
           <p id="alert-for-email"   style={{color: "red"}} ></p>
        </div>
        <div>
        <label className="pass-name">Password : </label>
        <input className="inp-pass" placeholder="enter password" id="password"
        type={"password"} name="password"  value={password} onChange={(e)=>{ setPassword(e.target.value) } } />
        <p id="alert-for-password"   style={{color: "red"}}  ></p>
        </div>
        <div>
        <label className="cpass-name">Confirm password : </label>
        <input className="inp-cpass" placeholder="re-enter password" id="cpassword"  />
        <p id="alert-for-re-password"   style={{color: "red"}}  ></p>
        </div>
        <div>
        <label className="contact-name">Contact No : </label>
        <input  className="inp-cont" placeholder="enter contact number" id="contact"
        type={"number"} name="contact"  value={contact} onChange={(e)=>{ setContact(e.target.value) } } />
        <p id="alert-for-contact"   style={{color: "red"}}  ></p>
        </div>
        <div>
        <label className="gst-name">GSTIN : </label>
        <input className="inp-gst" placeholder="enter registered GSTIN" id="gst"
        type={"text"} name="gst"  value={gst} onChange={(e)=>{ setGst(e.target.value) } }  />
        <p id="alert-for-gst"   style={{color: "red"}}  ></p>
        </div>
        <div>
        <label className="owner-name">Owner name : </label>
        <input  className="inp-own" placeholder="enter owner's name" id="owner"
        type={"text"} name="ownerName"  value={ownerName} onChange={(e)=>{ setOwnerName(e.target.value) } } />
        <p id="alert-for-owner-name"   style={{color: "red"}}  ></p>
        </div>
        <div>
        <label className="address-name">Lab address : </label>
        <input className="inp-add"  placeholder="enter lab full address"  id="address"
        type={"text"} name="labAddress"  value={labAddress} onChange={(e)=>{ setLabAddress(e.target.value) } } />
        <p id="alert-for-address"   style={{color: "red"}}  ></p>
        </div>
        <div className="btn-container">
            <button id="btn-reg" onClick={(e)=>saveRegisterDetails(e)} >Register</button>
        </div>
        </form>
    </div>)
}
export default Register;