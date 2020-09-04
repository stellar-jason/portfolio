import React, { Component } from "react";
import { Row, Nav, NavItem, NavLink } from "reactstrap";

class About extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row" id="about">
            <div className="col d-flex justify-content-center">
              <u>
                <h1 className="mb-5">About</h1>
              </u>
            </div>
          </div>
          <Row>
            <div className="col-12 col-lg-7 d-flex justify-content-center">
              <img src="assets/images/portrait.jpg" alt="Portrait" width="50%" height="auto" style={{ borderRadius: "10%" }} />
            </div>
            <div className="col-12 col-lg-5">
              <h2 className='d-flex justify-content-center justify-content-lg-start'>Hi, I'm Jason. Nice to meet you.</h2>
              <p className='d-flex justify-content-center justify-content-lg-start'>
                Since my introduction into web development, I've become fascinated with the art of creating websites. Having experience in both front and back end development, I'm confident in my ability to actively contribute to your project. I'm strongly self-motivated to work diligently in
                creating the product of your dreams. My history of striving for excellence will ensure nothing but the best.
              </p>
            </div>
            <Row className="col d-flex justify-content-center mt-3">
              <div>
                <Nav>
                  <NavItem>
                    <NavLink href="https://www.linkedin.com/in/jason-weyland-4a3703119/" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-linkedin" /> LinkedIn
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/JWeyland12" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-github" /> GitHub
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="assets/files/Jason Weyland Resume.pdf" download>
                      <i className="fa fa-file-pdf-o" /> Resume.pdf
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </Row>
          </Row>
        </div>
      </>
    );
  }
}

export default About;
