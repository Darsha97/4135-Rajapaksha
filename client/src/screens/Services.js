import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button} from 'antd';
import image1 from '../Images/image_E.jpg';

function Services() {
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
   // borderRadius: '20% 20% 0 0',
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
    minHeight: 'calc(100vh - 150px)',
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
    background: '#d3b8f3', // Light purple background color
    padding: '10px',
    textAlign: 'center',
    borderRadius: '10px',
  };

  const textInColumnStyle = {
    color: 'black',
    fontWeight: 'bold',
  };

  const imageStyle = {
    width: '100',
    height: '150px',
    marginTop: '10px',
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
            <div style={titleStyle}>
              We Provide High Quality and Cost Effective Services
            </div>

            {/* Second Row - Three Columns */}
            <div style={rowStyle}>
              {/* Column 1 */}
              <div style={columnStyle}>
                <div style={textInColumnStyle}>Disk Brakes</div>
                <img src="/images/image_8.jpg" alt="Brake" style={imageStyle} />
              </div>

              {/* Column 2 */}
              <div style={columnStyle}>
                <div style={textInColumnStyle}>Car Painting</div>
                <img src="/images/image_9.jpg" alt="Car Paint" style={imageStyle} />
              </div>

              {/* Column 3 */}
              <div style={columnStyle}>
                <div style={textInColumnStyle}>Battery Change</div>
                <img src="/images/image_10.jpg" alt="Battery Change" style={imageStyle} />
              </div>
            </div>

            {/* Third Row - Three Columns */}
            <div style={rowStyle}>
              {/* Column 1 */}
              <div style={columnStyle}>
                <div style={textInColumnStyle}>Engine Diagnostics</div>
                <img src="/images/image_11.jpg" alt="Engine" style={imageStyle} />
              </div>

              {/* Column 2 */}
              <div style={columnStyle}>
                <div style={textInColumnStyle}>Tyres Replacement</div>
                <img src="/images/image_12.jpg" alt="Tyre Replace" style={imageStyle} />
              </div>

              {/* Column 3 */}
              <div style={columnStyle}>
                <div style={textInColumnStyle}>Oil Change</div>
                <img src="/images/image_13.jpg" alt="Oil Change" style={imageStyle} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;