import * as React from 'react';
import {View} from '../components/Themed';
import TopicFeed from '../components/Topic/index'
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import {useNavigation} from "@react-navigation/native";

export default function TopicsScrollScreen() {
    const navigation = useNavigation();
    return (

        <SafeAreaView style={styles.containerSafe}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="close" size={30} color={Colors.light.tint}/>
                    </TouchableOpacity>

                    {/*<TouchableOpacity style={styles.button} onPress={onPostTweet}>*/}
                    {/*    <Text style={styles.buttonText}>Post</Text>*/}
                    {/*</TouchableOpacity>*/}
                </View>
                <TopicFeed/>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            </View>
        </SafeAreaView>
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
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        padding: 15,
    },
    containerSafe: {
        flex: 1,
    },
});
