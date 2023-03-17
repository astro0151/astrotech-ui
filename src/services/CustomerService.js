import axios from "axios";
const CUST_API_URL='http://localhost:8081/api/v1/customers';
class CustomerService{
    getAllCustomers(){
        return axios.get(CUST_API_URL);
    }
    registerAdmin(adminObj){
        return axios.post(CUST_API_URL,adminObj);
    }
}
export default new CustomerService();