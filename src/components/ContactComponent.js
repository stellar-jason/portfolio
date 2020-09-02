import React, { Component } from "react";
import { Row, Form, Label, Button, FormGroup, Input, FormText } from "reactstrap";
import emailjs from "emailjs-com";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_6ij8noc', e.target, 'user_PSjevBR5FnrFl1w9xCBwd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    this.setState({
      name: '',
      email: '',
      message: ''
    })
  };

  render() {
    return (
      <>
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
                    <Input className="form-control" type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} />
                  </div>
                </FormGroup>
                <FormGroup className="form-row">
                  <div className="col">
                    <Label for="email" className="col-form-label">
                      {" "}
                      <strong>Email:</strong>
                    </Label>
                    <Input type="email" className="form-control" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
                  </div>
                </FormGroup>
                <FormGroup className="form-row">
                  <div className="col">
                    <Label for="message" className="col-form-label">
                      <strong>Message:</strong>
                    </Label>
                    <Input type="textarea" className="form-control" id="message" name="message" rows="10" value={this.state.message} onChange={this.handleChange} />
                  </div>
                </FormGroup>
                <div className="col d-flex justify-content-center">
                  <Button type="submit" value="submit" color="info">
                    Submit
                  </Button>
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
