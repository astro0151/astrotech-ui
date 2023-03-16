import axios from "axios";
const CUST_API_URL='http://localhost:8080/api/v1/customers';
class CustomerService{
    getAllCustomers(){
        return axios.get(CUST_API_URL);
    }
}
export default new CustomerService();