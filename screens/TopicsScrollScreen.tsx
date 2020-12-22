import * as React from 'react';
import { View } from '../components/Themed';
import TopicFeed from '../components/Topic/index'
import {StyleSheet, Text} from "react-native";

export default function TopicsScrollScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>User Profile</Text>
            <TopicFeed />
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
