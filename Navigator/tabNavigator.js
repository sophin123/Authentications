import React from "react";

import { Text, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SignUpScreen from "../src/Screens/SignUpScreen";
import SignInScreen from "../src/Screens/SignInScreen";
import AccountScreen from "../src/Screens/AccountScreen";

import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function tabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ size, color }) => (
            <Icon name="add" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="SignInScreen" component={SignInScreen} />
      <Tab.Screen name="AccountScreen" component={AccountScreen} />
    </Tab.Navigator>
  );
}
