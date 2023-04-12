import React from "react";
import { useState } from "react";

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

    getPowers = () => {
        
    };

    render () {
        if (this.state.powerList !== null)
            var powers = (this.state.powerList.map((n, index) => {
                return (
                    <div>
                        <h5></h5>
                        <p></p>
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