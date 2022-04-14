import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

function NavbarSection() {
  const api = JSON.parse(localStorage.getItem("api"));

  const productList = (api) => {
    // navdropdown logic
    return api?.map((prod, key) => (
      <NavDropdown.Item key={key} href={`/${prod?.id}`}>
        {prod.title}
      </NavDropdown.Item>
    ));
  };
  return (
    <>
      <Navbar fixed="top" className="navBar" expand="lg">
        <Container>
          {/* nav brand name and logo */}
          <Navbar.Brand
            style={{
              fontFamily: "'Grape Nuts', cursive",
              fontSize: "3vw",
              color: "white",
            }}
            href="#home"
          >
            <img
              src="https://clipartstation.com/wp-content/uploads/2018/10/wasserspritzer-clipart.png"
              alt="logo"
              height="90px"
            />
            Company Name
          </Navbar.Brand>
          {/* togglable nav components */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#home">About Us</Nav.Link>
              <Nav.Link href="#home">Contact Us</Nav.Link>
              <NavDropdown title="Products" id="basic-nav-dropdown">
                {api ? (
                  productList(api)
                ) : (
                  <>
                    <img src="https://gifimage.net/wp-content/uploads/2017/08/loading-gif-transparent-10.gif" />
                  </>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarSection;
