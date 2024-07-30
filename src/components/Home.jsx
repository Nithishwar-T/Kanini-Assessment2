// import React from 'react';
// import { Card, Container, Row, Col } from 'react-bootstrap';
// import officeBuilding from '../assets/rak.png';
// import '../App.css';

// const Home = () => {
//   return (
//     <Container fluid className="home-page">
//       <Row>
//         <Col md={12} className="position-relative">
//           <img
//             src={officeBuilding}
//             alt="Office Building"
//             className="img-fluid"
//           />
//           <Card className="overlay-card text-center">
//             <Card.Body>
//               <Card.Title>Hello Sriram, Welcome to</Card.Title>
//               <Card.Text>
//                 Rattha Tek Meadows, Chennai
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//       <Row className="justify-content-center">
//         <Col md={12}>
//           <Card className="text-center additional-card">
//             <Card.Body>
//               <Card.Title>Nothing Upcoming!</Card.Title>
//               <Card.Text>
//                 Any upcoming bookings and guests will appear here
//               </Card.Text>
//               <div className="d-flex justify-content-center">
//                 <a href="#" className="btn btn-primary mr-2">Book a room</a>
//                 <a href="#" className="btn btn-secondary">Book a desk</a>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Home;
// import React from "react";
// import { Card, Container, Row, Col } from "react-bootstrap";
// import officeBuilding from "../assets/rak.png";
// import "../App.css";

// const Home = () => {
//   return (
//     <Container fluid className="home-page">
//       <Row>
//         <Col md={12} className="position-relative">
//           <img
//             src={officeBuilding}
//             alt="Office Building"
//             className="img-fluid"
//           />
//           <Card className="overlay-card">
//             <Card.Body>
//               <Card.Title>Hello Sriram, Welcome to</Card.Title>
//               <Card.Text>Rattha Tek Meadows, Chennai</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//       <Row className="">
//         <Col md={7}>
//           <Card className=" additional-card">
//             <Card class="upcoming-card">
//               <Card class="card-icon"></Card>
//               <Card class="card-content">
//                 <h3>Nothing Upcoming!</h3>
//                 <p>Any upcoming bookings and guests will appear here</p>
//                 <Card class="card-links">
//                   <a href="/bookroom">Book a room &rarr;</a>
//                   <a href="/bookdesk">Book a desk &rarr;</a>
//                 </Card>
//               </Card>
//             </Card>

//             <Card.Body>

//               <Card.Title className='CardTitle'><img src="cal.png" alt=''/>Nothing Upcoming!</Card.Title>
//               <Card.Text>
//                 Any upcoming bookings and guests will appear here
//               </Card.Text>
//               <div className="d-flex justify-content-center">
//                 <a href="#" className="btn btn-primary mr-2">Book a room</a>
//                 <a href="#" className="btn btn-secondary">Book a desk</a>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3}></Col>
//       </Row>
//     </Container>
//   );
// };

// export default Home;

// import React from "react";
// import { Card, Container, Row, Col, NavDropdown } from "react-bootstrap";
// import officeBuilding from "../assets/rak.png";
// import "../App.css";

// const Home = () => {
//   return (
//     <Container fluid className="home-page">
//       <Row>
//         <Col md={12} className="position-relative">
//           <img
//             src={officeBuilding}
//             alt="Office Building"
//             className="img-fluid"
//           />
//           <Card className="overlay-card">
//             <Card.Body>
//               <Card.Title>Hello Sriram, Welcome to</Card.Title>
//               <NavDropdown title="Rattha Tek Meadows, Chennai" id="basic-nav-dropdown" className="Card-text2"/>

//               {/* <Card.Text>Rattha Tek Meadows, Chennai</Card.Text> */}
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//       <Row className="">
//         <Col md={7}>
//           <Card className="additional-card">
//             <Card.Body>
//               <Card.Title className='card-title'><img src="cal.png" alt=""/>Nothing Upcoming!

