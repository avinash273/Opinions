import React from "react";
import {TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';



const NewTweetButton = () => {

    const navigation = useNavigation();
    const onPress = () => {
        // console.warn('Open new tweet');
        navigation.navigate('TopicsScrollScreen');
    }

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
            activeOpacity={0.8}
        >
            {/*<MaterialCommunityIcons name={"feather"} size={30} color={"white"} />*/}
            <Entypo name="feather" size={30} color={"white"} />
            {/*<Entypo name="pencil"  size={30} color={"white"} />*/}
            {/*<FontAwesome name="pencil" size={30} color={"white"} />*/}
            {/*<FontAwesome name="pencil-square-o" size={30} color={"white"} />*/}

        </TouchableOpacity>
    );
}

export default NewTweetButton;