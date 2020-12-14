import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {AntDesign} from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, HomeNavigatorParamList, TabTwoParamList } from '../types';
import ProfilePicture from '../components/ProfilePicture';
import {useEffect, useState} from "react";
import {API, Auth, graphqlOperation} from 'aws-amplify';
import { getUser } from '../graphql/queries';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: Colors[colorScheme].tint,
                showLabel: false
            }}>
            <BottomTab.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="md-home" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Search"
                component={TabTwoNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-search" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Notifications"
                component={TabTwoNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-notifications-outline" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Messages"
                component={TabTwoNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-mail" color={color} />,
                }}
            />
        </BottomTab.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
    // @ts-ignore
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<HomeNavigatorParamList>();

function HomeNavigator() {
    const [user, setUser] = useState(null);

    useEffect( () => {
        const fetchUser = async() => {
            const userInfo = await Auth.currentAuthenticatedUser({bypassCache:true});
            if(!userInfo){
                return;
            }
            try{
                const userData = await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub}))
                if(userData){
                    // @ts-ignore
                    setUser(userData.data.getUser);
                }
            }
            catch (e){
                console.log(e);
            }
        }
        fetchUser();
    }, []);

    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerRightContainerStyle: {
                        marginRight: 15,
                    },
                    headerLeftContainerStyle: {
                        marginLeft: 15,
                    },
                    headerTitle: () => (
                        // <Ionicons name={"logo-twitter"} size={40} color={Colors.light.tint}/>
                        //<Ionicons name={"logo-react"} size={30} color={Colors.light.tint}/>
                        // <AntDesign name="aliwangwang" size={40} color={Colors.light.tint} />
                        <Entypo name="chat" size={40} color={Colors.light.tint} />



                    ),
                    headerRight: () => (
                        <MaterialCommunityIcons name={"star-four-points-outline"} size={30} color={Colors.light.tint}/>
                        // <AntDesign name="star" size={30} color={Colors.light.tint} />
                    ),
                    headerLeft: () => (
                        // @ts-ignore
                        <ProfilePicture size={40} image={user?.image} />
                    )
                }}
            />
        </TabOneStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen
                name="TabTwoScreen"
                component={TabTwoScreen}
                options={{ headerTitle: 'Tab Two Title' }}
            />
        </TabTwoStack.Navigator>
    );
}
