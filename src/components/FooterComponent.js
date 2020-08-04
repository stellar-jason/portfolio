import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div className='container'>
            <div className='row'>
              <div className='col d-flex justify-content-center'>
                <a className='btn btn-social-icon btn-linkedin mx-1' target='_blank' href="https://www.linkedin.com/in/jason-weyland-4a3703119/">
                  <i className='fa fa-linkedin text-light'/>
                </a>{" "}
                <a className='btn btn-social-icon btn-github mx-1' target='_blank' href="https://github.com/JWeyland12">
                  <i className='fa fa-github text-light'/>
                </a>{" "}
              </div>
            </div>
            <div className='row d-flex justify-content-center'>
              <text className='text-secondary'>Jason Weyland</text>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;