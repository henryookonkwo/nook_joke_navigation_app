import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";
// import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="AboutScreen"
        component={ContactStackNavigator}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