//               <Card.Text className="px-5">
//               Any upcoming bookings and guests will appear here
//               </Card.Text>
//               </Card.Title>
//               <div className="roompad d-flex ">
//                 <img src="door (1) 1.png" alt="" className="px-2"/>
//                 <a href="/bookroom" className="bookdoor ">Book a room &rarr;</a>
//                 <img src="desk-chair 1.png" alt="" className="px-2"/>
//                 <a href="/bookdesk" className="booktable text-decoration:none">Book a desk &rarr;</a>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={4}>
//           <Card className="additional-card1">
//             <Card.Body className="card1">
//               <Card.Title className='card-title1'>Events happening at chennai today</Card.Title>
//               <Card.Text>

//                 <div className="event">
//                   <p><strong>July 13</strong></p>
//                   <p>Family day in chennai faculty</p>
//                   <p>10:00 AM - 6:00 PM</p>
//                   <a href="#" className="btn btn-link">View Details</a>
//                 </div><hr/>
//                 <div className="event">
//                   <p><strong>July 13</strong></p>
//                   <p>Family day in chennai faculty</p>
//                   <p>10:00 AM - 6:00 PM</p>
//                   <a href="#" className="btn btn-link">View Details</a>
//                 </div>
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Home;

// import React from "react";
// import { Card, Container, Row, Col, NavDropdown } from "react-bootstrap";
// import officeBuilding from "../assets/rak.png";
// import "../App.css";

// const Home = () => {
//   return (
//     <Container fluid className="home-page">
//       <Row>
//         <Col md={12} className="position-relative">
//           <img
//             src={officeBuilding}
//             alt="Office Building"
//             className="img-fluid"
//           />
//           <Card className="overlay-card">
//             <Card.Body>
//               <Card.Title>Hello Sriram, Welcome to</Card.Title>
//               <NavDropdown title="Rattha Tek Meadows, Chennai" id="basic-nav-dropdown" className="Card-text2"/>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={7}>
//           <Card className="additional-card">
//             <Card.Body>
//               <Card.Title className='card-title'>
//                 <img src="cal.png" alt=""/>Nothing Upcoming!
//                 <Card.Text className="px-5">
//                   Any upcoming bookings and guests will appear here
//                 </Card.Text>
//               </Card.Title>
//               <div className="roompad d-flex">
//                 <img src="door (1) 1.png" alt="" className="px-2"/>
//                 <a href="/bookroom" className="bookdoor">Book a room &rarr;</a>
//                 <img src="desk-chair 1.png" alt="" className="px-2"/>
//                 <a href="/bookdesk" className="booktable text-decoration:none">Book a desk &rarr;</a>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={4}>
//           <Card className="additional-card1">
//             <Card.Body className="card1">
//               <Card.Title className='card-title1'>Events happening at chennai today</Card.Title>

//                 <div className="event">

//                   <p style={{color: "grey"}}><img src="calendar.jpg"/>
//                   Family Day in Chennai Faculty<br />10am-6pm</p>
//                   <button style={{backgroundColor:"#5162F6"}}>View Details</button>
//                   <hr />
//                   <p style={{color: "grey"}}>
//                   <img src="calendar.jpg"/>Family Day in Chennai Faculty<br />10am-6pm</p>
//                   <button style={{backgroundColor:"#5162F6"}}>View Details</button>
//                 </div>

//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Home;

// import React from "react";
// import { Container, Card, Button, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import "../App.css";
// import buildingImage from "../assets/rak.png";

