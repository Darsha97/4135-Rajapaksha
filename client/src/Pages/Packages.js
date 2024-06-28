import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import React from 'react';
import image1 from '../Images/image_E.jpg';


function Packages() {
  const navigate = useNavigate(); // Get the history object

  const bookNow = () => {
    // Redirect to the "/reservation" page when the button is clicked
    navigate('/reservation');
  };

  const pageStyle = {
    background: `url(${image1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  };


  const linkStyle = {
    margin: '20px',
    marginTop: '50px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '20px',
    color: 'inherit',
  };

  const headerStyle = {
    height: '100px',
    //background: 'linear-gradient(to bottom, #0074d9, white)',
    //borderRadius: '20% 20% 0 0',
  };

  const book_now = {
    margin: '20px',
    marginRight: '50px',
    marginTop: '10px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '20px',
    color: 'inherit',
    float: 'right',
    paddingBottom: '35px',
  };

  const titleStyle = {
    paddingLeft: '50px',
    fontSize: '40px',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: '20px',
    textAlign: 'left',
    
  };

  const cardRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    padding: '10px',
    marginBottom: '50px',
  };

  const cardStyle = {
    width: 'calc(25% - 10px)', // 25% width with some spacing
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  };

  const lightBlueCardStyle = {
    ...cardStyle,
    backgroundColor: 'lightblue',
  };

  const lightPurpleCardStyle = {
    ...cardStyle,
    backgroundColor: 'lightgray',
    marginTop: '-40px', // Position the second and fourth cards 20px higher
  };

  return (
    <div style={pageStyle}>
      {/* Blue Area at the Top */}
      <header style={headerStyle}>
        <div className="container">
          <Link to="/" className="navbar-item" style={linkStyle}>
            Home
          </Link>
          <Link to="/about" className="navbar-item" style={linkStyle}>
            About Us
          </Link>
          <Link to="/services" className="navbar-item" style={linkStyle}>
            Services
          </Link>
          
          <Link to="/packages" className="navbar-item" style={linkStyle}>
            Packages
          </Link>
          <Link to="/contact" className="navbar-item" style={linkStyle}>
            Contact Us
          </Link>
          <Button type="primary" danger style={book_now} onClick={bookNow}>
            BOOK NOW
          </Button>
        </div>
      </header>

      {/* Packages Page Content */}
      <section className="section">
      <div style={{titleStyle, marginTop:'-20px'}}>
            {/* First Row */}
            <h1>Service Packages</h1>
          </div>
        <div className="container">
         

          {/* Card Row */}
          <div style={cardRowStyle}>
            <div style={lightBlueCardStyle}>
              {/* Content for the first card */}
              <h2>Econo Plus</h2>
            <h4 style={{color:'blue'}}>INCLUDES:</h4>
            <ul>
              <li>Oil & Filter change along with filter inspection</li>
              <li>Preventive Maintenance</li>
              <li>Wash & Vacuum</li>
              <li>Aubrite Top Goss Liquid Wax</li>
              <li>Inspection Report -17 points</li>
            </ul>
            <p> </p>
            <h4 style={{color:'blue'}}>VALUE ADDITIONS:</h4>
            <ul>
              <li>Battery Test Report</li>
              <li>Scan Report</li>
              <li>Battery Terminal Protector and Door Hinge treatment</li>
            </ul>
            </div>
            <div style={lightPurpleCardStyle}>
              {/* Content for the second card */}
              <h2>Auto Service Plus </h2>
              <h4 style={{color:'blue'}}>INCLUDES:</h4>
              <ul>
                <li>Oil & Filter change along with filter inspection</li>
                <li>Preventive Maintenance</li>
                <li>Wash & Vacuum</li>
                <li>Aubrite Top Goss Liquid Wax</li>
                <li>Inspection Report -17 points</li>
              </ul>
              <p> </p>
              <h4 style={{color:'blue'}}>VALUE ADDITIONS:</h4>
              <ul>
                <li>Battery Test Report</li>
                <li>Scan Report</li>
                <li>Battery Terminal Protector and Door Hinge treatment</li>
              </ul>
            </div>
            <div style={lightBlueCardStyle}>
              {/* Content for the third card */}
              <h2>Euro Total Plus </h2>
              <h4 style={{color:'blue'}}>INCLUDES:</h4>
              <ul>
                <li>Oil & Filter change along with filter inspection</li>
                <li>Preventive Maintenance</li>
                <li>Wash & Vacuum</li>
                <li>Aubrite Top Goss Liquid Wax</li>
                <li>Inspection Report -17 points</li>
              </ul>
              <p> </p>
              <h4 style={{color:'blue'}}>VALUE ADDITIONS:</h4>
              <ul>
                <li>Battery Test Report</li>
                <li>Scan Report</li>
                <li>Battery Terminal Protector and Door Hinge treatment</li>
              </ul>
            </div>
            <div style={lightPurpleCardStyle}>
              {/* Content for the fourth card */}
              <h2>Total Care Plus</h2>
              <h4 style={{color:'blue'}}>INCLUDES:</h4>
              <ul>
                <li>Oil & Filter change along with filter inspection</li>
                <li>Preventive Maintenance</li>
                <li>Wash & Vacuum</li>
                <li>Aubrite Top Goss Liquid Wax</li>
                <li>Inspection Report -17 points</li>
              </ul>
              <p> </p>
              <h4 style={{color:'blue'}}>VALUE ADDITIONS:</h4>
              <ul>
                <li>Battery Test Report</li>
                <li>Scan Report</li>
                <li>Battery Terminal Protector and Door Hinge treatment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Packages;
