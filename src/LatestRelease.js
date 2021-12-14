import React from 'react'
import scifi from './data/scifi.json'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'

const LatestRelease = () => {

    return (
        <div className='LatestRelease'>
            <Container>
                <h1>Sci-Fi</h1>
                <Row>
                    {
                        scifi.map((book) => 
                          <Col lg={4} md={6} xs sm={12} className='mb-4 pt-5'>
                              <Card key={book.asin} style={{ width: '18rem' }}>
                                  <Card.Img variant="top" src={book.img} />
                                     <Card.Body>
                                       <Card.Title>{book.title}</Card.Title>
                                       <Card.Text>${book.price}</Card.Text>
                                       <Button variant="primary">Preview</Button>
                                  </Card.Body>
                              </Card>
                          </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    )
}

export default LatestRelease
