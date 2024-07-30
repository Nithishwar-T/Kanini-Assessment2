// import React, { useState } from 'react';
// import {Col,Row} from "react-bootstrap"
// import '../App.css';

// const BookDesk = () => {
//   const [location, setLocation] = useState('');
//   const [date, setDate] = useState('');
//   const [colleagues, setColleagues] = useState([]);

//   const handleLocationChange = (e) => {
//     setLocation(e.target.value);
//   };

//   const handleDateChange = (e) => {
//     setDate(e.target.value);
//   };

//   const handleAddColleague = () => {
//     setColleagues([...colleagues, '']);
//   };

//   const handleColleagueChange = (index, e) => {
//     const newColleagues = [...colleagues];
//     newColleagues[index] = e.target.value;
//     setColleagues(newColleagues);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div className="book-desk">
//       <Row>
//       <Col md={6}>
//       <h1>Book a desk</h1>
//       <p>Book a desk for the day to use in the common area of any Kanini location</p>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="location">Location</label>
//           <select id="location" value={location} onChange={handleLocationChange}>
//             <option value="">Select a location</option>
//             <option value="Futura, Pune">Futura, Pune</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="date">Date</label>
//           <input type="date" id="date" value={date} onChange={handleDateChange} />
//         </div>
//         <div className="form-group colleagues">
//           <label>Add Colleagues</label>
//           {colleagues.map((colleague, index) => (
//             <input
//               key={index}
//               type="text"
//               placeholder={`Colleague ${index + 1}`}
//               value={colleague}
//               onChange={(e) => handleColleagueChange(index, e)}
//             />
//           ))}
//           <button type="button" onClick={handleAddColleague}>+ Add Colleagues</button>
//         </div>
//         <button type="submit" className="book-desk-button">Book a desk</button>
//         <p className="desks-available">19 desks available</p>
//       </form>
      

//       </Col>
//       <Col md={5}>
//       <img src="pic.rattha.jpg" alt="" className="building-image" />

//       </Col>
    
      
    
//       </Row>
//     </div>
    
//   );
// };

// export default BookDesk;




import React from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import '../App.css';

const Bookdesk = () => {
  return (
    <Container className="bookdesk-container">
      <Row>
        <Col md={7}>
          <h1>Book a Desk</h1>
          <p className="light-text">Book a desk for the day to use in the common area of any Kanini location</p>
          <Form>
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="formLocation">
                  <Form.Label>Location</Form.Label>
                  <Form.Control as="select">
                    <option>Futura, Pune</option>
                    <option>Kanini, Bangalore</option>
                    <option>Kanini, Chennai</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formDate">
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
            </Row>
            <div className="add-colleagues-text">
              <i className="fas fa-plus-circle"></i> Add Colleagues
            </div>
            <Button variant="primary" className="book-desk-button mt-3">Book a Desk</Button>
          </Form>
        </Col>
        <Col md={5}>
          <Card className="image-card">
            <Card.Img variant="top" src="Ratha.jpg" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Bookdesk;