// const Home = () => {
//   return (
//     <Container className="home-container">
//       <Row>
//         <Col>
//           <img src={buildingImage} alt="Building" className="img-fluid" />
//         </Col>
//       </Row>
//       <Row className="mt-3">
//         <Col md={10}>
//           <Card className="overlay-card mx-5">
//             <Card.Body>
//               <Card.Title>Hello Sriram, Welcome to</Card.Title>
//               <Card.Text>
//                 <b>Rattha Tek Meadows, Chennai</b>
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//       <Row className="mt-3">
//         <Col md={7}>
//           <Card className="Nothing">
//             <Card.Body>
//               <Card.Title>
//                 <img src="cal.png" alt="" />
//                 Nothing Upcoming!
//               </Card.Title>
//               <Card.Text>
//                 Any upcoming bookings and guests will appear here
//               </Card.Text>
//               <img src="door (1) 1.png" alt=""/>
//               <Button variant="link" as={Link} to="/bookroom">
//                 Book a room
//               </Button>
//               <img src="desk-chair 1.png" alt=""/>
//               <Button variant="link" as={Link} to="/bookdesk">
//                 Book a desk
//               </Button>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={5}>
//           <Card className="EventsCard">
//             <Card.Body>
//               <Card.Title>
//               <img src="calendar.jpg" alt=""/>
//                 Events happening at Chennai today</Card.Title>
//               <Card.Text>
//                 <p>Family day in chennai faculty</p>
//                 <Button variant="link">View Details</Button>
//                 <hr />
//               </Card.Text>
//             </Card.Body>
//             <Card.Body>
//               <Card.Title>
//               <img src="calendar.jpg" alt=""/>Events happening at Chennai today</Card.Title>
//               <Card.Text>
//                 <p>Family day in chennai faculty</p>
//                 <Button variant="link">View Details</Button>
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//       <Row className="mt-3">
//         <Col>
//           <Card>
//             <Card.Body>
//               <Card.Title>Meeting rooms available right now</Card.Title>
//               <Button variant="link" as={Link} to="/view-rooms">
//                 View all rooms
//               </Button>
//             </Card.Body>
//           </Card>
//         </Col>
//         <div>
//         <section className="meeting-rooms-section">
//               <h2>Meeting rooms available now</h2>
//               <div className="meeting-rooms-cards">
//                 <div className="meeting-room-card">
//                   <img src="Img.png" alt="Meeting Room 1" />
//                   <p>Meeting Room 1</p>
//                 </div>
//                 <div className="meeting-room-card">
//                   <img src="Img (1).png" alt="Meeting Room 2" />
//                   <p>Meeting Room 2</p>
//                 </div>
//                 <div className="meeting-room-card">
//                   <img src="img4.jpg" alt="Meeting Room 3" />
//                   <p>Meeting Room 3</p>
//                 </div>
//                 <div className="meeting-room-card">
//                   <img src="image.jpg" alt="Meeting Room 4" />
//                   <p>Meeting Room 4</p>
//                 </div>
//               </div>
//             </section>
//             <section className="meeting-rooms-section">
//               <h2>Meeting rooms available now</h2>
//               <div className="meeting-rooms-cards">
//                 <div className="meeting-room-card">
//                   <img src="Img.png" alt="Meeting Room 1" />
//                   <p>Meeting Room 1</p>
//                 </div>
//                 <div className="meeting-room-card">
//                   <img src="Img (1).png" alt="Meeting Room 2" />
//                   <p>Meeting Room 2</p>
//                 </div>
//                 <div className="meeting-room-card">
//                   <img src="img4.jpg" alt="Meeting Room 3" />
//                   <p>Meeting Room 3</p>
//                 </div>
//                 <div className="meeting-room-card">
//                   <img src="image.jpg" alt="Meeting Room 4" />
//                   <p>Meeting Room 4</p>
//                 </div>
//               </div>
//             </section>
//           </div>
//           <div className="col-md-5">
//             <section className="events-card">
//               <h3>Events happening at Chennai today</h3>
//               <p style={{color:"grey"}}><b>July 13</b> Family Day in Chennai Faculty<br />10am-6pm</p>
//               <button style={{backgroundColor:"white" ,color:"#5162f6"}}>view Details</button>
//               <hr />
//               <p style={{color:"grey"}}><b>July 13</b>  Family Day in Chennai Faculty<br />10am-6pm</p>
//               <button style={{backgroundColor:"white" ,color:"#5162f6"}}>view Details</button>
//             </section>
//             <section className="events-card1">
//               <h3>Notifications</h3>
//               <p style={{color:"grey"}}><img src="Ellipse.png" alt="Notification Icon"></img> Added capacity in Kanini, Pune office<br />Hr Admin</p>
//               <button style={{backgroundColor:"white" ,color:"#5162f6"}}>view Details</button>
//               <hr />
//             </section>
//             </div>
//       </Row>

//     </Container>

//   );
// };

// export default Home;

