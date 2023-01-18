import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, FormGroup, Row } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom";
import Service from "../../services/auth.service";

function ResetPassword(){

    const navigate=useNavigate()
    const [validated, setValidated] = useState(false);
    let {key}=useParams()
    let user

    async function verifyKey(){
        const res=await Service.verify({secret:key})
        // if(!res?.data._id)navigate('/auth/forgot-password')
        console.log(res.data)
        user=res.data
    }

    useEffect(()=>{
        verifyKey()
    },[])

    async function handleSubmit(e){
        const form = e.currentTarget;
        e.preventDefault()
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        setValidated(true);
        if(e.target[0].value!==e.target[1].value){
            alert('passwords do not match')
        }
        const res=await Service.reset({id:user._id,password:e.target[0].value})
        if(res?.data?._id)navigate('/auth/login')
    }

    return(
        <Container className="login-form-container">
            <Row>
                <Col>
                    <Card>
                        <Card.Header className="d-flex justify-content-center">
                            <Card.Title as='h2'>Reset Password</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit} noValidate validated={validated}>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <label>Password</label>
                                            <Form.Control required type='password' defaultValue="12345678" ></Form.Control>
                                            <Form.Control.Feedback type="invalid">Password is required</Form.Control.Feedback>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <label>Confirm Password</label>
                                            <Form.Control type='password' defaultValue="12345678" ></Form.Control>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className="mt-4">
                                    <Col className="d-flex justify-content-end">
                                        <Button type="submit">Submit</Button>
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
export default ResetPassword