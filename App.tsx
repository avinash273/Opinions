import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Amplify, {Auth, API, graphqlOperation} from 'aws-amplify';
import { LogBox } from 'react-native';
// @ts-ignore
import config from './aws-exports';
Amplify.configure(config);
//https://docs.amplify.aws/start/getting-started/auth/q/integration/react-native
// @ts-ignore
import { Authenticator, withAuthenticator, AmplifyTheme } from 'aws-amplify-react-native';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { getUser } from './graphql/queries';
import { createUser } from './graphql/mutations';
import 'react-native-get-random-values';

function App() {

  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  //need to change this image
  const getRandomImage = () => {
    return 'https://picsum.photos/200/300'
  }

  const saveUserToDB = async (user: { id: any; username: any; name: any; email: any; image: string; }) => {
    await API.graphql(graphqlOperation(createUser, {input: user}))
  }

  useEffect(() => {
    const updateUser = async () => {
      //Get current authenticated user
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache:true});
      console.log(userInfo);

      if(userInfo){
        //Check if user already exists in database
        const userData = await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub}));
        console.log(userData);
        // @ts-ignore
        if(!userData.data.getUser){
          const user = {
            id: userInfo.attributes.sub,
            username: userInfo.username,
            name: userInfo.username,
            email: userInfo.attributes.email,
            image: getRandomImage(),
          }
          await saveUserToDB(user);
        }else{
          console.log('User already exists');
        }
      }

      //If it doesnt create user in the database
    }
    updateUser();
  }, [])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
    );
  }
}


export default withAuthenticator(App);
/**
 * login: avinash273
 * password: Password@123
 */


