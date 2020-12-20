import React, {useEffect} from 'react';

//https://docs.amplify.aws/start/getting-started/auth/q/integration/react-native
// @ts-ignore
import { Authenticator, withAuthenticator, AmplifyTheme } from 'aws-amplify-react-native';
import Amplify, {Auth, API, graphqlOperation} from 'aws-amplify';
// @ts-ignore
import config from './aws-exports';
Amplify.configure(config);
import 'react-native-get-random-values';

const MySectionHeader = Object.assign({}, AmplifyTheme.sectionHeader, { background: 'blue' });
const MyTheme = Object.assign({}, AmplifyTheme, { sectionHeader: MySectionHeader });

<Authenticator theme={MyTheme} />