import React from "react";
import { projectAPI } from "../rest/ProjectAPI.js"
import { Button, Card } from "react-bootstrap";

class FullDisplayPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            characters: []
        }
    }

    componentDidMount = () => {
        this.fetchCharacters();
    };

    fetchCharacters = async () => {
        const characters = await projectAPI.get();
        this.setState({ characters })
    }

    render() {
        if (this.state.characters !== []) {
            var content = (this.state.characters.map((n, index) => {
                return (
                    <Card key={index}>
                        <h2>{n.name}</h2>
                        <Button onClick={() =>
                            projectAPI.deleteCharacter(n.id)
                        }> Delete Character </Button>
                        <p>Character Info: {n.characterInfo}</p>
                        <p>Weapons: {n.weaponInfo}</p>
                        <p>Power & Abilities: {n.powerInfo}</p>
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