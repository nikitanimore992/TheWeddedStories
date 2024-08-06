
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet  } from 'react-router-dom';

const Layout=()=>{
    return(
        <>
 <Navbar fill="tabs" class="text-dark bg-white">
           <Nav>
           <Nav.Link>Home</Nav.Link>
           <Nav.Link>About</Nav.Link>
           <Nav.Link>About</Nav.Link>
      
           </Nav>
    </Navbar>
            <hr size="2" />
            <Navbar  class="text-white bg-dark">
                    {/* <Navbar.Brand href="/home">Navbar</Navbar.Brand>  */}
                    <Nav className="me-auto">
                        <Nav.Link href="/home"><b>Home</b></Nav.Link> 
                        <Nav.Link href="/contactus"><b>ContactUs</b></Nav.Link> 
                    </Nav>
            </Navbar>
            <hr size="4" color="red" />
            <Outlet />
            <hr size="4" color="red" />
           
        </>
    )
}
export default Layout;