// import React from "react";
// import { Container, Card, Button, Row, Col, CardBody } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import "../App.css";
// import buildingImage from "../assets/rak.png";
// import calImage from "../assets/cal.png";
// import doorImage from "../assets/door (1) 1.png";
// import deskChairImage from "../assets/desk-chair 1.png";
// import calendarImage from "../assets/calendar.jpg";
// import ellipseImage from "../assets/Ellipse 223.jpg";
// import meetingRoomImage1 from "../assets/pic1.jpg";
// import meetingRoomImage2 from "../assets/Pic2.jpg";
// import meetingRoomImage3 from "../assets/pic3.jpg";
// import meetingRoomImage4 from "../assets/pic1.jpg";
// import meetingRoomImage5 from "../assets/Pic2.jpg";
// import meetingRoomImage6 from "../assets/pic3.jpg";

// const Home = () => {
//   return (
//     <Container className="home-container">
//       <Row>
//         <Col>
//           <img src={buildingImage} alt="Building" className="img-fluid" />
//         </Col>
//       </Row>
//       <Row className="mt-3">
//         <Col md={10}>
//           <Card className="overlay-card mx-5">
//             <Card.Body>
//               <Card.Title>Hello Sriram, Welcome to</Card.Title>
//               <Card.Text>
//                 <b>Rattha Tek Meadows, Chennai</b>
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//       <Row className="mt-3">
//         <Col md={7}>
//           <Card className="nothing-card">
//             <Card.Body>
//               <Card.Title>
//                 <img src={calImage} alt="" />
//                 Nothing Upcoming!
//               </Card.Title>
//               <Card.Text>
//                 Any upcoming bookings and guests will appear here
//               </Card.Text>
//               <div className="booking-links">
//                 <img src={doorImage} alt=""/>
//                 <Button variant="link" as={Link} to="/bookroom">
//                   Book a room
//                 </Button>
//                 <img src={deskChairImage} alt=""/>
//                 <Button variant="link" as={Link} to="/bookdesk">
//                   Book a desk
//                 </Button>
//               </div>
//             </Card.Body>
//           </Card>
//           <Card className="meeting-rooms-card mt-3">
//             <Card.Body>
//               <Card.Title>Meeting rooms available right now</Card.Title>
//               <Button variant="link" as={Link} to="/view-rooms">
//                 View all rooms
//               </Button>
//               <Row className="meeting-rooms">
//                 <Col md={4} className="meeting-room">
//                   <img src={meetingRoomImage1} alt="Meeting Room 1" />
//                   <p>Spring 4Pax</p>
//                 </Col>
//                 <Col md={4} className="meeting-room">
//                   <img src={meetingRoomImage2} alt="Meeting Room 2" />
//                   <p>Sunrise</p>
//                 </Col>
//                 <Col md={4} className="meeting-room">
//                   <img src={meetingRoomImage3} alt="Meeting Room 3" />
//                   <p>Sunset</p>
//                 </Col>
//               </Row>

//             </Card.Body>
//           </Card>
//           <Card>
//             <Card.Body>
//             <Card.Title>Upcoming events at kanini,chennai</Card.Title>
//               <Button variant="link" as={Link} to="/view-rooms">
//                 View all rooms
//               </Button>
//           <Row className="meeting-rooms">
//               <Col md={4} className="meeting-room">
//                   <img src={meetingRoomImage4} alt="Meeting Room 4" />
//                   <p>Soft Skills Training</p>
//                   <p>12th July 2022,10.00am-12.00pm</p>
//                 </Col>
//                 <Col md={4} className="meeting-room">
//                   <img src={meetingRoomImage5} alt="Meeting Room 5" />
//                   <p>Yoga Day</p>
//                   <p>14th July 2022 3.00am-5.00pm</p>
//                 </Col>
//                 <Col md={4} className="meeting-room">
//                   <img src={meetingRoomImage6} alt="Meeting Room 6" />
//                   <p>Soft Skills Training</p>
//                   <p>12th July 2022 10.00am-11.00pm</p>
//                 </Col>
//               </Row>
//               </Card.Body>
//           </Card>
//         </Col>
//         <Col md={5}>
//           <Card className="events-card">
//             <Card.Body>
//               <Card.Title>
//                 <img src={calendarImage} alt=""/>
//                 Events happening at Chennai today
//               </Card.Title>
//               <Card.Text>
//                 <p>Family day in chennai faculty</p>
//                 <Button variant="link">View Details</Button>
//                 <hr />
//               </Card.Text>
//             </Card.Body>
//             <Card.Body>
//               <Card.Title>
//                 <img src={calendarImage} alt=""/>Events happening at Chennai today
//               </Card.Title>
//               <Card.Text>
//                 <p>Family day in chennai faculty</p>
//                 <Button variant="link">View Details</Button>
//               </Card.Text>
//             </Card.Body>
//           </Card>
//           <Card className="notifications-card mt-3">
//             <Card.Body>
//               <Card.Title>Notifications</Card.Title>
//               <Card.Text>
//                 <img src={ellipseImage} alt="Notification Icon" />
//                 Added capacity in Kanini, Pune office<br />HR Admin
//               </Card.Text>
//               <Button variant="link">View Details</Button>

