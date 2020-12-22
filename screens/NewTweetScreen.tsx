import * as React from 'react';
import {StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Platform, Image, Picker} from 'react-native';
import {Text, View} from '../components/Themed';
import {AntDesign, FontAwesome5, Ionicons} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import ProfilePicture from "../components/ProfilePicture";
import {useEffect, useState} from "react";
import {API, graphqlOperation, Auth, Storage} from 'aws-amplify';
import {createTweet, createTopic} from '../graphql/mutations';
import {listTopics} from '../graphql/queries';
import {useNavigation} from "@react-navigation/native";
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import Icon from 'react-native-ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import TopicFeed from '../screens/TopicsScrollScreen';
import { useRoute } from '@react-navigation/native';


export default function NewTweetScreen() {

    const route = useRoute();
    // @ts-ignore
    const { paramKey } = route.params;
    const [tweet, setTweet] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [selectedValue, setSelectedValue] = useState("");
    const [creNewTopic, setNewTopic] = React.useState("");
    const [topic, setTopic] = useState("Elected");

    const navigation = useNavigation();

    //may not be need in current edition
    const getPermissionAsync = async () => {
        if (Platform.OS !== 'web') {
            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permission to make this work!');
            }
        }
    };

    useEffect(() => {
        getPermissionAsync()
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImageUrl(result.uri);
        }
    };

    const uploadImage = async () => {
        try {
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            const urlParts = imageUrl.split('.')
            const extension = urlParts[urlParts.length - 1];
            console.log(extension);
            const key = `${uuidv4()}.${extension}`;

            await Storage.put(key, blob);
            return key;
        } catch (e) {
            console.log(e);
        }
        return '';
    }

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


    const onPostTweet = async () => {
        // console.log(`Posting the tweet: ${tweet} Image: ${imageUrl}`);

        let image;
        if (!!imageUrl) {
            image = await uploadImage();
        }

        try {
            const currentUser = await Auth.currentAuthenticatedUser({bypassCache: true});
            const newTweet = {
                content: tweet,
                image,
                userID: currentUser.attributes.sub,
                topic: paramKey,
            }
            console.log(newTweet);
            await API.graphql(graphqlOperation(createTweet, {input: newTweet}))
            navigation.goBack();

            // console.warn("Tweet posted");
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="close" size={30} color={Colors.light.tint}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={onPostTweet}>
                    <Text style={styles.buttonText}>Post</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.newTweetContainer}>
                {/*<ProfilePicture image={'https://picsum.photos/400'}/>*/}
                <View style={styles.inputContainer}>

                    <TextInput
                        value={tweet}
                        onChangeText={(value) => setTweet(value)}
                        multiline={true}
                        numberOfLines={3}
                        style={styles.input}
                        placeholder={"Give us your opinion?"}
                    />

                    <TouchableOpacity onPress={pickImage}>
                        {/*<Text style={styles.pickImage}>Choose image</Text>*/}
                        <Ionicons name="camera-outline" style={styles.pickImage}/>
                        <Image source={{uri: imageUrl}} style={styles.image}/>
                    </TouchableOpacity>
                    <Text style={styles.privacy}>Your opinion matters!</Text>
                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingVertical: 30,
        paddingTop: 20,
        // paddingHorizontal: 20,
        // alignItems: 'flex-start',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: "center",
    },
    button: {
        backgroundColor: Colors.light.tint,
        borderRadius: 30,
    },
    buttonText: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,

    },
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        paddingTop: 50,
    },
    newTweetContainer: {
        flexDirection: 'row',
        padding: 15,
    },
    inputContainer: {
        marginLeft: 10,
        // borderWidth : 1,
    },

    imageInput: {
        fontSize: 20,
    },
    pickImage: {
        padding: 20,
        paddingBottom: 20,
        color: Colors.light.tint,
        fontSize: 50,
        textAlign: "center",
        alignItems: "center",
        // paddingLeft: 10,
    },
    image: {
        // padding: 10,
        width: 380,
        height: 380,
        borderRadius: 30,
        paddingTop:10,

    },
    opinionPicker: {
        paddingLeft: 140,
        alignItems: "center",
        textAlign: 'center',
    },

    input: {
        flexDirection: 'row',
        flexShrink: 1,
        backgroundColor: "#f5faff",
        padding: 10,
        borderRadius: 4,
        height: 200,
        justifyContent: "space-evenly",
        textAlignVertical: "top",
        width: 380,
        textAlign: "center",
        fontSize: 18,
    },
    privacy: {
        textAlign: 'center',
        color: "gray",
        padding: 100,

    },
});
