import React from "react";
import { projectAPI } from "../rest/ProjectAPI";

class WeaponsDisplay extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            listOfWeapons: null
        }
    }

    componentDidMount = () => {
        this.getWeapons();
    };

    //set state of the WeaponList Here
    getWeapons = async () => {
        const data = await projectAPI.get();
        this.setState({ listOfWeapons: data })
    }

    render () {
        if (this.state.listOfWeapons !== null)
            var weapons = (this.state.listOfWeapons.map((n, index) => {
                return (
                    <div key={index}>
                        <h5>{n.WeaponName}</h5>
                        <p>Slot: {n.WeaponSlot}</p>
                        <p>Type: {n.WeaponType}</p>
                        <p>Clip: {n.ClipType}</p>
                        <p>Special: {n.SpecialType}</p>
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