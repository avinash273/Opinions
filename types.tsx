export type RootStackParamList = {
  Root: undefined;
  NewTweet: undefined;
  NotFound: undefined;
  Statistics: undefined;
  Logout: undefined;
  TopicsScrollScreen: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Statistics: undefined;
  Logout: undefined;
};

export type HomeNavigatorParamList = {
  HomeScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type TabThreeParamList = {
  TabThreeScreen: undefined;
};

export type StatisticsParamList = {
  Statistics: undefined;
};



export type UserType = {
  topic: string;
  id: string,
  name: string,
  username: string,
  image?: string,
}

export type TweetType = {
  id: string,
  createdAt: string,
  user: UserType,
  content: string,
  image?: string,
  topic: string,
  numberOfComments?: number,
  numberOfRetweets?: number,
  numberOfLikes?: number,
}

export type TopicType = {
  id: string,
  topicname: string,
}