//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Home;
import React from "react";
import { Container, Card, Button, Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
import buildingImage from "../assets/rak.png";
import calImage from "../assets/cal.png";
import doorImage from "../assets/door (1) 1.png";
import deskChairImage from "../assets/desk-chair 1.png";
import calendarImage from "../assets/calendar.jpg";
import ellipseImage from "../assets/Ellipse 223.jpg";
import meetingRoomImage1 from "../assets/Dotnet.jpg";
import meetingRoomImage2 from "../assets/Winter.jpg";
import meetingRoomImage3 from "../assets/spring.jpg";
// import eventImage1 from "../assets/pic1.jpg";
// import eventImage2 from "../assets/pic2.jpg";

const Home = () => {
  return (
    <Container className="home-container">
      <Row>
        <Col>
          <img src={buildingImage} alt="Building" className="img-fluid" />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={10}>
          <Card className="overlay-card mx-5">
            <Card.Body>
              <Card.Title>Hello Sriram, Welcome to</Card.Title>
              <Card.Text>
                <b>Rattha Tek Meadows, Chennai</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={7}>
          <Card className="nothing-card">
            <Card.Body>
              <Card.Title>
                <img src={calImage} alt="" />
                Nothing Upcoming!
              </Card.Title>
              <Card.Text>
                Any upcoming bookings and guests will appear here
              </Card.Text>
              <div className="booking-links">
                <img src={doorImage} alt="" />
                <Button variant="link" as={Link} to="/bookroom">
                  Book a room
                </Button>
                <img src={deskChairImage} alt="" />
                <Button variant="link" as={Link} to="/bookdesk">
                  Book a desk
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="mt-3">
            <Card.Body className="MeetRooms">
              <Card.Title>Meeting rooms available right now</Card.Title>
              <Button variant="link" as={Link} to="/view-rooms">
                View all rooms
              </Button>
              <Carousel className="mt-3">
                <Carousel.Item>
                  <Row className="meeting-rooms">
                    <Col md={4} className="meeting-room">
                      <Card className="meeting-room-card">
                        <Card.Img
                          variant="top"
                          src={meetingRoomImage1}
                          className="meeting-room-image"
                        />
                        <Card.Body>
                          <Card.Title>Conference Room:</Card.Title>
                          <Card.Text>
                            <div className="room-info">
                              <p>Spring 4Pax</p>
                            </div>
                          </Card.Text>
                          <div><img src="adminnum.jpg"/>
                          <img src="tv.jpg"/>
                          <img src="white.jpg"/></div>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={4} className="meeting-room">
                      <Card className="meeting-room-card">
                        <Card.Img
                          variant="top"
                          src={meetingRoomImage2}
                          className="meeting-room-image"
                        />
                        <Card.Body>
                          <Card.Title>Conference Room:</Card.Title>
                          <Card.Text>
                            <div className="room-info">
                              <p>Sunrise</p>
                            </div>
                          </Card.Text>
                          <div><img src="adminnum.jpg"/>
                          <img src="tv.jpg"/>
                          <img src="white.jpg"/></div>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={4} className="meeting-room">
                      <Card className="meeting-room-card1">
                        <Card.Img
                          variant="top"
                          src={meetingRoomImage3}
                          className="meeting-room-image"
                        />
                        <Card.Body>
                          <Card.Title>Conference Room:</Card.Title>
                          <Card.Text>
                            <div className="room-info">
                              <p>Sunset</p>
                            </div>
                          </Card.Text>
                          <div><img src="adminnum.jpg"/>
                          <img src="tv.jpg"/>
                          <img src="white.jpg"/></div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Carousel.Item>
              </Carousel>
            </Card.Body>
          </Card>
          <Card className="mt-3">
            <Card.Body className="Upevents">
              <Card.Title>Upcoming events at kanini,chennai</Card.Title>
              <Button variant="link" as={Link} to="/view-rooms">
                View all rooms
              </Button>
              <Carousel className="mt-3">
                <Carousel.Item>
                  <Row className="meeting-rooms">
                    <Col md={4} className="meeting-room">
                      <Card className="meeting-room-card">
                        <Card.Img
                          variant="top"
                          src={meetingRoomImage1}
                          className="meeting-room-image"
                        />
                        <Card.Body>
                          <Card.Title>Soft Skills Training</Card.Title>
                          <Card.Text>
                            <div className="room-info">
                              <p>12 July 2022,10.00am-12.00pm</p>
                            </div>{" "}
                            <Button
                              variant="link"
                              style={{ border: "1px solid  rgba(81, 98, 246, 1)" }}
                              
                            >
                              View Events Details
                            </Button>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={4} className="meeting-room">
                      <Card className="meeting-room-card">
                        <Card.Img
                          variant="top"
                          src={meetingRoomImage2}
                          className="meeting-room-image"
                        />
                        <Card.Body>
                          <Card.Title>Yoga Day</Card.Title>
                          <Card.Text>
                            <div className="room-info">
                              <p>12 July 2022,10.00am-12.00pm</p>
                            </div>
                          </Card.Text>
                          <Button
                            variant="link"
                            style={{ border: "1px solid  rgba(81, 98, 246, 1)" }}
                          >
                            View Events Details
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={4} className="meeting-room">
                      <Card className="meeting-room-card1">
                        <Card.Img
                          variant="top"
                          src={meetingRoomImage3}
                          className="meeting-room-image"
                        />
                        <Card.Body>
                          <Card.Title>Soft Skills Training</Card.Title>
                          <Card.Text>
                            <div className="room-info">
                              <p>12 July 2022,10.00am-12.00pm</p>
                            </div>
                          </Card.Text>
                          <Button
                            variant="link"
                            style={{ border: "1px solid  rgba(81, 98, 246, 1)" }}
                          >
                            View Events Details
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Carousel.Item>
              </Carousel>
            </Card.Body>
          </Card>
        </Col>
        <Col md={5}>
          <Card className="events-card">
            <Card.Body>
              <Card.Title>Events happening at Chennai today</Card.Title>
              <Card.Title>
                <img src={calendarImage} alt="" />
                Family day in chennai faculty
              </Card.Title>
              <Card.Text>10.00AM-6.00PM</Card.Text>
              <Button variant="link" style={{ border: "1px solid #ECECEC" }}>
                View Details
              </Button>
              <hr />
            </Card.Body>
            <Card.Body>
              <Card.Title>
                <img src={calendarImage} alt="" /> Family day in chennai faculty
              </Card.Title>
              <Card.Text>10.00AM-6.00PM</Card.Text>
              <Button variant="link" style={{ border: "1px solid #ECECEC" }}>
                View Details
              </Button>
            </Card.Body>
          </Card>
          <Card className="notifications-card mt-3">
            <Card.Body>
              <Card.Title>Notifications</Card.Title>
              <Card.Title>
                <img src={ellipseImage} alt="Notification Icon" /> Added
                capacity in Kanini, Pune office
              </Card.Title>
              <Card.Text> HR Admin</Card.Text>
              <Button style={{ border: "1px solid #ECECEC" }}>
                View Details
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
