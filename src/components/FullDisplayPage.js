import React from "react";
import ProjectAPI from "../rest/ProjectAPI.js"

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
        const characters = await ProjectAPI.get();
        this.setState({ characters })
    }

    render() {
        return (
            <div>
                <h3>Submitted Characters:</h3>
                <div >

                </div>
            </div>
        )
    }
}

export default FullDisplayPage;