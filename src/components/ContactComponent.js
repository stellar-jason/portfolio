import React, { Component } from "react";
import { Row, Form, Label, Button, FormGroup, Input, FormFeedback } from "reactstrap";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      touched: {
        name: false,
        email: false,
        message: false,
      },
      isValid: false
    };
  }

  validate = (name, email, message) => {
    const errors = {
      name: "",
      message: "",
      email: "",
    };

    if (this.state.touched.name) {
      if (name.length < 2) {
        errors.name = "Name must be at least 2 characters.";
      }
    }

    if (this.state.touched.message) {
      if (message.length < 10) {
        errors.message = "Message must be at least 10 characters.";
      }
    }

    if (this.state.touched.email && !email.includes("@")) {
      errors.email = "Email should contain a @";
    }

    return errors;
  }

  handleBlur = (field) => () => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value,
    });
    this.checkValidation()
  };

  checkValidation = () => {
    if (this.state.name.length > 2 && this.state.email.includes('@') && this.state.message.length > 10) {
      this.setState({isValid: true})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.isValid) {

      emailjs.sendForm("gmail", "template_6ij8noc", e.target, "user_PSjevBR5FnrFl1w9xCBwd").then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      this.setState({
        name: "",
        email: "",
        message: "",
          touched: {
            name: false,
            email: false,
            message: false
          }
      });
      toast.success('Thank you for your message!')
    } else {
      toast.error('Please fix the form')
    }
  };

  render() {
    const errors = this.validate(this.state.name, this.state.email, this.state.message);
    return (
      <>
      {console.log(this.state.isValid)}
        <div className="container pb-3">
          <div className="row row-content" id="contact">
            <div className="col d-flex justify-content-center">
              <u>
                <h1>Contact</h1>
              </u>
            </div>
          </div>
          <Row className="d-flex justify-content-center">
            <div className="col-8">
              <Form onSubmit={this.handleSubmit}>
                <FormGroup className="form-row">
                  <div className="col">
                    <Label for="name" className="col-form-label">
                      {" "}
                      <strong>Name:</strong>
                    </Label>
                    <Input className="form-control" type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} invalid={errors.name} onBlur={this.handleBlur("name")} />
                    <FormFeedback>{errors.name}</FormFeedback>
                  </div>
                </FormGroup>
                <FormGroup className="form-row">
                  <div className="col">
                    <Label for="email" className="col-form-label">
                      {" "}
                      <strong>Email:</strong>
                    </Label>
                    <Input type="email" className="form-control" id="email" name="email" value={this.state.email} onChange={this.handleChange} invalid={errors.email} onBlur={this.handleBlur("email")} />
                    <FormFeedback>{errors.email}</FormFeedback>
                  </div>
                </FormGroup>
                <FormGroup className="form-row">
                  <div className="col">
                    <Label for="message" className="col-form-label">
                      <strong>Message:</strong>
                    </Label>
                    <Input type="textarea" className="form-control" id="message" name="message" rows="10" value={this.state.message} onChange={this.handleChange} invalid={errors.message} onBlur={this.handleBlur("message")} />
                    <FormFeedback>{errors.message}</FormFeedback>
                  </div>
                </FormGroup>
                <div className="col d-flex justify-content-center">
                  <Button type="submit" value="submit" color="info">
                    Submit
                  </Button>
                  <ToastContainer limit={1} position='bottom-center' closeButton hideProgressBar autoClose={5000}/>
                </div>
              </Form>
            </div>
          </Row>
        </div>
      </>
    );
  }
}

export default Contact;
