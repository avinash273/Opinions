import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          TabThree: {
            screens: {
              TabThreeScreen: 'three',
            },
          },
          Statistics: {
            screens: {
              Statistics: 'Statistics',
            },
          },
          TopicsScrollScreen: {
            screens: {
              TopicsScrollScreen: 'TopicsScrollScreen',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
