import React from "react";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Tooltip from "react-bootstrap";

class CharacterForm extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = () => {};

    render() {
        return (
            <form>
                <Card>
                    <Card.Header>Enter Character Details:</Card.Header>
                    <Card.Body>

                        <div className="row">
                            <div className="col-sm">
                                <p>Gender:</p>
                                <Form.Select>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Variant">Variant</option>
                                    <option value="Other">Other</option>
                                    <option value="Unknown/Ambigious">Unknown/Ambigious</option>
                                    <option value="Not Applicable">Not Applicable</option>
                                </Form.Select>
                            </div>
                            <div className="col-sm">
                                <p>Race:</p>
                                <Form.Select>
                                    <option>Asian</option>
                                    <option>Black</option>
                                    <option>Hispanic</option>
                                    <option>Mixed</option>
                                    <option>White</option>
                                    <option>Not Applicable</option>
                                </Form.Select>
                            </div>
                        </div>
                        
                    </Card.Body>
                </Card>
            </form>
        )
    }
}

export default CharacterForm;
