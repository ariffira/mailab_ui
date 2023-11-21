import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

function CardsFooter() {
  return (
    <>
      <footer className="footer has-cards">
        <Container>
          <hr />
          <Row className="align-items-center justify-content-md-between">
            <Col md="4">
              <div className="copyright">
                © {new Date().getFullYear()}{" "}
                <a
                  href="/about_me"
                  target="_blank"
                >
                  Md Ariful Islam(MAI)
                </a>
                .
              </div>
            </Col>
            <Col md="4">
              <Button
                className="btn-icon-only rounded-circle"
                color="twitter"
                href="https://www.linkedin.com/in/islammdariful/"
                id="tooltip475038074"
                target="_blank"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-brands fa-linkedin" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip475038074">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-icon-only rounded-circle ml-1"
                color="facebook"
                href="https://www.xing.com/profile/MdAriful_Islam20"
                id="tooltip837440414"
                target="_blank"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-brands fa-xing" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip837440414">
                Like us
              </UncontrolledTooltip>
              <Button
                className="btn-icon-only rounded-circle ml-1"
                color="dribbble"
                href="#"
                id="tooltip829810202"
                target="_blank"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-instagram" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip829810202">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-icon-only rounded-circle ml-1"
                color="github"
                href="https://github.com/ariffira"
                id="tooltip495507257"
                target="_blank"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-github" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip495507257">
                Star on Github
              </UncontrolledTooltip>
            </Col>
            <Col md="4">
              <Nav className="nav-footer justify-content-end">
                <NavItem>
                  <NavLink
                    href="/about_me"
                    target="_blank"
                  >
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/my_tutes"
                    target="_blank"
                  >
                    Tutorials
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default CardsFooter;
