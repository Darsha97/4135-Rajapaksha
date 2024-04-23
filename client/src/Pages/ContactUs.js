 
import { Button, Input ,Form} from 'antd';
import React,{Component} from 'react';  
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
 

 

class  ContactUs extends Component {

 
    constructor(props) {
      super(props);
 
      this.state = {
        fullName: "",
        email: "",
        message: ""
      };
    }
  
    handleInputChange = (e) => {
      const { name, value } = e.target;
      this.setState({
        [name]: value
      });
    }
  
    onSubmit = async (values) => {
      const {
        fullName, email, message
      } = values;
  
      const data = {
        fullName,
        email,
        message
      };
 
      try {
        const res = await axios.post("http://localhost:8090/", data);
        if (res.data.success) {

         
           
          this.setState({
            fullName: "",
            email: "",
            message: "",
          });
         
        }

        alert("Detail Updated Successfully");
       
  
      } catch (error) {
        console.error(error);
      }
    }
 
render(){
  const linkStyle = {
    margin: '20px',
    marginTop: '50px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '20px',
    color: 'inherit',
  };

  const imageStyle = {
    width: '80px',
    height: '80px',
    paddingTop: '10px',
  };

  const headerStyle = {
    height: '100px',
    background: 'linear-gradient(to bottom, #0074d9, white)',
    borderRadius: '20% 20% 0 0',
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

  const columnStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    marginBottom: '50px',
    paddingLeft: '50px',
    paddingRight: '50px',
  };

  const contactInfoStyle = {
    flex: '1',
    marginRight: '20px',
    padding: '20px',
    backgroundColor: 'lightgray',
    borderRadius: '10px',
  };

  const contactFormStyle = {
    flex: '1',
    padding: '20px',
    backgroundColor: 'lightgray',
    borderRadius: '10px',
  };

  return (
    <div>
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

      {/* Contact Us Page Content */}
      <section className="section">
        <div className="container">
          <div style={titleStyle}>
            <h1>Contact Us</h1>
          </div>

          {/* Two-Column Layout */}
          <div style={columnStyle}>
            {/* First Column - Contact Info */}
            <div style={contactInfoStyle}>
              <h2>Contact Information</h2>
              <div>
                <img src='/images/image_14.png' alt='Phone' style={imageStyle} /> Phone: +1234567890
              </div>
              <div>
                <img src='/images/image_15.png' alt='E-mail' style={imageStyle} /> Email: example@example.com
              </div>
              <div>
                <img src='/images/image_16.png' alt='Location' style={imageStyle} /> Address: 123 Street, City, Country
              </div>
            </div>
            <Form name="appointment" onFinish={this.onSubmit} >
              <Form.Item
                name="fullName"
                 
              >
                <Input placeholder="Full Name" />
              </Form.Item>
              <Form.Item
                name="email"
           
              >
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item
                name="message"
             
              >
                <Input.TextArea placeholder="Comment or Message" autoSize={{ minRows: 3, maxRows: 6 }} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Send
                </Button>
              </Form.Item>
            </Form>
          </div>
         </div>
      </section>
    </div>
  );
}
}

export default ContactUs;