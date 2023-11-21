import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  Container,
  Row,
  Col,
} from "reactstrap";

import ProjectPics from "./ProjectPics";


function Project() {
  return (
    <>
      <main>
        <div className="position-relative">
          {/* shape Hero */}
          <section className="section section-lg section-shaped pb-250">
            <div className="shape shape-style-1 shape-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col lg="6">
                    <h1 className="display-3 text-white">
                      All our interestings projects at a glance{" "}
                    </h1>
                    <p className="lead text-white">
                      You can see all our projects done so far below!
                    </p>
                    <div className="btn-wrapper">
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="info"
                        href="/new_project">
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-code" />
                        </span>
                        <span className="btn-inner--text">Request a New Project</span>
                      </Button>
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                        color="default"
                        href="#"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-calendar" />
                        </span>
                        <span className="btn-inner--text">
                          Make an appointement
                        </span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
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
          {/* 1st Hero Variation */}
        </div>
        <Container className="container-lg">
          <Row className="row-grid align-items-center my-md">
            <Col lg="6">
              <h3 className="text-primary font-weight-light mb-2">
                Finished projects:
              </h3>
            </Col>
          </Row>
          <Row>
            <Col className="mb-5 mb-md-0" md="6">
              <Card className="card-lift--hover shadow border-0">
                <Link to="/landing-page">
                  <CardImg
                    alt="..."
                    src={require("assets/img/theme/landing.jpg")}
                  />
                </Link>
              </Card>
            </Col>
            <Col className="mb-5 mb-lg-0" md="6">
              <Card className="card-lift--hover shadow border-0">
                <Link to="/profile-page">
                  <CardImg
                    alt="..."
                    src={require("assets/img/theme/profile.jpg")}
                  />
                </Link>
              </Card>
            </Col>
          </Row>
        </Container>
        <ProjectPics />
      </main>
    </>
  );
}

export default Project;
