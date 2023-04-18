import React from "react";
import { useState } from "react";
import { projectAPI } from "../rest/ProjectAPI";

class PowersDisplay extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            listOfPowers: null
        }
    }

    componentDidMount = () => {
        this.getPowers();
    };

    //Get data from the Array/List of Powers in the API.
    getPowers = async () => {
        const data = await projectAPI.get();
        this.setState({ listOfPowers: data })
    };

    render () {
        if (this.state.listOfPowers !== null)
            var powers = (this.state.listOfPowers.map((n, index) => {
                return (
                    <div key={index}>
                        <h5>{n.powerInfo.PowerName}</h5>
                        <p>Details: {n.powerInfo.PowerDetails}</p>
                    </div>
                )

            })
        );
        else {
            // Return this if there is nothing in the state
                return (
                    <div>
                        <h5>Current Powers & Abilities:</h5>
                        <p> You don't have any Powers Yet... </p>
                    </div>
                )
        }
        
        return (
            <div>
                {/* Display the current array/data of Powers */}
                <h5>Current Power & Abilities:</h5>
                <br />
                {powers}
            </div>
        )
    }
}

export default PowersDisplay;