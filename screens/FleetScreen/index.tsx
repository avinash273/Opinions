import React from "react";
import {Text} from "react-native";
import userWithFleets from "../../data/userWithFleets";
import FleetView from "../../components/FleetView";

const FleetScreen = () => {

    const user = userWithFleets[0];
    const fleet = userWithFleets[0].fleets.items[0];


    return (
        <FleetView
            user={user}
            // @ts-ignore
            fleet={fleet}
        />
    )
}

export default FleetScreen;