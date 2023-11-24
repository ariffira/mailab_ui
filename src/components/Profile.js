import React from "react";
import myData from "../assets/data/myGoal.js"
// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

function Profile() {
  return (
    <>
      <main className="profile-page">
        <section className="section-profile-cover section-shaped my-0">
          {/* Circles background */}
          <div className="shape shape-style-1 shape-default alpha-4">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
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
        <section className="section">
          <Container>
            <Card className="card-profile shadow mt--300">
              <div className="px-4">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={require("assets/img/me/mypic.jpeg")}
                        />
                      </a>
                    </div>
                  </Col>
                  <Col
                    className="order-lg-3 text-lg-right align-self-lg-center"
                    lg="4"
                  >
                    <div className="card-profile-actions py-4 mt-lg-0">
                      <Button
                        className="mr-4"
                        color="info"
                        href="https://www.linkedin.com/in/islammdariful/"
                        size="sm"
                      >
                        Connect  <i className="fa fa-linkedin text-primary" />
                      </Button>
                      <Button
                        className="float-right"
                        color="default"
                        href="/contact_me"
                        size="sm"
                      >
                        <i className="fa fa-envelope" /> Message
                      </Button>
                    </div>
                  </Col>
                  <Col className="order-lg-1" lg="4">
                    <div className="card-profile-stats d-flex justify-content-center">
                      <div>
                        <span className="heading">450+</span>
                        <span className="description">Students</span>
                      </div>
                      <div>
                        <span className="heading">4+</span>
                        <span className="description">
                          <a href="/my_companies">
                            German Companies
                          </a>
                        </span>
                      </div>
                      <div>
                        <span className="heading">89+</span>
                        <span className="description">Projects</span>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="text-center mt-5">
                  <h3>
                    Muhammad Ariful Islam{" "}
                    <span className="font-weight-light">, 34</span>
                  </h3>
                  <div className="h6 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    Essen, Germany
                  </div>
                  <div className="h6 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    {myData.current_position}
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    <a href="https://digitalcareerinstitute.org/">
                      {myData.company}
                    </a>
                  </div>
                </div>
                <div className="mt-5 py-5 border-top text-center">
                  <Row className="justify-content-center">
                    <Col lg="9">
                      <p>
                        {myData.my_objective}
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Card>
            <Row>
              <Col className="text-center mt-5">
                Tech& tools I use:
              </Col>
            </Row>
            <Row>
              <Col className="text-center mt-5">
                <a
                  href="#">
                  <img
                    alt="..."
                    className="ml-1"
                    style={{ height: "40px", borderRadius: '50%' }}
                    src={require("assets/img/project_pics/aws.png")}
                  />
                </a>
                <a
                  href="#">
                  <img
                    alt="..."
                    className="ml-1"
                    style={{ height: "40px", borderRadius: '50%' }}
                    src={require("assets/img/project_pics/mern.jpg")}
                  />
                </a>
                <a
                  href="#">
                  <img
                    alt="..."
                    className="ml-1"
                    style={{ height: "40px", borderRadius: '50%' }}
                    src={require("assets/img/project_pics/mongodb.jpg")}
                  />
                </a>
                <a
                  href="#">
                  <img
                    alt="..."
                    className="ml-1"
                    style={{ height: "40px" }}
                    src={require("assets/img/project_pics/reactjs.jpeg")}
                  />
                </a>
                <a
                  href="#">
                  <img
                    alt="..."
                    className="ml-1"
                    style={{ height: "40px", borderRadius: '50%' }}
                    src={require("assets/img/project_pics/mui.png")}
                  />
                </a>
                <a
                  href="#">
                  <img
                    alt="..."
                    className="ml-1"
                    style={{ height: "40px", borderRadius: '50%' }}
                    src={require("assets/img/project_pics/bootstrap.jpeg")}
                  />
                </a>
                <a
                  href="#">
                  <img
                    alt="..."
                    className="ml-1"
                    style={{ height: "40px", borderRadius: '50%' }}
                    src={require("assets/img/project_pics/js.png")}
                  />
                </a>
                <a
                  href="#">
                  <img
                    alt="..."
                    className="ml-1"
                    style={{ height: "40px" }}
                    src={require("assets/img/project_pics/css3.png")}
                  />
                </a>
                <a
                  href="#">
                  <img
                    alt="..."
                    className="ml-1"
                    style={{ height: "40px" }}
                    src={require("assets/img/project_pics/html5.png")}
                  />
                </a>
                <a
                  href="#">
                  <img
                    alt="..."
                    className="ml-1"
                    style={{ height: "40px" }}
                    src={require("assets/img/project_pics/jquery.png")}
                  />
                </a>
                <a
                  href="#">
                  <img
                    alt="..."
                    className="ml-1"
                    style={{ height: "40px", borderRadius: '50%' }}
                    src={require("assets/img/project_pics/ts.png")}
                  />
                </a>
                <a
                  href="#">
                  <img
                    alt="..."
                    className="ml-1"
                    style={{ height: "40px", borderRadius: '50%' }}
                    src={require("assets/img/project_pics/php.png")}
                  />
                </a>
                <a
                  href="#">
                  <img
                    alt="..."
                    className="ml-1"
                    style={{ height: "40px", borderRadius: '50%' }}
                    src={require("assets/img/project_pics/github.png")}
                  />
                </a>
                <a
                  href="#">
                  <img
                    alt="..."
                    className="ml-1"
                    style={{ height: "40px", borderRadius: '50%' }}
                    src={require("assets/img/project_pics/google.jpeg")}
                  />
                </a>
                <a
                  href="#">
                  <img
                    alt="..."
                    className="ml-1"
                    style={{ height: "40px" }}
                    src={require("assets/img/project_pics/jira.png")}
                  />
                </a>
                <a
                  href="#">
                  <img
                    alt="..."
                    className="ml-1"
                    style={{ height: "40px" }}
                    src={require("assets/img/project_pics/vscode.jpeg")}
                  />
                </a>
                <a
                  href="#">
                  <img
                    alt="..."
                    className="ml-1"
                    style={{ height: "40px", borderRadius: '50%' }}
                    src={require("assets/img/project_pics/zoom.png")}
                  />
                </a>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}

export default Profile;
