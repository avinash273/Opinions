import React from 'react';
import { View } from 'react-native';
import LeftContainer from "./LeftContainer";
import MainContainer from "./MainContainer";
import { TweetType } from '../../types';
import styles from "./styles";

export type TweetProps = {
    tweet: TweetType,
}

const Tweet = ({ tweet }: TweetProps) => (
    <View style={styles.container}>
        {/*only profile picture*/}
        <LeftContainer user={tweet.user} />

        {/*has only tweets*/}
        <MainContainer tweet={tweet}/>
    </View>
)

export default Tweet;