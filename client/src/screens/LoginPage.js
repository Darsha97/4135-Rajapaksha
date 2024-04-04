import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ico from "../Images/image_B.jpg";
 

const LoginPage = () => {
  const pageStyle = {
    background: `url(${ico})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    
  };

 
  

  return (
    <div className="container " style={pageStyle}>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '150px' }}>
          <h1 style={{ fontSize: '120px', color: 'black', fontWeight: 'bold', textShadow: '-10px 5px 12px white', textAlign: 'center' }}>
            Welcome to<span style={{ color: 'red' }}><strong>AUTOCARE OASIS</strong></span>
          </h1>
        </div>
       

        <div>
          <div style={{ paddingTop: '100px' }} >
            <Link to="/loginuser" className="me-2">
              <button className="btn btn-primary" style={{   margin: '90px 50px 0px 0px', backgroundColor: 'green', borderBlockColor: 'green', fontSize: '15px', padding: '5px 80px' }}>
                Login as Machanic
              </button>
            </Link>
          </div>
          <div>
            <Link to="/loginuser">
              <button className="btn btn-primary"
                style={{  margin: '10px 50px 0px 0px', backgroundColor: 'green', borderBlockColor: 'green', fontSize: '15px', padding: '5px 80px' }}>
                Login as User
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
