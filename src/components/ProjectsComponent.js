import React, { Component } from "react";
import { Card, CardImg, CardBody, Row, Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import ProjectCarousel from './ProjectsCarouselComponent';
import {carousel} from '../shared/projectCarousel';


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
              <div className="col-6 col-md-3" key={project.id}>
                <Card style={{ minHeight: "433.8px" }}>
                  <CardImg top src={project.img} alt={project.alt} width="100%" />
                  <CardBody>
                    <h4 className="text-center">{project.title}</h4>
                    <p className="text-center">Primary dev tools: {project.lang}</p>
                    <div className="d-flex justify-content-center">
                      <Button onClick={() => this.toggleModal(project)} className="btn btn-outline-primary">
                        See More
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </div>
            );
          })}
          <RenderModal projectList={this.props.projectList} />
        </>
      );
    };

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
                  <ModalHeader>
                    <ProjectCarousel projectIndex={this.state.projectIndex} carousel={this.state.carousel}/>
                  </ModalHeader>
                  <ModalBody>{project.title} - {project.lang}</ModalBody>
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
          <p>{this.state.projectIndex}</p>
          {console.log(this.state.isModalOpen)}
          <Row>
            <RenderCard projectList={this.props.projectList} />
          </Row>
        </div>
      </>
    );
  }
}

export default Projects;
