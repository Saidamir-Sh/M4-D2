import React from 'react'
import './Welcome.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Jumbotron, Button} from 'react-bootstrap'

const Welcome = () => {
    return (
        <div>
           <Jumbotron className='Jumbotron'>
                <h1>StriveBook</h1>
                <p>
                  This is a simple hero unit, a simple jumbotron-style component for calling
                  extra attention to featured content or information.
                </p>
                <p>
                  <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        </div>
    )
}

export default Welcome
