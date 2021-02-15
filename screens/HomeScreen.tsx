import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Feed from "../components/Feed";
import tweets from '../data/tweets';
import NewTweetButton from "../components/NewTweetButton";
import UserFleetsList from '../components/UserFleetsList';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            {/*<UserFleet user={{id: '1', name: 'avinash',topic:'freezing', username:'avinash273', image:'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'}}/>*/}

            <Feed />
            <NewTweetButton />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
