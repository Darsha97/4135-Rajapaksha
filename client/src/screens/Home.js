import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'antd';
import React, { useState, useEffect } from 'react';
import image1 from '../Images/image_J.jpg';
 

function Home() {
  const navigate = useNavigate();

  const bookNow = () => {
    navigate('/reservation');
  };

  // const imageUrls = [image1, image2];
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // // Change the background image at a regular interval
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  //   }, 5000); // Change the image every 5 seconds (5000 milliseconds)

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  // const currentImageUrl = imageUrls[currentImageIndex];
 
 


  // const bigImageStyle = {
  //   background: backgroundImages[currentImageIndex],
   
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'center center',
  //   width: '420px',
  //   height: '350px',
  //   display: 'flex',
  //   position: 'absolute',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginLeft:'300px',
  // };
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
    color: 'black',
    width:'100%',
  };

  const containerStyle = {
    margin: '0px',
  };

  const headerStyle = {
    backgroundColor:'white',
    width:'1220px',
    height: '180px',
    //background: 'linear-gradient(to bottom, white)',
    //borderRadius: '20% 20% 0 0',
  };

  /*const book_now = {
    margin: '20px',
    marginRight: '150px',
    marginTop: '10px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '20px',
    color: 'inherit',
    float: 'right',
  };*/

  const rowStyle = {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '20px',
    whiteSpace: 'normal',
    paddingBottom: '30px',
    
  };

 

  const columnStyle1 = {
    display: 'flex',
    flexDirection: 'column',
  };

  const smallImageStyle = {
    width: '325px',
    height: '250px',
    position:'fixed',
    top:'-80px',
    left:'-50px',
    
 
  };

  const blackButtonStyle = {
    backgroundColor: 'black',
    color: 'white',
    fontWeight: 'bold',
    padding: '10px 40px',
    borderRadius: '10px',
    textDecoration: 'none',
     
  };

  const centerContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 150px)',
  };

  const yellowButtonStyle = {
    backgroundColor: 'yellow',
    color: 'black',
    borderRadius: '50%',
    padding: '10px',
    textDecoration: 'none',
    width: '40px',
    height: '40px',
  };

  const arrowIconStyle = {
    fontSize: '2rem',
  };
 

  return (
    <div  >
    <header style={{headerStyle}}>
        <div className="container" style={{marginLeft:'150px'}}>
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
     
          <Button
       type="primary"
       style={{
       backgroundColor: 'red', // Change the color to your preferred color
       padding: '19px 30px',   // Change the padding for size
       borderRadius: '10px',
       textDecoration: 'none',
       top:'-8px',
       right:'-820px',
       fontWeight:'bold',
        transform: 'translate(-50%, -50%)', // Center the button text
    display: 'flex',
    alignItems: 'center',    // Center text vertically
    justifyContent: 'center',
      
       }}
       onClick={bookNow}
      >
      BOOK NOW
      </Button>

        
        </div>
      </header>

      <section  style={pageStyle}  >
        <div className="container" style={containerStyle}>
          <div style={centerContentStyle}>
            <div style={rowStyle}>
              <div style={columnStyle1}>
                <img
                  style={smallImageStyle }
                  src={"/images/image_2.png"}
                  alt="Logo"
                />
              </div>
            </div>

   
     <div style={{ fontSize:'12px', marginTop: '180px' , color:'white',  fontWeight: 'bold', width: '400px', height: '200px', padding: '40px',  backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: '20px', boxShadow: '2px 2px 10px 1px' }}>
     
        <p style={{ marginLeft: '60px' }}>AutoCare Oasis car service provides</p>
     
        <p style={{ marginLeft: '40px' }}>superior service, cost-effective options, and</p>
    
        <p style={{ marginLeft: '30px' }}>ultra-convenience in an eco-friendly environment</p>

        <div style={{ marginLeft: '100px', marginTop: '10px' }}>
        <Link to="/login" className="button is-primary" style={blackButtonStyle}>
          LOGIN
        </Link>
      </div>
        
     
     
      </div>

    </div>
  </div>
</section>

    </div>
  );
}

export default Home;



 