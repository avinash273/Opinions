import * as React from 'react';
import {View} from '../components/Themed';
import TopicFeed from '../components/Topic/index'
import {SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity} from "react-native";
import {AntDesign, MaterialCommunityIcons} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import {useNavigation} from "@react-navigation/native";
import {API, Auth, graphqlOperation} from "aws-amplify";
import {createTopic} from "../graphql/mutations";

export default function TopicsScrollScreen() {
    const navigation = useNavigation();
    const [creNewTopic, setNewTopic] = React.useState("");

    const creatingTopic = async () => {
        try {
            const currentUser = await Auth.currentAuthenticatedUser({bypassCache: true});
            const newTopic = {
                topicname: creNewTopic,
            }
            console.log(newTopic);
            await API.graphql(graphqlOperation(createTopic, {input: newTopic}))
            navigation.goBack();
            console.warn("Topic posted");
        } catch (e) {
            console.log(e);
        }
    }

    const logout = async () => {
        try {
            await Auth.signOut()
            // goToAuth()
        } catch (err) {
            console.log('error signing out...: ', err)
        }
    }
    return (

        <SafeAreaView style={styles.containerSafe}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="close" size={30} color={Colors.light.tint}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={logout}>
                        <MaterialCommunityIcons name={"logout"} size={25} color={Colors.light.tint}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.topicContainer}>
                    <TextInput
                        value={creNewTopic}
                        onChangeText={(value) => setNewTopic(value)}
                        numberOfLines={3}
                        style={styles.input}
                        placeholder={"Admin Set Topic"}
                    />


                    <TouchableOpacity style={styles.button} onPress={creatingTopic}>
                        <Text style={styles.buttonText}>Set Topic</Text>
                    </TouchableOpacity>
                </View>

                <TopicFeed/>

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
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    containerSafe: {
        flex: 1,
    },
    button: {
        backgroundColor: Colors.light.tint,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText: {
        paddingHorizontal: 10,
        // paddingVertical: 5,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
    },
    input: {
        backgroundColor: "#f5faff",
        height: 40,
        padding: 10,
        borderRadius: 10,
        justifyContent: "center",
        textAlignVertical: "top",
        marginLeft: 10,
        marginRight: 20,
        width: 220,
        textAlign: 'center',
    },
    topicContainer: {
        flexDirection: "row",
    },
});
