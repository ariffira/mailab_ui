import React from "react";
import mernLogo from "assets/img/project_pics/mern.jpg"
import reactLogo from "assets/img/project_pics/reactjs.jpeg"
import bootstrapLogo from "assets/img/project_pics/bootstrap.jpeg"
import muiLogo from "assets/img/project_pics/mui.png"
import awsLogo from "assets/img/project_pics/aws.png"

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

function Download() {
  return (
    <>
      <section className="section section-lg">
        <Container>
          <Row className="row-grid justify-content-center">
            <Col className="text-center" lg="8">
              <h2 className="display-3">
                Do you have a plan or dream or ideas{" "}
                <span className="text-success">
                  Your satisfaction is my happiness.
                </span>
              </h2>
              <p className="lead">
                You simply provide me your ideas or plan and I will made it done as you want. I am 8+ years experienced Software Engineer. I mainly work on MERN(MONGODB, EXPRESS, REACT, NODE) Stack based software for both desktop and mobile phone apps or website. Here you may see some of my projects and get initial ideas.
              </p>
              <div className="btn-wrapper">
                <Button
                  className="mb-3 mb-sm-0"
                  color="info"
                  href="/my_projects"
                >
                  <i className="fa fa-solid fa-code" />Our Projects
                </Button>
              </div>
              <div className="text-center">
                <h4 className="display-4 mb-5 mt-5">
                  Tech tools I use
                </h4>
                <Row className="justify-content-center">
                  <Col lg="2" xs="4">
                    <a
                      href="https://www.mongodb.com/"
                      id="tooltip255035741"
                      target="_blank"
                    >
                      <img
                        alt="..."
                        className="img-fluid"
                        src={mernLogo} />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip255035741">
                      MERN Stack - Most popular Web developing stack
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="2" xs="4">
                    <a
                      href="https://react.dev/"
                      id="tooltip265846671"
                      target="_blank"
                    >
                      <img
                        alt="..."
                        className="img-fluid"
                        src={reactLogo}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip265846671">
                      REACT.js - The library for web and native user interfaces
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="2" xs="4">
                    <a
                      href="https://getbootstrap.com/"
                      id="tooltip233150499"
                      target="_blank"
                    >
                      <img
                        alt="..."
                        className="img-fluid"
                        src={bootstrapLogo}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip233150499">
                      Bootstrap: Build fast, responsive sites with Bootstrap
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="2" xs="4">
                    <a
                      href="ct?ref=adsr-landing-page"
                      id="tooltip308866163"
                      target="_blank"
                    >
                      <img
                        alt="..."
                        className="img-fluid"
                        src={muiLogo}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip308866163">
                      MUI - Move faster with intuitive React UI tools
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="2" xs="4">
                    <a
                      href="https://aws.amazon.com/de/"
                      id="tooltip76119384"
                      target="_blank"
                    >
                      <img
                        alt="..."
                        className="img-fluid"
                        src={awsLogo}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip76119384">
                      AWS - AMAZON WEB SERVICE(AWS) for deployment and maintenace your software/website
                    </UncontrolledTooltip>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Download;
