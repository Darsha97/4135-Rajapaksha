import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ico from "../Images/image_B.jpg";

const Login = () => {

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

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [allPosts, setAllPosts] = useState([]);
  const [loginError, setLoginError] = useState(null);

  useEffect(() => {
    // Fetch all posts when the component mounts
    async function fetchAllPosts() {
      try {
        const response = await axios.get('http://localhost:8090/posts'); // Assuming you have an API endpoint for fetching all posts
        if (response.data.success) {
          setAllPosts(response.data.existingPosts);
        } else {
          console.error('Failed to fetch posts');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchAllPosts();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email==="admin@gmail.com" && phonenumber==="1234")
    {navigate('/admin')}
    else{
        const user = allPosts.find(
            (post) => post.email === email && post.phonenumber === phonenumber
          );
      
          if (user) {
            // Successful login, navigate to another page
            navigate('/create');
          } else {
            // Failed login, set an error message
            setLoginError('Invalid email or phone number. Please try again.');
          }
    }
    
  };

  return (
    <div style={pageStyle}>
    <div className="container"  style={{ width: '300px', height: '340px', padding: '40px', backgroundColor: 'rgba(255, 165, 10, 0.6)',margin:'100px 400px 100px 450px', borderRadius: '20px', boxShadow: '2px 2px 10px 1px' }}>
      <div className="login-form">
        <h2 style={{ fontWeight: 'bold', margin: '0px 70px 20px 70px' }}>Login Page</h2>
        {loginError && <p className="error-message">{loginError}</p>}
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label className="form-label">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='mb-3'>
            <label className="form-label">Phone Number:</label>
            <input
              type="text"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
              required
            />
          </div>
          <button type="submit" className='btn btn-primary'>Login</button>
          <button className="btn btn-primary" style={{marginLeft:'10px'}} onClick={() => navigate('/loginuser')}>
            Cancel
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
