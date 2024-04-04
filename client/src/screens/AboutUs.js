import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button} from 'antd';
import image1 from '../Images/image_E.jpg';

function AboutUs() {
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

  const containerStyle = {
    margin: '0px',
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
  
  const centerContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '50px',
    minHeight: 'calc(100vh - 150px)', // Adjust the value as needed
  };

  const titleStyle = {
    fontSize: '40px',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: '20px',
    textAlign: 'left',
  };
  
  const rowStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '20px',
  };
  
  const columnStyle = {
    flex: '1',
    marginRight: '20px',
  };
  
  const imageStyle = {
    width: '100%', // Make the image fill its container
    height: 'auto', // Maintain aspect ratio
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
          <Link to="/branches" className="navbar-item" style={linkStyle}>
            Branches
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

    {/* Your About Us Page Content */}
    <section className="section">
      <div className="container" style={containerStyle}>
        <div style={centerContentStyle}>

          {/* First Row */}
          <div style={titleStyle}>About Us Autocare Oasis</div>

          {/* Second Row */}
          <div style={rowStyle}>
            <div style={{...columnStyle,  paddingRight: '10px', width: '400px', height: '320px', padding: '40px',  backgroundColor: 'rgba(128, 128, 128, 0.8)', borderRadius: '20px', boxShadow: '2px 2px 10px 1px'}}>
              {/* Text in the first column */}
              <p style={{fontSize: '15px', color:'black',fontWeight:'bold'}}>
              Autocare Oasis being Sri Lanka's largest and the best auto service network,
              also has the most diverse service portfolio. Autocare Oasis is your one stop 
              station for all of your maintenance work, repairs, and services. Autocare 
              Oasis 's updated state-of-the-art equipment present at all our sites, powered 
              by our skilled personnel, has a proven track-record of delivering the finest 
              preventive maintenance and care to all our clients this includes expertise in 
              servicing the very latest vehicle types as well. Leveraging our commitment to 
              excellence, we have entered into strategic partnerships with many leading global 
              brands Company, contributing more to our goal of providing our clients with the 
              very best services. 
              </p>
            </div>
            <div style={columnStyle}>
              {/* Image in the second column */}
              <img
                src="/images/image_7.jpg"
                alt="About Us"
                style={imageStyle}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
    </div>
  );
}

export default AboutUs;