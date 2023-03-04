import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { deleteEmployee, showEmployees } from "../service/empService";
import { FaBeer } from 'react-icons/fa';
import { PenFill, Trash } from "react-bootstrap-icons";
import { useNavigate } from "react-router";
import Update from "./Update";
import AddEmployee from "./AddEmployee";
const MainInner =()=>{
    const NAvigate =useNavigate();
    const [flag, setFlag] = useState(0);
    const [empList,setEmps]=useState([]);

    useEffect(()=>{
           showEmployees().then((data=>{
              setEmps(data.data.response)
           })
  
           )
        },[]
    )
const  deletew= async (email)=>{
    await deleteEmployee(email);
    window.location.reload();

}
const update=(email)=>{
localStorage.setItem("updateEmial",email);
   setFlag(3);
}
const handlesave = ()=>{
   
    setFlag(1)
}
    const tuples = empList.map(tuple=>{
      return(
        <tr key={tuple.id}>
            <td>{tuple.empId}</td>
            <td>{tuple.empName}</td>
            <td>{tuple.empEmail}</td>
            <td>{tuple.designation}</td>
           <td>
            <Button variant="danger" onClick={()=>deletew(tuple.empEmail)}><Trash style={{color:'white'}}></Trash></Button>
           &nbsp;&nbsp;&nbsp;&nbsp;
           <Button variant="warning" onClick={()=>update(tuple.empEmail)}><PenFill style={{color:'white'}}></PenFill></Button>
           </td>
        </tr>
      )
    }

    )

return(
    <Container className="mt-5 p-5">

    <Table striped bordered hover>
      <thead className="text-center">
        <tr>
          <th>#ID</th>
          <th>Employee Name</th>
          <th>email</th>
          <th>designation</th>
          <th>Actions</th>
        </tr>
        {tuples}
      </thead>
      </Table>
      {flag === 0 && <Button onClick={handlesave}>Add More</Button>}
      {flag === 1 && <AddEmployee></AddEmployee>}
      {flag === 3 && <Update></Update>}

    </Container>
)
}
export default MainInner;