import { useState } from "react"
import { Button, Card, Col, Container, Form, FormGroup, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import Service from '../../services/auth.service'
import './Login.css'

function Login(){

    const navigate=useNavigate()
    const [validated, setValidated] = useState(false);

    async function handleLogin(event){
        const form = event.currentTarget;
        event.preventDefault()
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        // console.log(event)
        setValidated(true);
        const payload={
            email:event.target[0].value,
            password:event.target[1].value
        }
        await Service.login(payload)
        if(localStorage.getItem('token'))navigate('/')
    }

    return(
        <Container className="login-form-container">
            <Row>
                <Col>
                    <Card>
                        <Card.Header className="d-flex justify-content-center">
                            <Card.Title as='h2'>Login</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleLogin} noValidate validated={validated}>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <label>Email</label>
                                            <Form.Control required type='email' defaultValue="user@gmail.com" ></Form.Control>
                                            <Form.Control.Feedback type="invalid">Input a valid email</Form.Control.Feedback>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <label>Password</label>
                                            <Form.Control required type='password' defaultValue="12345678" ></Form.Control>
                                            <Form.Control.Feedback type="invalid">Field is required</Form.Control.Feedback>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className="mt-4">
                                    <Col className="d-flex justify-content-end">
                                        <Button type="submit">Login</Button>
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
export default Login