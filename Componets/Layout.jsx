import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

const Layout = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>

                    {/* <Navbar.Brand href="/home">StoriesWedded</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/photographer">Photographer</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">+91 975 542 6241</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                pramodnimore143@gmail.com
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
            {/* end first navbar */}

            <div class="navimg">

            <Carousel fade>
      <Carousel.Item>
        <img src="./images/head1.jpg" alt="" />
        <Carousel.Caption>
        <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src="./images/head2.jpg" alt="" />
        <Carousel.Caption>
        <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="./images/head5.jpg" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="./images/head4.jpg" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

            </div>

            {/* second navbar */}

            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ">Disabled</a>
                </li>
            </ul>

            {/* layout */}



            <hr size="4" color="red" />
            <Outlet />
            <hr size="4" color="red" />

        </>
    )
}
export default Layout;