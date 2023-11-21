// reactstrap components
import {
    Col,
    Container,
    Row
} from "reactstrap";

function MyCompanies() {
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
                                            Few companies I have worked so far{" "}
                                        </h1>
                                        <a href="https://digitalcareerinstitute.org/">
                                            <img
                                                alt="dci logo"
                                                className="img-fluid m-5"
                                                src={require("assets/img/project_pics/dci.png")}
                                                style={{ width: "6rem", height: "2rem" }}
                                            />
                                        </a>
                                        <a href="https://www2.deloitte.com/de/de.html">
                                            <img
                                                alt="deloitte logo"
                                                className="img-fluid m-5"
                                                src={require("assets/img/project_pics/deloitte.png")}
                                                style={{ width: "6rem", height: "2rem" }}
                                            />
                                        </a>
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
                </div>
            </main>
        </>
    );
}

export default MyCompanies;