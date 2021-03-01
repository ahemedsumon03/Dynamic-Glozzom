import React, {Component} from 'react';
import {Accordion, Card,Button} from "react-bootstrap";

class FaqSection extends Component {
    render() {

        const allData = this.props.myData;

        return (
            <div>
                <section className="py-5 bg-dark">
                    <div className="container">
                        <div className="row text-light text-center">
                            <div className="col">
                                <h2>Frequently Asked Question</h2>
                            </div>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-md-6'>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle className='cardHead' as={Card.Header} eventKey="0">
                                            {allData[0]['Question_one']}
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>{allData[0]['Answer_one']}</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle className='cardHead' as={Card.Header} eventKey="1">
                                            {allData[0]['Question_two']}
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>{allData[0]['Answer_two']}</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className='col-md-6'>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle className='cardHead' as={Card.Header} eventKey="0">
                                            {allData[0]['Question_three']}
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>{allData[0]['Answer_three']}</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle className='cardHead' as={Card.Header} eventKey="1">
                                            {allData[0]['Question_four']}
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>{allData[0]['Answer_four']}</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default FaqSection;