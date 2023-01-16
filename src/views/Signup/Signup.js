import { useState } from "react";
import { Button, Card, Col, Container, Form, FormGroup, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import Service from "../../services/auth.service";
import './Signup.css'

function Signup(){

    const [validated, setValidated] = useState(false);
    const navigate=useNavigate()

    const handleSubmit = async(event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        setValidated(true);
        if(event.target[8].value!==event.target[9].value){
            event.stopPropagation();
            alert('passwords do not match')
        }
        const payload={
            name:`${event.target[0].value} ${event.target[1].value}`,
            email:event.target[2].value,
            phone:event.target[3].value,
            address:event.target[4].value,
            city:event.target[5].value,
            country:event.target[6].value,
            postal:event.target[7].value,
            password:event.target[8].value,
        }
        const user=await Service.signup(payload)
        if(user.data?._id){
            navigate('/auth/login')
        }
    };

    return(
        <Container className="signup-form-container">
            <Row>
                <Col>
                    <Card>
                        <Card.Header className="d-flex justify-content-center">
                            <Card.Title as='h2'>Sign Up</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit} noValidate validated={validated}>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <label>First Name</label>
                                            <Form.Control required type='text'></Form.Control>
                                            <Form.Control.Feedback type="invalid">Field is required</Form.Control.Feedback>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <label>Last Name</label>
                                            <Form.Control required type='text'></Form.Control>
                                            <Form.Control.Feedback type="invalid">Field is required</Form.Control.Feedback>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <label>Email</label>
                                            <Form.Control required type='email'></Form.Control>
                                            <Form.Control.Feedback type="invalid">Field is required</Form.Control.Feedback>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <label>Phone No.</label>
                                            <Form.Control required type='text'></Form.Control>
                                            <Form.Control.Feedback type="invalid">Field is required</Form.Control.Feedback>
                                        </FormGroup>
                                    </Col>
                                </Row>


                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <label>Address</label>
                                            <Form.Control required type='text'></Form.Control>
                                            <Form.Control.Feedback type="invalid">Field is required</Form.Control.Feedback>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <label>City</label>
                                            <Form.Control required type='text'></Form.Control>
                                            <Form.Control.Feedback type="invalid">Field is required</Form.Control.Feedback>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <label>Country</label>
                                            <Form.Control required type='text'></Form.Control>
                                            <Form.Control.Feedback type="invalid">Field is required</Form.Control.Feedback>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <label>Postal Code</label>
                                            <Form.Control required type='number'></Form.Control>
                                            <Form.Control.Feedback type="invalid">Field is required</Form.Control.Feedback>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <label>Password</label>
                                            <Form.Control type='password'></Form.Control>    
                                            <Form.Control.Feedback type="invalid">Field is required</Form.Control.Feedback>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <label>Confirm Password</label>
                                            <Form.Control required type='password'></Form.Control>
                                            <Form.Control.Feedback type="invalid">Field is required</Form.Control.Feedback>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="d-flex justify-content-end mt-5">
                                        <Button type="submit">Sign Up</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default Signup