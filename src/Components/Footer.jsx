import { Container, Navbar } from "react-bootstrap";

const Footer = ()=>{
    return(
       <Container className="mt=5">
         <Navbar fixed="bottom" expand="lg" variant="dark" bg="primary">
      <Container>
        <Navbar.Brand>@Copyright--employeeManagement.com</Navbar.Brand>
      </Container>
    </Navbar>
       </Container>
    )
}

export default Footer;