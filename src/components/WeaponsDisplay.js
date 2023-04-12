import React from "react";

class WeaponsDisplay extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            weaponList: null
        }
    }

    componentDidMount = () => {
        this.getWeapons();
    };

    //set state of the WeaponList Here
    getWeapons = () => {

    }

    render () {
        if (this.state.weaponList !== null)
            var weapons = (this.state.weaponList.map((n, index) => {
                return (
                    <div>
                        <h5></h5>
                        <p></p>
                    </div>
                )
            }))
        else {
            return (
                <div>
                    <h5>Current Weapons:</h5>
                    <p> You don't have any Weapons Yet... </p>
                </div>
            )
        }

        return (
            <div>
                <h5>Current Weapons:</h5>
                {weapons}
            </div>
        )
    }
}

export default WeaponsDisplay;