import React, {useEffect, useState} from "react";
import {View, Text, Image, FlatList} from 'react-native';
import Tweet from '../Tweet';
import {API, Auth, graphqlOperation} from 'aws-amplify';
import {listTweets} from '../../graphql/queries';

const UserFeed = () => {
    const [tweets, setTweets] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchTweets = async () => {
        //get tweets from backend ans set them to state
        setLoading(true);
        try {
            const tweetData = await API.graphql(graphqlOperation(listTweets));
            const currentUser = await Auth.currentAuthenticatedUser({bypassCache: true});
            console.log(tweetData);
            // @ts-ignore
            setTweets(tweetData.data.listTweets.items);
            // console.log("currentUser.attributes.sub"+currentUser.attributes.sub);

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

export default UserFeed;