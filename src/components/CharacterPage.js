import React from "react";
import CharacterForm from "./CharacterForm"
import WeaponsDisplay from "./WeaponsDisplay";
import PowersDisplay from "./PowersDisplay";

class CharacterPage extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount = () => {};

    render() {
        return (
            <div>
                <h3>Character Page</h3>
                <CharacterForm />
                <WeaponsDisplay />
                <PowersDisplay />
            </div>
        )
    }
}

export default CharacterPage;