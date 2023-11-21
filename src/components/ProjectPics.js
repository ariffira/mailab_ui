import { Link } from "react-router-dom";
// reactstrap components
import {
    Card,
    CardImg,
    Container,
    Row,
    Col,
} from "reactstrap";

function ProjectPics() {
    return (
        <>
            <Container className="container-lg">
                <Row className="row-grid align-items-center my-md">
                    <Col lg="6">
                        <h3 className="text-success font-weight-light mb-2">
                            Current projects we just developed:
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col className="mb-5 mb-md-0" md="6">
                        <Card className="card-lift--hover shadow border-0">
                            <Link to="/landing-page">
                                <CardImg
                                    alt="..."
                                    src={require("assets/img/project_pics/todolist.png")}
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
        </>
    );
}

export default ProjectPics;