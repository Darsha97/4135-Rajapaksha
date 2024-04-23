import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import image1 from '../Images/image_c.jpg';
 

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    this.retrievePosts();

  }
  

  retrievePosts() {
    axios.get("http://localhost:8090/posts").then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts,
        });
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:8090/post/${id}`).then((res) => {
      alert('Delete Successfully');
      this.retrievePosts();
    });
  };
  

  render() {
 


const headerStyle = {
    height: '100px',
   // background: 'linear-gradient(to bottom, #0074d9, white)',
   // borderRadius: '20% 20% 0 0'
  };

  
const linkStyle = {
  margin: '20px',
  marginTop: '50px',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '20px',
  color: 'white',
};

  const titleStyle = {
    paddingLeft: '50px',
    fontSize: '40px',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: '20px',
    textAlign: 'left'
  };

  const contactInfoStyle = {
    flex: '1',
    marginRight: '20px',
    padding: '20px',
    paddingLeft: '30px',
    backgroundColor: 'lightgray',
    borderRadius: '10px'
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

  return (
    <div  style={pageStyle}>
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
       
        </div>
      </header>





    <section className="section">
    <h1 className="col-lg-9 mt-2 mb-2" style={{ fontSize: '50px', marginLeft:'50px',color: 'black', fontWeight: 'bold', textShadow: '-10px 5px 12px white', textAlign: 'center' }}>Appointment Details</h1>
    <table style={{ width: '1200px', height: '340px', padding: '40px', backgroundColor: 'rgba(255, 165, 10, 0.6)', borderRadius: '20px', boxShadow: '2px 2px 10px 1px' }}>
        <thead>
        <tr  >
            <th scope="col">#</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Vehicle Type</th>
            <th scope="col">Vehicle Number</th>
            <th scope="col">Select Service</th>
            <th scope="col">Branch</th>
            <th scope="col">Date</th>
            <th scope="col">Comments</th>
        </tr>
        </thead>
        <tbody>
        {this.state.posts.map((post, index) => (
            <tr key={index}    
            style={{
            backgroundColor: index % 2 === 0 ? '#f2f2f2' : '#ffffff', color: 'black !important',
            }} >
            <th scope="row">{index + 1}</th>
            <td>{post.fullname}</td>
            <td>{post.email}</td>
            <td>{post.phonenumber}</td>
            <td>{post.vehicletype}</td>
            <td>{post.vehicalenumber}</td>
            <td>{post.selectservice}</td>
            <td>{post.branch}</td>
            <td>{post.date}</td>
            <td>{post.comments}</td>
            <td>
            
                <a className="btn btn-warning" href="#" onClick={() => this.onDelete(post._id)}>
                <i className="far fa-trash-alt"></i>&nbsp;Delete
                </a>
            </td>
            </tr>
        ))}
        </tbody>
    </table>
    </section>
    </div>
);
}
  
}


 