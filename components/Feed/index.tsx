import React, {useEffect, useState} from "react";
import {View, Text, Image, FlatList} from 'react-native';
import {Entypo, Feather, EvilIcons, AntDesign} from "@expo/vector-icons";
import tweets from '../../data/tweets';
import Tweet from '../Tweet';
import {API, graphqlOperation} from 'aws-amplify';
import {listTweets, getSpecificTweets} from '../../graphql/queries';

// console.log("test avi3" + getSpecificTweets);
const Feed = () => {

    const [tweets, setTweets] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchTweets = async () => {
        //get tweets from backend ans set them to state
        setLoading(true);
        try {
            const tweetData = await API.graphql(graphqlOperation(listTweets));
            // console.log(tweetData);

            // @ts-ignore
            setTweets(tweetData.data.listTweets.items);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchTweets();
    }, []);

    return (
        <View style={{width: '100%'}}>
            <FlatList
                data={tweets}
                renderItem={({item}) => <Tweet tweet={item}/>}
                // @ts-ignore
                keyExtractor={(item) => item.id}
                refreshing={loading}
                onRefresh={fetchTweets}
            />
        </View>
    );
};

export default Feed;