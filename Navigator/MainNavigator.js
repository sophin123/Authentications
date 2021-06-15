import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import SignInScreen from "../src/Screens/SignInScreen";
import SignUpScreen from "../src/Screens/SignUpScreen";
import TrackDetailScreen from "../src/Screens/TrackDetailScreen";
import TrackListScreen from "../src/Screens/TrackListScreen";
import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TrackCreateScreen from "../src/Screens/TrackCreateScreen";
import AccountScreen from "../src/Screens/AccountScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TrackListNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="TrackListScreen" component={TrackListScreen} />
    <Stack.Screen name="TrackDetailScreen" component={TrackDetailScreen} />
  </Stack.Navigator>
);

const TrackCreateNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="TrackCreateScreen" component={TrackCreateScreen} />
  </Stack.Navigator>
);

const AccountScreenNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="AccountScreen" component={AccountScreen} />
  </Stack.Navigator>
);

export default function MainNavigator() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator>
          <Tab.Screen name="TrackListScreen" component={TrackListNavigator} />
          <Tab.Screen
            name="TrackCreateScreen"
            component={TrackCreateNavigator}
          />
          <Tab.Screen name="AccountScreen" component={AccountScreenNavigator} />
        </Tab.Navigator>
      ) : (
        <>
          <Stack.Navigator screenOptions={{ header: () => null }}>
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
}

function SignScreenNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
    </Stack.Navigator>
  );
}
