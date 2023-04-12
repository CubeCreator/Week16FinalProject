import React from "react";
import { Form } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

class PowersForm extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = () => {};

    render() {
        return(
            <form>
                <Card>
                    <Card.Header>Enter Power Details:</Card.Header>
                    <Card.Body>
                        <p>Power Name:</p>
                        <Form.Control placeholder="Enter Name"/>
                        <p>Power Details:</p>
                        <Form.Control placeholder="Enter Details" as="textarea" rows={4}/>
                        <br />
                        
                        <Button>Submit Power</Button>
                    </Card.Body>
                </Card>

            </form>
        )
    }
}

export default PowersForm;