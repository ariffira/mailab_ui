import React from "react";
import { useState } from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
} from "reactstrap";

function Contact() {
    const [emailSuccess, setEmailSuccess] = useState(false)
    // email system
    const sendEmail = () => {
        setEmailSuccess(true)
    }
    return (
        <>
            <main>
                <section className="section section-shaped section-lg">
                    <div className="shape shape-style-1 bg-gradient-default">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    <Container className="pt-lg-7">
                        <Row className="justify-content-center">
                            <Col lg="5">
                                <Card className="bg-secondary shadow border-0">
                                    <CardHeader className="bg-white">
                                        <div className="text-muted text-center">
                                            <small>Send me a Message</small>
                                        </div>
                                    </CardHeader>
                                    <CardBody className="px-lg-5 py-lg-5">
                                        <div className="text-center text-muted mb-4">
                                            <small>I will be happy to reply you as soon as possible</small>
                                        </div>
                                        <Form role="form">
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative mb-3">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-hat-3" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input placeholder="Your Name" type="text" />
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative mb-3">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-email-83" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input placeholder="Your Email" type="email" />
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="fa fa-comment" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Write your message here....."
                                                        type="textarea"
                                                        rows="3"
                                                        autoComplete="off"
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            {
                                                emailSuccess&&
                                                <div className="text-muted font-italic">
                                                <small>
                                                    You successfully send it:{" "}
                                                    <span className="text-success font-weight-700">
                                                        Thanks
                                                    </span>
                                                </small>
                                                </div>
                                            }
                                            <div className="text-center">
                                                <Button
                                                    className="mt-4"
                                                    color="success"
                                                    type="button"
                                                    onClick={sendEmail}
                                                >
                                                    Send Me
                                                </Button>
                                            </div>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        </>
    );
}

export default Contact;
