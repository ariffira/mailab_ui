// reactstrap components
import {
  Badge,
  Container,
  Row,
  Col,
} from "reactstrap";


function WhatWeDo() {
  return (
    <>
      <main>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid align-items-center">
              <Col className="order-md-2" md="6">
                <img
                  alt="..."
                  className="img-fluid floating"
                  src={require("assets/img/theme/promo-1.png")}
                />
              </Col>
              <Col className="order-md-1" md="6">
                <div className="pr-md-5">
                  <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                    <i className="ni ni-settings-gear-65" />
                  </div>
                  <h3>Our Services for you</h3>
                  <p>
                    We promise robust, beautiful and safe web applications and best performance for our clients. If customer does not satisfy we can even maintain and develop application for them free of charge until they feel happy.
                  </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge
                            className="badge-circle mr-3"
                            color="success"
                          >
                            <i className="ni ni-html5" />
                          </Badge>
                        </div>
                        <div>
                          <h5 className="mb-0">Responsive Software Design which can use from mobile, laptop or any device</h5>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge
                            className="badge-circle mr-3"
                            color="success"
                          >
                            <i className="ni ni-satisfied" />
                          </Badge>
                        </div>
                        <div>
                          <h5 className="mb-0">
                            Best support and maintainence
                          </h5>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge
                            className="badge-circle mr-3"
                            color="success"
                          >
                            <i className="ni ni-settings-gear-65" />
                          </Badge>
                        </div>
                        <div>
                          <h5 className="mb-0">
                            Best Secure website by following <a href="https://de.wikipedia.org/wiki/Open_Web_Application_Security_Project">
                              OWASP
                            </a> Security protocol
                          </h5>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}

export default WhatWeDo;
