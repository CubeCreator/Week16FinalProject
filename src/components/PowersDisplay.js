import React from "react";
import { useState } from "react";
import { powersForm } from "./PowersForm";
import { projectAPI } from "../rest/ProjectAPI";

class PowersDisplay extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            listOfPowers: []
        }
    }

    componentDidMount = () => {
        this.getPowers();
    };

    //Get data from the Array/List of Powers in the API.
    getPowers = async () => {
        const data = powersForm.state.listOfPowers;
        
    };

    render () {
        if (this.state.listOfPowers !== [])
            var powers = (this.state.listOfPowers.map((n, index) => {
                return (
                    <div key={index}>
                        <h5>{n.PowerName}</h5>
                        <p>Details: {n.PowerDetails}</p>
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

export const powersDisplay = new PowersDisplay();