import React, { Component } from "react";
import { Jumbotron } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <>
        <Jumbotron fluid className='mb-0 pb-5' id='home'>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="text-light">Jason Weyland</h1>
                <h2 className="text-light">Full-Stack Web Developer</h2>
              </div>
            </div>
          </div>
        </Jumbotron>
      </>
    );
  }
}

export default Header;
