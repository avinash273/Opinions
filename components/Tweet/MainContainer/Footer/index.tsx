import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {TweetType} from "../../../../types";
import {Entypo, Feather, EvilIcons, AntDesign} from "@expo/vector-icons";
import styles from "./styles";
import {graphqlOperation, API, Auth} from 'aws-amplify';
import {createLike,deleteLike} from '../../../../graphql/mutations';

export type FooterContainerProps = {
    tweet: TweetType
}

const Footer = ({tweet}: FooterContainerProps) => {
    console.log(tweet);
    const [user, setUser] = useState(null);
    const [myLike, setMyLike] = useState(null);
    // @ts-ignore
    const [likesCount, setLikesCount] = useState(tweet.likes.items.length);

    useEffect(() => {
        const fetchUser = async () => {
            const currentUser = await Auth.currentAuthenticatedUser();
            setUser(currentUser);

            // @ts-ignore
            const searchedLike = tweet.likes.items.find(
                // @ts-ignore
                (like) => like.userID === currentUser.attributes.sub
            );
            setMyLike(searchedLike);
        }
        fetchUser();
    }, [])

    const submitLike = async () => {
        const like = {
            // @ts-ignore
            userID: user.attributes.sub,
            tweetID: tweet.id,
        }

        try {
            const res = await API.graphql(graphqlOperation(createLike, {input: like}));
            // @ts-ignore
            setMyLike(res.data.createLike);
            setLikesCount(likesCount + 1);
            // console.log(res);
        } catch (e) {
            console.log(e);
        }
    }

    const removeLike = async () => {
        try{
            // @ts-ignore
            await API.graphql(graphqlOperation(deleteLike, {input: {id: myLike.id}}));
            setLikesCount( likesCount - 1);
            setMyLike(null);
        }
        catch (e){
            console.log(e);
        }
    }

    const onLike = async () => {
        // console.warn("Like pressed");
        if (!user) {
            return;
        }

        if(!myLike){
            await submitLike();
        }
        else{
            await removeLike();
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.IconContainer}>
                <Feather name={"message-circle"} size={22} color={'grey'}/>
                <Text style={styles.number}>{tweet.numberOfComments}</Text>
            </View>

            <View style={styles.IconContainer}>
                <EvilIcons name={"retweet"} size={28} color={'grey'}/>
                <Text style={styles.number}>{tweet.numberOfRetweets}</Text>
            </View>

            <View style={styles.IconContainer}>
                <TouchableOpacity onPress={onLike}>
                    <AntDesign name={!myLike ? "hearto" : "heart"} size={20} color={!myLike ? 'grey' : 'red'}/>
                </TouchableOpacity>
                <Text style={styles.number}>{likesCount}</Text>
            </View>

            <View style={styles.IconContainer}>
                <EvilIcons name={"share-google"} size={28} color={'grey'}/>
                <Text style={styles.number}>{tweet.numberOfRetweets}</Text>
            </View>
        </View>
    )
};

export default Footer;