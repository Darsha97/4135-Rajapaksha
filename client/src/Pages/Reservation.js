import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Button, Input, Form, Select, DatePicker, Row, Col } from 'antd';
import axios from 'axios';
import image1 from '../Images/image_E.jpg';

const { Option } = Select;

export default class Reservation extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef(); // Create a ref for the form
    this.state = {
      fullname: "",
      email: "",
      phonenumber: "",
      vehicaletype: "",
      vehicalenumber: "",
      selectservice: "",
      branch: "",
      fromdate: null,
      comments: ""
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
      fullname, email, phonenumber, vehicaletype, vehicalenumber, selectservice, branch, fromdate, comments
    } = values;

    const data = {
      fullname,
      email,
      phonenumber,
      vehicaletype,
      vehicalenumber,
      selectservice,
      branch,
      fromdate: fromdate.format(), // If 'fromdate' is a Moment.js object, format it
      comments
    };
    // console.log(data);
    try {
      const res = await axios.post("http://localhost:8090/post", data);
      if (res.data.success) {
        // Reset the form using the ref
        this.formRef.current.resetFields();
       
      }
      alert("Post Updated Successfully");

    } catch (error) {
      console.error(error);
    }
  }

  render() {
    // Styles

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
  
    const headerStyle = {
      height: '100px',
      //background: 'linear-gradient(to bottom, #0074d9, white)',
      //borderRadius: '20% 20% 0 0'
    };

    
  const linkStyle = {
    margin: '20px',
    marginTop: '50px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '20px',
    color: 'inherit',
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
         
          </div>
        </header>

        {/* Contact Us Page Content */}
        <section className="section">
          <div className="container">
            <div style={titleStyle}>
              <h1>Appointment Reservation</h1>
            </div>
            <Form name="appointment" onFinish={this.onSubmit} ref={this.formRef}>
            <Row gutter={16}>
                {/* First Column - Contact Info */}
                <Col span={12}>
                  <div style={contactInfoStyle}>
                    {/* Labels and Input Fields */}
                    <Form.Item name="fullname" label="Full Name">
                      <Input name="fullname" onChange={this.handleInputChange} />
                    </Form.Item>
                    <Form.Item name="email" label="Email">
                      <Input name="email" onChange={this.handleInputChange} />
                    </Form.Item>
                    <Form.Item name="phonenumber" label="Phone Number">
                      <Input name="phonenumber" onChange={this.handleInputChange} />
                    </Form.Item>
                    <Form.Item name="vehicaletype" label="Vehicle Type">
                      <Input name="vehicaletype" onChange={this.handleInputChange} />
                    </Form.Item>
                    <Form.Item name="vehicalenumber" label="Vehicle Number">
                      <Input name="vehicalenumber" onChange={this.handleInputChange} />
                    </Form.Item>
                  </div>
                </Col>

           
                <Col span={12}>
                  <div style={contactInfoStyle}>
                    {/* Labels and Input Fields */}
                    <Form.Item name="selectservice" label="Select Service">
                      <Select
                        name="selectservice"
                        onChange={(value) => this.setState({ selectservice: value })}
                      >
                        <Option value="service1">Service 1</Option>
                        <Option value="service2">Service 2</Option>
                        <Option value="service3">Service 3</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item name="branch" label="Branch">
                      <Input name="branch" onChange={this.handleInputChange} />
                    </Form.Item>
                    <Form.Item name="fromdate" label="Date/Time">
                      <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" name="fromdate"
                        onChange={(date, dateString) => this.setState({ fromdate: dateString })} />
                    </Form.Item>
                    <Form.Item name="comments" label="Anything else?">
                      <Input.TextArea rows={4} name="comments" onChange={this.handleInputChange} />
                    </Form.Item>
                  </div>
                </Col>
              </Row>


              <div style={{ textAlign: 'center' }}>
                {/* Submit Button */}
                <Button type="primary" htmlType="submit"
                  style={{
                    backgroundColor: '#0074d9',
                    fontWeight: 'bold',
                    borderRadius: '10px',
                    color: 'white',
                    marginTop: '20px'
                  }}
                >
                  <i className='far fa-check-square'></i> &nbsp;Get Appointment
                </Button>
                
              </div>
            </Form>












          </div>
        </section>
      </div>
    );
  }
}
