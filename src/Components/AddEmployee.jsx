import { useFormik } from "formik";
import { Button, Card, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";
import { saveEmployee } from "../service/empService";

const AddEmployee =()=>{

    const employeeFormik = useFormik(
       {
        initialValues:{
              empId:"",
              empName:"",
              empEmail:"",
              designation:""
        },
       onSubmit:async (values)=>{
            await saveEmployee(values).then((data)=>{
              
              if(data.status==409)
              alert("employee already exist");
              else if(data.status==201)
              alert("added sucessfully");
                window.location.reload();
            });
            employeeFormik.resetForm()
       }
       } 
    )
const submit=(v)=>{
console.log(v);
}


return (
<Container className="mb-5">
<Row xs={1} md={2} className="mb-5">
<Col>
<Card className="mb-5" style={{ width: '40rem', height: '600px', margin: '120px',backgroundColor:'#ebf8c9'}}>
    <div className='border border-dark mt-5 p-5 mb-5' style={{ marginLeft: '90px', width: '500px' ,backgroundColor:'white'}}>
    <h2 className="text-center">Add Employee</h2>
    <Form className="mb-5" onSubmit={employeeFormik.handleSubmit}>
    <FormGroup>
                  <FormLabel>
                  EmpID
                  </FormLabel>
                  <FormControl type='text' name='empId' value={employeeFormik.values.empId} onChange={employeeFormik.handleChange}>
                  </FormControl>
                  <FormLabel className="mt-1">
                  Name
                  </FormLabel>
                  <FormControl type='text' name='empName' value={employeeFormik.values.empName} onChange={employeeFormik.handleChange}>
                  </FormControl>
                  <FormLabel className='mt-1'>
                  Email
                  </FormLabel>
                  <FormControl type='text' name='empEmail' value={employeeFormik.values.empEmail} onChange={employeeFormik.handleChange}>
                  </FormControl>
                  <FormLabel className='mt-1'>
                  designation
                  </FormLabel>
                  <FormControl type='text' name='designation' value={employeeFormik.values.designation} onChange={employeeFormik.handleChange}>
                  </FormControl>
     </FormGroup>
     <FormGroup>
                  <Button className='bg-pimary mt-3' type='submit'>Add</Button>
                  <Button className='bg-warning mt-3 mx-4' type='reset'>Reset</Button>
                </FormGroup>
    </Form>
    </div>
    </Card>
</Col>
</Row>
</Container>
)
}

export default AddEmployee;