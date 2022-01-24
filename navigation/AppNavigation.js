import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import JokeDrawerItem from "../src/components/JokeDrawerItem";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <JokeDrawerItem />
    </DrawerContentScrollView>
  );
}

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={TabNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
