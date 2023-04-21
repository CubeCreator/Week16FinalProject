import React from "react";
import { projectAPI } from "../rest/ProjectAPI";

class WeaponsDisplay extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            listOfWeapons: [],
            currentId: 1,
        }
    }

    componentDidMount = () => {
        this.getWeapons(this.state.currentId);
    };

    //set state of the WeaponList Here
    getWeapons = async () => {
        const data = await projectAPI.getWeapons(this.state.currentId);
        console.log(data)
        this.setState({ listOfWeapons: data })
        console.log(this.state.listOfWeapons)
    }

    render () {
        if (this.state.listOfWeapons !== [])
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