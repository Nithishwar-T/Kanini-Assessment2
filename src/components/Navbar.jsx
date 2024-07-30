// import React from 'react';
// import { Navbar, Nav, Container, Image } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBell } from '@fortawesome/free-solid-svg-icons';
// import logo from '../assets/download.png';
// import adminPic from '../assets/admin-pic.png';
// import '../App.css';

// const NavbarComponent = () => {
//   return (
//     <Navbar bg="light" variant="black" expand="lg" className="navbar-custom">
//       <Container>
//         <Navbar.Brand href="#campany" className='companyname'>
//           <img
//             src={logo}
//             width="30"
//             height="30"
//             className="d-inline-block align-top"
//             alt="Company Logo" />
//           {' '}
//           Kanini <b>Workspace</b>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ml-auto">
//             <Nav.Link href="#home" className="nav-item-custom">Home</Nav.Link>
//             <Nav.Link href="#book" className="nav-item-custom">Book Space</Nav.Link>
//             <Nav.Link  className="nav-item-custom">My Bookings</Nav.Link>
//             <Nav.Link className="nav-item-custom">Events</Nav.Link>
//             <Nav.Link  className="nav-item-custom">Calendar</Nav.Link>
//           </Nav>
//           <Nav className="ml-auto nav-right">
//             <Nav.Link href="#notifications" className="nav-item-custom">
//               <FontAwesomeIcon icon={faBell} />
//             </Nav.Link>
//             <Nav.Link href="#admin" className="nav-item-admin">
//               <Image src={adminPic} roundedCircle width="30" height="30" />
//               {' '}
//               {' '}Sriram Muralidharan
//               <select></select>

//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };
// const Footer = () => {
//     return (
//       <footer className="footer-custom">
//         <Container>
//           <p>© 2024 Kanini Workspace. All rights reserved.</p>
//         </Container>
//       </footer>
//     );
//   };

// export default NavbarComponent;

// import React from 'react';
// import { Navbar, Nav, Container, Image, NavDropdown } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBell } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
// import logo from '../assets/download.png';
// import adminPic from '../assets/admin-pic.png';
// import '../App.css';

// const NavbarComponent = () => {
//   return (
//     <>
//       <Navbar bg="light" variant="black" expand="lg" className="navbar-custom">
//         <Container>
//           <Navbar.Brand as={Link} to="/" className="companyname">
//             <img
//               src={logo}
//               width="30"
//               height="30"
//               className="d-inline-block align-top"
//               alt="Company Logo"
//             />
//             {' '}
//             Kanini <b>Workspace</b>
//           </Navbar.Brand>

//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ml-auto nav-middle">
//               <Nav.Link as={Link} to="/" className="nav-item-custom">Home</Nav.Link>
//               <NavDropdown title="Book Space" id="basic-nav-dropdown" className="nav-item-custom">
//                 <NavDropdown.Item as={Link} to="/bookroom">Book Room</NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/bookdesk">Book Desk</NavDropdown.Item>
//               </NavDropdown>
//               <Nav.Link className="nav-item-custom">My Bookings</Nav.Link>
//               <Nav.Link className="nav-item-custom">Events</Nav.Link>
//               <Nav.Link className="nav-item-custom">Calendar</Nav.Link>
//             </Nav>
//             <Nav className="ml-auto nav-right">
//               <Nav.Link href="#notifications" className="nav-item-custom">
//                 <FontAwesomeIcon icon={faBell} />
//               </Nav.Link>
//               <Nav.Link href="#admin" className="nav-item-admin">
//                 <Image src={adminPic} roundedCircle width="30" height="30" />
//                 {' '}
//                 Sriram Muralidharan
//                 <select></select>
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// };

// export default NavbarComponent;

import React from "react";
import { Navbar, Nav, Container, Image, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../assets/download.png";
import adminPic from "../assets/admin-pic.png";
import "./Navbar.css";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="light" variant="light" expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand as={Link} to="/" className="companyname">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Company Logo"
            />{" "}
            Kanini <b>Workspace</b>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto nav-middle">
              <Nav.Link as={Link} to="/" className="nav-item-custom">
                Home
              </Nav.Link>
              <NavDropdown
                title="Book Space"
                id="basic-nav-dropdown"
                className="nav-item-custom"
              >
                <NavDropdown.Item as={Link} to="/bookroom">
                  Book Room
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/bookdesk">
                  Book Desk
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="nav-item-custom">My Bookings</Nav.Link>
              <Nav.Link className="nav-item-custom">Events</Nav.Link>
              <Nav.Link className="nav-item-custom">Calendar</Nav.Link>
            </Nav>
            <Nav className="ml-auto nav-right">
              <Nav.Link href="#notifications" className="nav-item-custom">
                <FontAwesomeIcon icon={faBell} />
              </Nav.Link>
              <Nav.Link href="#admin" className="nav-item-admin">
                <Image src={adminPic} roundedCircle width="30" height="30" />
                Sriram Muralidharan
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;

// import React from 'react';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../App.css'; // Your custom CSS

// const NavbarComponent = () => {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Navbar.Brand href="#home">Kanini Workspace</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="mr-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <NavDropdown title="Book Space" id="book-space-dropdown">
//             <NavDropdown.Item href="#action/3.1">Room</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.2">Desk</NavDropdown.Item>
//           </NavDropdown>
//           <Nav.Link href="#my-bookings">My Bookings</Nav.Link>
//           <Nav.Link href="#events">Events</Nav.Link>
//           <Nav.Link href="#calendar">Calendar</Nav.Link>
//         </Nav>
//         <Nav>
//           <Nav.Link href="#notifications">
//             <i className="fa fa-bell"></i>
//           </Nav.Link>
//           <NavDropdown
//             title={
//               <>
//                 <img
//                   src="path/to/admin-profile-pic.jpg"
//                   alt="Admin Profile"
//                   className="admin-profile-pic"
//                 />
//                 Sriram Muralidharan
//               </>
//             }
//             id="admin-dropdown">
//             <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
//             <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
//             <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
//           </NavDropdown>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default NavbarComponent;
