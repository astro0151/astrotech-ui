import React, {useEffect, useState} from "react";
import './AdminHome.css';
import CustomerService from "./services/CustomerService";


const AdminHome=()=>{
    const [customers, setCustomers] = useState([]);
    useEffect(()=>{
               CustomerService.getAllCustomers().then((response)=>{
                        setCustomers(response.data)
                        console.log(response.data);
               }).catch(err=>{ 
                console.log(err);
               })
    },[])


    return (
        <div className="admin-container">
               <div className="h3"><h3>Welcome! admin</h3></div> 
               <div className="status-btn">
                <button id="pend-bok-btn">Pending Booking</button>
                <button id="bok-his-btn">Booking history</button>
               </div>
               <div className="order-details">
                  <table className="table table-bordered table-striped">
                           <thead className="table-head">
                            <th>Order Id</th>
                            <th>Name</th>
                            <th>Test name</th>
                            <th>dob</th>
                            <th>gender</th>
                            <th>Contact No</th>
                            <th>address</th>
                           </thead>
                           <tbody>
                            {
                                customers.map(
                                    customer=> 
                                    <tr key={customer.id}>
                                            <td>{customer.order_id}</td>
                                            <td>{customer.name}</td>
                                            <td>{customer.testName}</td>
                                            <td>{customer.dob} </td>
                                            <td>{customer.gender}</td>
                                            <td>{customer.mo_number}</td>
                                            <td>{customer.address} </td>
                                    </tr>
                                )
                            }
                           </tbody>
                  </table>
               </div>
        </div>
    )
}
export default AdminHome;