import React from "react";

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

            })
        );
        else
        
        return (
            <div>
                <h5>Current Power & Abilities:</h5>
            </div>
        )
    }
}

export default PowersDisplay;