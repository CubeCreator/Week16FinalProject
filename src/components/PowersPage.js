import React from "react";
import PowersDisplay from "./PowersDisplay";
import PowersForm from "./PowersForm";
import PowersAddOns from "./PowersAddOns";

class PowersPage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = () => {};

    render() {
        return(
            <div>
                <h3>Powers Page</h3>
                <PowersForm />
                <PowersAddOns />
                <PowersDisplay />
            </div>
        )
    }
}

export default PowersPage