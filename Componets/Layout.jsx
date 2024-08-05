
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet  } from 'react-router-dom';
const Layout=()=>{
    return(
        <>
            <Navbar class="text-white bg-dark">
                    {/* <Navbar.Brand href="/home">Navbar</Navbar.Brand>  */}
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link> 
                        <Nav.Link href="/contactus">ContactUs</Nav.Link> 
                    </Nav>
            </Navbar>
            <hr size="2" />
            <Navbar class="text-white bg-dark" >
                    {/* <Navbar.Brand href="/home">Navbar</Navbar.Brand>  */}
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link> 
                        <Nav.Link href="/contactus">ContactUs</Nav.Link> 
                    </Nav>
            </Navbar>
            <hr size="4" color="red" />
            <Outlet />
            <hr size="4" color="red" />
           
        </>
    )
}
export default Layout;