import { useState } from "react";
import { Button, Card, Col, Container, Form, FormGroup, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import Service from "../../services/auth.service";
import './ForgotPassword.css'

function ForgotPassword(){

    const navigate=useNavigate()
    const [validated, setValidated] = useState(false);
    const [sent, setSent] = useState(false);


    async function handleSubmit(e){
        const form = e.currentTarget;
        e.preventDefault()
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        setValidated(true);
        const res=await Service.forgotPassword({email:e.target[0].value})
        if(res?.data.indexOf('Queued')>-1)return setSent(true)
    }

    async function handleResend(){
        document.querySelector('#submit').click()
    }

    return(
        <Container className="login-form-container">
            <Row>
                <Col>
                    <Card>
                        <Card.Header className="d-flex justify-content-center">
                            <Card.Title as='h2'>Forgot Password</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit} noValidate validated={validated}>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <label>Email</label>
                                            <Form.Control required type='email' defaultValue="user@gmail.com" ></Form.Control>
                                            <Form.Control.Feedback type="invalid">Input a valid email</Form.Control.Feedback>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className="mt-4">
                                    <Col className="d-flex justify-content-end">
                                        <Button id="submit" type="submit">Send Email</Button>
                                    </Col>
                                </Row>
                                {sent?<Row>
                                        <Col className="d-flex justify-content-center">
                                            <span className="forgot-password-resend">Email Sent. <span className="custom-link" onClick={handleResend}>Resend Email</span></span>  
                                        </Col>
                                    </Row>:null
                                }
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default ForgotPassword