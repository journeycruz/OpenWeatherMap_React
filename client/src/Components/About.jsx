import React from 'react'
import { Jumbotron, Container } from 'reactstrap';

const About = () => {
    return (
        <div className="col-md-12 justify-content-center align-items-center text-center">
            <Jumbotron fluid>
                <Container fluid className='justify-content-center'>
                    <h1 className="display-3">How It Works</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default About
