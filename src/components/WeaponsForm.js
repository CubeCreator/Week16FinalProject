import React from "react";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Tooltip from "react-bootstrap";

class WeaponsForm extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = () => {};

    render() {
        return (
            <form>
                <Card>
                    <Card.Header>Enter Weapon Details:</Card.Header>
                    <Card.Body>
                        <p>Weapon Name:</p>
                        <Form.Control placeholder="Enter Name"/>
                        <p>Weapon Slot:</p>
                        <Form.Select>
                            <option value="Primary">Primary</option>
                            <option value="Secondary">Secondary</option>
                        </Form.Select>

                        <p>Weapon Type:</p>
                        <Form.Select>
                            <option value="Hitscan">Hitscan</option>
                            <option value="Projectile">Projectile</option>
                            <option value="Melee">Melee</option>
                            <option value="Utility">Utility</option>
                        </Form.Select>

                        <p>Clip Type:</p>
                        <Form.Select>
                            <option value="Standard Clips">Standard Clips</option>
                            <option value="Continous Clip">Continous Clip</option>
                            <option value="Single Shot">Single Shot</option>
                            <option value="Unlimited Clips">Unlimited Clips</option>
                            <option value="Energy Overheat">Energy Overheat</option>
                        </Form.Select>

                        <p>Special Type:</p>
                        <Form.Select>
                            <option value="Ammo Types">Ammo Types</option>
                            <option value="Alternative">Alternative Fire</option>
                            <option value="Aim-Locking">Aim-Locking</option>
                            <option value="Damage Boosted">Damage Boosted</option>
                            <option value="Weapon Parts">Weapon Parts</option>
                            <option value="Weapon Upgrades">Weapon Upgrades</option>
                        </Form.Select>
                        <br />
                        <br />
                        <Button onClick={
                            console.log("You have submitted a Weapon!")
                        }>Submit Weapon</Button>
                    </Card.Body>
                </Card>
            </form>
        )
    }
}

export default WeaponsForm;