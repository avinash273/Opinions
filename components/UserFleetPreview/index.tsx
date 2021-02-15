import React from "react";
import {Image, Text, View, TouchableWithoutFeedback} from 'react-native';
import {UserType} from '../../types';
import ProfilePicture from "../ProfilePicture";
import styles from "./styles";
import {useNavigation} from '@react-navigation/native';


export type UserFleetPreviewProps = {
    user: UserType;
}

const UserFleetPreview = (props: UserFleetPreviewProps) => {

    const {user: {id, topic, image}} = props;
    const navigation = useNavigation();
    const onPress = () => {
        //navigate to fleet screen
        navigation.navigate('Fleet', {userId: id});
        // console.log('Fleets');
    }

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.image}>
                    <ProfilePicture image={image}/>
                </View>
                <Text style={styles.topicname}>{topic}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default UserFleetPreview;