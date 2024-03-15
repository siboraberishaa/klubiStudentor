import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { FiChevronDown } from 'react-icons/fi';


const NavLinks = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  
    return (

      

      <Nav className="justify-content-end ms-auto pe-3">
        <Nav.Link className={`nav-link ${isScrolled ? "scrolled" : ""}`} href="#action1">Home</Nav.Link>
        <Nav.Link className={`nav-link ${isScrolled ? "scrolled" : ""}`} href="#action2">Link</Nav.Link>
        <NavDropdown title={<span className={`nav-item ${isScrolled ? "scrolled" : ""}`}>
        Dropdown 
        {isScrolled ? <FiChevronDown /> : <FiChevronDown />}
    </span>} id="offcanvasNavbarDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>

        {/* <Nav.Link className="btn btn-outline-dark fw-medium borderallow ms-2"><AiOutlineUser /> Login</Nav.Link> */}
      </Nav>
    );
  };

  const Header = () => {
  
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
    const [currentSlide, setCurrentSlide] = useState(0);
    

    const handlePrev = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
    };

  
  
    useEffect(() => {
      const onScroll = () => {
        const scrolled = window.scrollY > 50;
        setIsScrolled(scrolled);
      };
      window.addEventListener("scroll", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }, []);
  
    
  
  
    useEffect(() => {
      window.addEventListener("resize", () => {
        setIsMobile(window.innerWidth < 992);
      });
    }, []);

    useEffect(() => {
      const timer = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(timer); // Clean up timer on unmount
  }, []);
  
  
    return (
      <>
        <header
          id="header"
          className={`fixed-top ${isScrolled ? "scrolled" : ""}`}
        >
        
          <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand className={`navbar-brand ${isScrolled ? "scrolled" : ""}`} href="#">Navbar Offcanvas</Navbar.Brand>
          {isMobile ? (
            <>
              <Navbar.Toggle aria-controls="offcanvasNavbar" />
              <Navbar.Offcanvas 
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                  placement="end"
                  className="bg-dark text-white"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel">
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <NavLinks />
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </>
          ) : (
            <Navbar.Collapse>
              <NavLinks />
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
        </header>

        <div className="carousel-header">
                <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li className={currentSlide === 0 ? 'active' : ''} onClick={() => setCurrentSlide(0)}></li>
                    <li className={currentSlide === 1 ? 'active' : ''} onClick={() => setCurrentSlide(1)}></li>
                    <li className={currentSlide === 2 ? 'active' : ''} onClick={() => setCurrentSlide(2)}></li>
                </ol>
                    <div className="carousel-inner" role="listbox">
                    <div className={`carousel-item ${currentSlide === 0 ? 'active' : ''}`}>
                            <img src="/images/carousel-2.jpg" className="img-fluid" alt="Imag" />
                            <div className="carousel-caption">
                                <div className="p-3" style={{maxWidth: '900px'}}>
                                    <h6 className="text-white text-uppercase fw-bold mb-4 pt-5" style={{letterSpacing: '3px'}}>Lorem ipsum dolor</h6>
                                    <h3 className="display-3 text-capitalize fw-normal text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                                    <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    </p>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <a className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" href="!#">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`carousel-item ${currentSlide === 1 ? 'active' : ''}`}>
                            <img src="/images/carousel-1.jpeg" className="img-fluid" alt="Imag" />
                            <div className="carousel-caption">
                                <div className="p-3" style={{maxWidth: '900px'}}>
                                <h6 className="text-white text-uppercase fw-bold mb-4 pt-5" style={{letterSpacing: '3px'}}>Lorem ipsum dolor</h6>
                                    <h3 className="display-3 text-capitalize fw-normal text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                                    <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    </p>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <a className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" href="!#">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`carousel-item ${currentSlide === 2 ? 'active' : ''}`}>
                            <img src="/images/carousel-3.jpg" className="img-fluid" alt="Imag" />
                            <div className="carousel-caption">
                                <div className="p-3" style={{maxWidth: '900px'}}>
                                <h6 className="text-white text-uppercase fw-bold mb-4 pt-5" style={{letterSpacing: '3px'}}>Lorem ipsum dolor</h6>
                                    <h3 className="display-3 text-capitalize fw-normal text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                                    <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    </p>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <a className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" href="!#">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" onClick={handlePrev}>
                    <span className="carousel-control-prev-icon btn"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" onClick={handleNext}>
                    <span className="carousel-control-next-icon btn"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
           
      </>
    );
  };
  
  export default Header;
  