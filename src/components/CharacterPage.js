import React from "react";
import CharacterForm from "./CharacterForm"

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
            </div>
        )
    }
}

export default CharacterPage;