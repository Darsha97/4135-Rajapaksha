import React from 'react';
import { Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons'; // Import the Google icon

const SignUp = () => {
  const titleStyle = {
    fontSize: '30px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'left',
  };

  const headerStyle = {
    height: '100px',
    background: 'linear-gradient(to bottom, #0074d9, white)',
    borderRadius: '20% 20% 0 0',
  };

  const signInStyle = {
    backgroundColor: 'gray',
    fontSize: '20px',
    width: '300px',
    color: 'white',
    marginRight: '20px',
    height: '50px',
  };

  const signUpWithGoogle = () => {
    // Handle signing in with Google
  };

    const signUpWithEmail = () => {
    // Handle signing in with email and password
    };

  return (
    <div>
      {/* ...Header and navigation links... */}
      <header style={headerStyle}></header>
      {/* Page Content */}
      <section className="section">
        <div className="container">
          <div style={titleStyle}>
            <h1>Sign in to AutoCare Oasis</h1>
          </div>

          <div style={{ textAlign: 'center', alignItems:'center' }}>
          {/* Google Sign-In Button */}
          <Button
            type="primary"
            style={signInStyle}
            icon={<GoogleOutlined />}
            onClick={signUpWithGoogle}
          >
            Sign up with Google
          </Button>
          <h4 style={{fontSize: '21px'}}>or</h4>
          <Button
            type="primary"
            style={signInStyle}
            onClick={signUpWithEmail}
          >
            Continue with Email
          </Button>
        </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;