import * as React from 'react';
import {StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Platform, Image} from 'react-native';
import { Text, View } from '../components/Themed';
import {AntDesign, FontAwesome5} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import ProfilePicture from "../components/ProfilePicture";
import {useEffect, useState} from "react";
import {API, graphqlOperation, Auth, Storage} from 'aws-amplify';
import { createTweet } from '../graphql/mutations';
import {useNavigation} from "@react-navigation/native";
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import Icon from 'react-native-ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import NewPicker from "../components/TopicPicker";

export default function NewTweetScreen() {
  const[tweet, setTweet] = useState("");
  const[imageUrl, setImageUrl] = useState("");

  const navigation = useNavigation();

  //may not be need in current edition
  const getPermissionAsync = async () => {
    if(Platform.OS !== 'web'){
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if( status  !== 'granted'){
        alert('Sorry, we need camera roll permission to make this work!');
      }
    }
  };

  useEffect( () => {
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
    try{
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const urlParts = imageUrl.split('.')
      const extension = urlParts[urlParts.length - 1];
      console.log(extension);
      const key = `${uuidv4()}.${extension}`;

      await Storage.put(key, blob);
      return key;
    }
    catch (e){
      console.log(e);
    }
    return '';
  }


  const onPostTweet = async () => {
    // console.log(`Posting the tweet: ${tweet} Image: ${imageUrl}`);

    let image;
    if(!!imageUrl){
      image = await uploadImage();
    }

    try{
      const currentUser = await Auth.currentAuthenticatedUser({bypassCache:true});
      const newTweet = {
        content: tweet,
        image,
        userID: currentUser.attributes.sub,
      }
      await API.graphql(graphqlOperation(createTweet, {input: newTweet}))
      navigation.goBack();

      // console.warn("Tweet posted");
    }
    catch (e){
      console.log(e);
    }
  }

  return (
      <SafeAreaView style={styles.container}>

        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign  name ="close" size={30} color={Colors.light.tint} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={onPostTweet}>
            <Text style={styles.buttonText}>Post</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.topicPicker}>
          <NewPicker />
        </View>



        <View style={styles.newTweetContainer}>
          <ProfilePicture image={'https://picsum.photos/400'} />
          <View style={styles.inputContainer}>

            <TextInput
                value={tweet}
                onChangeText={(value) => setTweet(value)}
                multiline={true}
                numberOfLines={3}
                style={styles.tweetInput}
                placeholder={"Give opinion?"}
            />
            <TouchableOpacity onPress={pickImage}>
              {/*<Text style={styles.pickImage}>Choose image</Text>*/}
              <FontAwesome5 name="camera" style={styles.pickImage}/>
            </TouchableOpacity>
            <Image source={{uri: imageUrl}} style={styles.image}/>
          </View>
        </View>



      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical:30,
    alignItems: 'flex-start',
    backgroundColor: 'white',
    // justifyContent: 'center',
  },
  topicPicker: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
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
    padding: 15,
  },
  newTweetContainer: {
    flexDirection: 'row',
    padding: 15,
  },
  inputContainer: {
    marginLeft: 10,
    // borderWidth : 1,
  },
  tweetInput: {
    height: 100,
    maxHeight: 300,
    fontSize: 20,
    textAlign: 'center',
    // borderColor: 'gray',
    // borderWidth: 1,
  },
  imageInput: {
    fontSize: 20,
    // borderColor: 'gray',
    // borderWidth: 1,
  },
  pickImage: {
    color: Colors.light.tint,
    fontSize: 40,
    textAlign: 'center',
    paddingLeft: 80,
  },
  image: {
    width: 250,
    height: 250,
  }
});
