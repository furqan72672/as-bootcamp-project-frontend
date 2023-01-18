import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card, Carousel, Col, Row } from "react-bootstrap"
import './Post.css'

function Post({venue}){
    console.log(venue)
    return(
        <div className="post">
            <Card className="post-card">
                <Card.Body>
                    <Row>
                        <Col>
                            <Carousel style={{width:'50vw'}} nextLabel="" prevLabel="" prevIcon={venue.images.length>1?<FontAwesomeIcon icon={faChevronCircleLeft} style={{fontSize:35,fontWeight:'bold'}}/>:null} nextIcon={venue.images.length>1?<FontAwesomeIcon icon={faChevronCircleRight} style={{fontSize:35}}/>:null}>
                                {
                                    venue.images.map((img)=>(
                                        <Carousel.Item style={{width:'100%',padding:0}}>
                                            <img
                                            style={{width:'100%',height:'400px'}}
                                            src={`http://localhost:4000/uploads/images/${img}`}
                                            alt="Venue Images"
                                            />
                                        </Carousel.Item>
                                    ))
                                }
                            </Carousel>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{width:'50vw'}}>
                            <Card.Text className="post-text">{venue.description}</Card.Text>   
                        </Col>
                    </Row>
                </Card.Body>
            </Card> 
        </div>
    )
}

export default Post