// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";


function Tutes() {
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
                      Our Free tutorials for you{" "}
                      <span>Based on MERN-Stack</span>
                    </h1>
                    <p className="lead text-white">
                      Read, Think, Imagine and Learn. Then if you satisfy littlebit pray for us!
                    </p>
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
        <section className="section section-lg pt-lg-0 mt--200">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid">
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                          <i className="ni ni-check-bold" />
                        </div>
                        <h6 className="text-primary text-uppercase">
                          Tutorial 01
                        </h6>
                        <p className="description mt-3">
                          How to add existing file/code/folder in github remote repository from local pc
                        </p>
                        <div>
                          <Badge color="primary" pill className="mr-1">
                            Reactjs
                          </Badge>
                          <Badge color="primary" pill className="mr-1">
                            Github
                          </Badge>
                          <Badge color="primary" pill className="mr-1">
                            js
                          </Badge>
                        </div>
                        <Button
                          className="mt-4"
                          color="primary"
                          href="https://medium.com/p/467bf396694e"
                        >
                          Learn more
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                          <i className="ni ni-istanbul" />
                        </div>
                        <h6 className="text-success text-uppercase">
                          Tutorial 2
                        </h6>
                        <p className="description mt-3">
                          MERN Stack todoList
                        </p>
                        <div>
                          <Badge color="success" pill className="mr-1">
                            Reactjs
                          </Badge>
                          <Badge color="success" pill className="mr-1">
                            Expressjs
                          </Badge>
                          <Badge color="success" pill className="mr-1">
                            Nodejs
                          </Badge>
                        </div>
                        <Button
                          className="mt-4"
                          color="success"
                          href="https://medium.com/p/467bf396694e"
                          onClick={(e) => e.preventDefault()}
                        >
                          Learn more
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                          <i className="ni ni-planet" />
                        </div>
                        <h6 className="text-warning text-uppercase">
                          Tutorial 3
                        </h6>
                        <p className="description mt-3">
                          Online shopping site by reactjs
                        </p>
                        <div>
                          <Badge color="warning" pill className="mr-1">
                            Reactjs
                          </Badge>
                          <Badge color="warning" pill className="mr-1">
                            MongoDB
                          </Badge>
                          <Badge color="warning" pill className="mr-1">
                            Nodejs and expressjs
                          </Badge>
                        </div>
                        <Button
                          className="mt-4"
                          color="warning"
                          href="https://medium.com/p/467bf396694e"
                          onClick={(e) => e.preventDefault()}
                        >
                          Learn more
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}

export default Tutes;
