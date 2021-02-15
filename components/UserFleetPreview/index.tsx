import React from "react";
import {Image, Text, View} from 'react-native';
import { UserType } from '../../types';
import ProfilePicture from "../ProfilePicture";
import styles from "./styles";


export type UserFleetPreviewProps = {
    user: UserType;
}

const UserFleetPreview = (props: UserFleetPreviewProps) => {

    const { user: {topic, image} } = props;

    return(
        <View style={styles.container}>
            <View style={styles.image}>
                <ProfilePicture image={image} />
            </View>
            <Text style={styles.topicname}>{topic}</Text>
        </View>
    )
}

export default UserFleetPreview;