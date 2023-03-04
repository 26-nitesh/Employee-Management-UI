import { Container, Nav, Navbar } from "react-bootstrap";

const Header=()=>{
    return(
        <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">EmployeeManagement</Navbar.Brand>
          <Nav className="me-right">
            <Nav.Link href="/manage">Manage Employees </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
export default Header;