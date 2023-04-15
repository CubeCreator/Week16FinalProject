import React from "react";
import { Form } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { projectAPI } from "../rest/ProjectAPI.js";

class PowersForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            powerName: "",
            powerDetails: "",
        }
    }

    componentDidMount = () => {};

    handleChanges = (e) => {
        var id = e.target.getAttribute("id")
        if (id === "powerName-select") {
            this.setState({ powerName: e.target.value })
        }
        if (id === "powerDetails-select") {
            this.setState({ powerDetails: e.target.value })
        }
    }

    render() {
        return(
            <form>
                <Card>
                    <Card.Header>Enter Power Details:</Card.Header>
                    <Card.Body>
                        <p>Power Name:</p>
                        <Form.Control id="powerName-select" onChange={this.handleChanges} placeholder="Enter Name"/>
                        <p>Power Details:</p>
                        <Form.Control id="powerDetails-select" onChange={this.handleChanges} placeholder="Enter Details" as="textarea" rows={4}/>
                        <br />
                        
                        <Button onClick={() =>
                            projectAPI.addPower(this.state.powerName, this.state.powerDetails)
                        }>Submit Power</Button>
                    </Card.Body>
                </Card>

            </form>
        )
    }
}

export default PowersForm;