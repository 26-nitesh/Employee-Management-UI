import axios from "axios";
const BASE_URI="http://localhost:8686/api/emp";

function saveEmployee(employee){
axios.post(BASE_URI+'/save',employee)
    
}
export async function  showEmployees(){
const response = await axios.get(BASE_URI+'/getAll');
//    console.log(data);
 return response ;
    
}
export async function updateEmployee(employee){
//    axios.put()
    
    
}
export async function deleteEmployee(email){

const result = await axios.delete(BASE_URI+'/'+email)

console.log(result);
    
}


