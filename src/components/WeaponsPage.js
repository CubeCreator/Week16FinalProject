import React from "react";
import WeaponsDisplay from "./WeaponsDisplay";
import WeaponsForm from "./WeaponsForm";
import WeaponTags from "./WeaponTags";

class WeaponsPage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = () => {};

    render() {
        return (
            <div>
                <h3>Weapons Page</h3>
                <WeaponsForm />
                <WeaponTags />

                <WeaponsDisplay />
            </div>
        )
    }
}

export default WeaponsPage;