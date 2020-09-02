import React, { Component } from "react";
import { Row, Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import ProjectCarousel from "./ProjectsCarouselComponent";
import { carousel } from "../shared/projectCarousel";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      projectIndex: null,
      carousel: carousel,
    };
  }

  toggleModal = (project) => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      projectIndex: project.id,
    });
  };

  render() {
    const RenderCard = ({ projectList }) => {
      return (
        <>
          {projectList.map((project) => {
            return (
              <div className="col-6 col-md-6 p-0 mx-0 content" key={project.id}>
                <div className="content-overlay"></div>
                <img className="content-image" src={project.img} alt={project.alt} width="100%" height="50%" />
                <div className="content-details fadeIn-top">
                  <h3>{project.title}</h3>
                  <p>{project.lang}</p>
                  <Button onClick={() => this.toggleModal(project)} className="btn btn-outline-info">
                    Learn More
                  </Button>
                </div>
              </div>
            );
          })}
          <RenderModal projectList={this.props.projectList} />
        </>
      );
    };

    // const RenderModalImages = ({ carousel }) => {
    //   return (
    //     <>
    //       {carousel
    //         .filter((img) => {
    //           return img.index === this.state.projectIndex;
    //         })
    //         .map((img) => {
    //           return (
    //             <>
    //               <div className="col-3 p-0">
    //                 <a className="lightbox" href={img.alt}>
    //                   <img src={img.img} alt={img.alt} width="100%" />
    //                 </a>
    //               </div>
    //               <div className="col lightbox-target" id={img.alt}>
    //                 <img src={img.img} alt={img.alt} width="100%" />
    //                 <a className="lightbox-close" href="#"></a>
    //               </div>
    //             </>
    //           );
    //         })}
    //     </>
    //   );
    // };

    const RenderModal = ({ projectList }) => {
      return (
        <>
          {projectList
            .filter((project) => {
              return project.id === this.state.projectIndex;
            })
            .map((project) => {
              return (
                <Modal fade isOpen={this.state.isModalOpen} toggle={this.toggleModal} className="modal-lg" key={project.id}>
                  <ModalHeader className="p-0">
                    {/* <Row className="d-flex justify-content-center">
                      <RenderModalImages carousel={this.state.carousel} />
                    </Row> */}
                    <ProjectCarousel projectIndex={this.state.projectIndex} carousel={this.state.carousel} />
                  </ModalHeader>
                  <ModalBody>
                    <div className="container">
                      <Row>
                        <div className="col">
                          <h1>{project.title}</h1>
                          <h4 className="text-secondary">{project.desc}</h4>
                          <p className="text-secondary">Primary dev tools: {project.lang}</p>
                        </div>
                      </Row>
                      <hr />
                      <Row>
                        <div className="col">
                          <p>{project.par}</p>
                        </div>
                      </Row>
                      <Row>
                        <div className="col">
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            {" "}
                            <Button className="btn btn-outline-info">See on GitHub</Button>
                          </a>
                        </div>
                      </Row>
                    </div>
                  </ModalBody>
                </Modal>
              );
            })}
        </>
      );
    };
    return (
      <>
        <div className="container">
          <div className="row row-content" id="projects">
            <div className="col d-flex justify-content-center">
              <u>
                <h1 className="mb-5">Projects</h1>
              </u>
            </div>
          </div>
          <Row className="d-flex justify-content-center">
            <RenderCard projectList={this.props.projectList} />
          </Row>
        </div>
      </>
    );
  }
}

export default Projects;
