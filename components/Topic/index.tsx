import React, {useEffect, useState} from "react";
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {API, graphqlOperation} from 'aws-amplify';
import {listTopics} from '../../graphql/queries';
import {TopicType} from '../../types';
import styles from "./styles";
import {useNavigation} from '@react-navigation/native';

export type MainContainerProps = {
    newTopic: TopicType
}

const MainContainer = ({newTopic}: MainContainerProps) => {

    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('NewTweet', {paramKey: newTopic.topicname});
    }

    return (
        <View style={styles.listItem}>
            <Image source={{
                uri: 'https://picsum.photos/200',
            }} style={{width: 60, height: 60, borderRadius: 30}}/>
            <View style={{alignItems: "center", flex: 1}}>
                <Text style={{fontWeight: "bold"}}>{newTopic.topicname}</Text>
            </View>
            <TouchableOpacity
                style={{height: 50, width: 50, justifyContent: "center", alignItems: "center"}}
                onPress={onPress}
            >
                <Text style={{color: "green", fontSize: 12,fontStyle:"italic"}}>Opinion</Text>
            </TouchableOpacity>
        </View>
    );
}


const TopicFeed = () => {
    const [loading, setLoading] = useState(false);
    const [topic, setTopic] = useState([]);

    const fetchTweets = async () => {
        setLoading(true);
        try {
            const tweetData = await API.graphql(graphqlOperation(listTopics));
            // @ts-ignore
            setTopic(tweetData.data.listTopics.items);
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
        <View style={styles.container}>
            <FlatList
                data={topic}
                renderItem={({item}) => <MainContainer newTopic={item}/>}
                // @ts-ignore
                keyExtractor={(item) => item.id}

                refreshing={loading}
                onRefresh={fetchTweets}
            />

        </View>
    );
};

export default TopicFeed;