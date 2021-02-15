import React, {useEffect, useState} from "react";
import {Text} from "react-native";
import userWithFleets from "../../data/userWithFleets";
import FleetView from "../../components/FleetView";
import {useRoute} from '@react-navigation/native';
import {UserType} from "../../types";

const FleetScreen = () => {
    const route = useRoute();

    // @ts-ignore
    const {userId} = route.params;

    // @ts-ignore
    const [user, setUser] = useState<null | UserType>(userWithFleets.find(u => u.id === userId));

    const [fleetIndex, setFleetIndex] = useState(0);

    // @ts-ignore
    const [fleet, setFleet] = useState<null | UserType>(user?.fleets?.items[0]);

    // useEffect(() => {
    //
    //     let userIndex = -1;
    //     for (let i = 0; i < userWithFleets?.length; i++) {
    //         // @ts-ignore
    //         if (userWithFleets[i].id === user.id) {
    //             userIndex = i;
    //             break;
    //         }
    //     }
    //     // @ts-ignore
    //     if (fleetIndex >= user?.fleets?.items.length) {
    //         if (userWithFleets?.length > userIndex + 1) {
    //             //go to next user
    //             setUser(userWithFleets[userIndex + 1]);
    //             setFleetIndex(0);
    //         } else {
    //             // @ts-ignore
    //             setFleetIndex(user?.fleets?.items.length);
    //         }
    //
    //     } else if (fleetIndex < 0) {
    //         if (userIndex > 0) {
    //             setUser(userWithFleets[userIndex - 1]);
    //             setFleetIndex(userWithFleets[userIndex - 1].fleets.items.length - 1);
    //         } else {
    //             // @ts-ignore
    //             setFleet(user?.fleets?.items[fleetIndex])
    //         }
    //     } else {
    //         setFleetIndex(0);
    //     }
    // }, [fleetIndex]);

    useEffect(() => {
        if (!user) {
            return;
        }

        let userIndex = -1;
        for (let i = 0; i < userWithFleets?.length; i++) {
            if (userWithFleets[i].id === user.id) {
                userIndex = i;
                break;
            }
        }
        // @ts-ignore
        if (fleetIndex >= user?.fleets?.items.length) {
            if (userWithFleets.length > userIndex + 1) {
                // go to the next user
                setUser(userWithFleets[userIndex + 1]);
                setFleetIndex(0);
            } else {
                // @ts-ignore
                setFleetIndex(user?.fleets?.items.length);
            }
        } else if (fleetIndex < 0) {
            // go to the prev user
            if (userIndex > 0) {
                setUser(userWithFleets[userIndex - 1]);
                setFleetIndex(userWithFleets[userIndex - 1].fleets.items.length - 1);
            } else {
                setFleetIndex(0)
            }
        } else {
            // @ts-ignore
            setFleet(user?.fleets?.items[fleetIndex])
        }
    }, [fleetIndex])

    const goToNextFleet = () => {
        setFleetIndex(fleetIndex + 1);
    }

    const goToPrevFleet = () => {
        setFleetIndex(fleetIndex - 1);
    }


    return (
        <FleetView
            // @ts-ignore
            user={user}
            // @ts-ignore
            fleet={fleet}
            goToNextFleet={goToNextFleet}
            goToPrevFleet={goToPrevFleet}
        />
    )
};

export default FleetScreen;