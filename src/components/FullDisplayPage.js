import React from "react";
import { projectAPI } from "../rest/ProjectAPI.js"
import { Button, Card, Form } from "react-bootstrap";

class FullDisplayPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            characters: [],
            newCharacterName: "",
            newWeaponName: "",
            newPowerName: "",
        }
    }

    componentDidMount = () => {
        projectAPI.get().then((data) => {
            this.setState({ characters: data })
        })
        //this.fetchCharacters();
    };

    fetchCharacters = async () => {
        let data = await projectAPI.get();
        this.setState({ characters: data })
    }

    async deleteCharacter (characterId) {
        await projectAPI.deleteCharacter(characterId)
        this.fetchCharacters();
    }

    handleChanges = (e) => {
        var id = e.target.getAttribute("id");
        if (id === "updateCharacterName") {
            this.setState({ newCharacterName: e.target.value })
            console.log("newCharacterName:", this.state.newCharacterName)
        }
        if (id === "updateWeaponName") {
            this.setState({ newWeaponName: e.target.value })
            console.log("newWeaponName:", this.state.newWeaponName)
        }
        if (id === "updatePowerName") {
            this.setState({ newPowerName: e.target.value })
            console.log("newPowerName:", this.state.newPowerName)
        }
    }

    render() {
        if (this.state.characters !== []) {
            var content = (this.state.characters.map((n, index) => {
                return (
                    <Card key={index}>
                        <h2>{n.name}</h2>
                        {/* Delete Character Form & Button */}
                        <Button onClick={() =>
                            this.deleteCharacter(n.id)
                        }> Delete Character </Button>
                        <Form>
                            <Form.Control onChange={this.handleChanges} id="updateCharacterName" placeholder="Enter New Name"/>
                        </Form>
                        <br />
                        {/* Update Character Form & Button */}
                        <Button onClick={() => projectAPI.updateCharacter(this.state.newCharacterName, n.id)}>
                            Update Character
                        </Button>
                        {/* Display the Arrays */}
                        <p>Character Info: {n.characterInfo}</p>
                        <p>Weapons: {n.weaponInfo}</p>
                        {/* Update Weapon Form & Button */}
                        <Form>
                            <Form.Control onChange={this.handleChanges} id="updateWeaponName" placeholder="Enter New Name"/>
                        </Form>
                        <Button onClick={() => 
                            projectAPI.updateWeapon(this.state.newCharacterName, n.id)}>
                            Update Weapon Name
                        </Button>
                        <p>Power & Abilities: {n.powerInfo}</p>
                        {/* Update Power Form and Button */}
                        <Form>
                            <Form.Control onChange={this.handleChanges} id="updatePowerName" placeholder="Enter New Name"/>
                        </Form>
                        <Button onClick={() => 
                            projectAPI.updatePower()}>
                            Update Power Name
                        </Button>
                    </Card>
                )
            }))
        }

        return (
            <div>
                <h3>Submitted Characters:</h3>
                <div >
                    {content}
                </div>
            </div>
        )
    }
}

export default FullDisplayPage;