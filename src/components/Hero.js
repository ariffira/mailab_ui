import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

function Hero() {
  return (
    <>
      <div className="position-relative">
        {/* Hero for FREE version */}
        <section className="section section-hero section-shaped">
          {/* Background circles */}
          <div className="shape shape-style-1 shape-default">
            <span className="span-150" />
            <span className="span-50" />
            <span className="span-50" />
            <span className="span-75" />
            <span className="span-50" />
            <span className="span-100" />
            <span className="span-75" />
            <span className="span-50" />
            <span className="span-100" />
            <span className="span-50" />
            <span className="span-100" />
            <span className="span-50" />
          </div>
          <Container className="shape-container d-flex align-items-center">
            <div className="col px-0">
              <Row className="align-items-center justify-content-center">
                <Col className="text-center" lg="6">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/favicon/mailab-512x512.png")}
                    style={{ width: "200px", borderRadius: "50%" }}
                  />
                  <p className="lead text-white">
                    Easy Way of Learning by Imagination
                  </p>
                  <div className="btn-wrapper mt-5">
                    <Button
                      className="btn-info btn-icon mb-3 mb-sm-0"
                      href="/my_projects"
                      size="lg"
                    >
                      <span className="btn-inner--icon mr-1">
                        <i className="fa fa-solid fa-code" />
                      </span>
                      <span className="btn-inner--text">Our Projects</span>
                    </Button>{" "}
                    <Button
                      className="btn-success btn-icon mb-3 mb-sm-0"
                      href="/my_tutes"
                      size="lg"
                    >
                      <span className="btn-inner--icon mr-1">
                        <i className="fa fa-solid fa-book" />
                      </span>
                      <span className="btn-inner--text">Tutorials</span>
                    </Button>{" "}
                    <Button
                      className="btn-icon mb-3 mb-sm-0"
                      color="github"
                      href="https://github.com/ariffira"
                      size="lg"
                      target="_blank"
                    >
                      <span className="btn-inner--icon mr-1">
                        <i className="fa fa-github" />
                      </span>
                      <span className="btn-inner--text">
                        <span className="text-warning mr-1">Follow </span>
                        on Github
                      </span>
                    </Button>
                  </div>
                  <div className="mt-5">
                    <small className="text-white font-weight-bold mb-0 mr-2">
                      Created by
                    </small>
                    <a href="/about_me">
                      <img
                        alt="..."
                        className="ml-1"
                        style={{ height: "28px", borderRadius: '50%' }}
                        src={require("assets/img/me/mypic.jpeg")}
                      />
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-white"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;
