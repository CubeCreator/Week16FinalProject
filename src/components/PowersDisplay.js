import React from "react";
import { useState } from "react";
import { projectAPI } from "../rest/ProjectAPI";

class PowersDisplay extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            powerList: null
        }
    }

    componentDidMount = () => {
        this.getPowers();
    };

    getPowers = async () => {
        const powerList = await projectAPI.get();
        this.setState({ powerList })
    };

    render () {
        if (this.state.powerList !== null)
            var powers = (this.state.powerList.map((n, index) => {
                return (
                    <div key={index}>
                        <h5>{n.powerInfo.PowerName}</h5>
                        <p>{n.powerInfo.PowerDetails}</p>
                    </div>
                )

            })
        );
        else {
                return (
                    <div>
                        <h5>Current Powers & Abilities:</h5>
                        <p> You don't have any Powers Yet... </p>
                    </div>
                )
        }
        
        return (
            <div>
                <h5>Current Power & Abilities:</h5>
                <br />
                {powers}
            </div>
        )
    }
}

export default PowersDisplay;