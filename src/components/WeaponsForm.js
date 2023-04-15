import React from "react";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Tooltip from "react-bootstrap";
import { projectAPI } from "../rest/ProjectAPI";

class WeaponsForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            weaponName: "",
            weaponSlot: "Primary",
            weaponType: "Hitscan",
            clipType: "Standard Clips",
            specialType: "Ammo Types",
        }
    }

    componentDidMount = () => {};

    handleChanges = (e) => {
        var id = e.target.getAttribute("id")
        if (id === "weaponName-select") {
            this.setState({ weaponName: e.target.value })
        }
        if (id === "weaponSlot-select") {
            this.setState({ weaponSlot: e.target.value })
        }
        if (id === "weaponType-select") {
            this.setState({ weaponType: e.target.value })
        }
        if (id === "clipType-select") {
            this.setState({ clipType: e.target.value })
        }
        if (id === "specialType-select") {
            this.setState({ specialType: e.target.value})
        }
    }

    render() {
        return (
            <form>
                <Card>
                    <Card.Header>Enter Weapon Details:</Card.Header>
                    <Card.Body>
                        <p>Weapon Name:</p>
                        <Form.Control onChange={this.handleChanges} id="weaponName-select" placeholder="Enter Name"/>
                        <p>Weapon Slot:</p>
                        <Form.Select onChange={this.handleChanges} id="weaponSlot-select">
                            <option value="Primary">Primary</option>
                            <option value="Secondary">Secondary</option>
                        </Form.Select>

                        <p>Weapon Type:</p>
                        <Form.Select onChange={this.handleChanges} id="weaponType-select">
                            <option value="Hitscan">Hitscan</option>
                            <option value="Projectile">Projectile</option>
                            <option value="Melee">Melee</option>
                            <option value="Utility">Utility</option>
                        </Form.Select>

                        <p>Clip Type:</p>
                        <Form.Select onChange={this.handleChanges} id="clipType-select">
                            <option value="Standard Clips">Standard Clips</option>
                            <option value="Continous Clip">Continous Clip</option>
                            <option value="Single Shot">Single Shot</option>
                            <option value="Unlimited Clips">Unlimited Clips</option>
                            <option value="Energy Overheat">Energy Overheat</option>
                        </Form.Select>

                        <p>Special Type:</p>
                        <Form.Select onChange={this.handleChanges} id="specialType-select">
                            <option value="Ammo Types">Ammo Types</option>
                            <option value="Alternative">Alternative Fire</option>
                            <option value="Aim-Locking">Aim-Locking</option>
                            <option value="Damage Boosted">Damage Boosted</option>
                            <option value="Weapon Parts">Weapon Parts</option>
                            <option value="Weapon Upgrades">Weapon Upgrades</option>
                        </Form.Select>
                        <br />
                        <br />
                        <Button onClick={() =>
                            projectAPI.addWeapon(this.state.weaponName, this.state.weaponSlot, this.state.weaponType, this.state.clipType, this.state.specialType)
                        }>Submit Weapon</Button>
                    </Card.Body>
                </Card>
            </form>
        )
    }
}

export default WeaponsForm;