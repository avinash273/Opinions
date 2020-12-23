import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import UserFeed from "../components/UserFeed";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <UserFeed />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
