import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Card from "../src/components/Card";

let about =
  "In this project, I made use of Expo and React Navigation to build an app that displays jokes. \nThis App has two tabs on the bottom and a drawer that that when opened, shows us a button that can be clicked to display a random joke. \nThere is a button in the drawer that says show me a joke, which will request a random joke from the joe API, which immediately triggers a push notification on the device and when clicked, it re-renders a joke page which is stacked to a home page";
const myList = [
  "1. React navigation rendered twice, so I had to hide one by using the ‘headerShown: false’ option.\n\n",
  "2. Used ‘expo r -c’ to to clear cache when modules where having issues installing \n\n",
  "3. I had to be logged into expo from my terminal to be able to get the notifications to work \n\n",
  "4. Using the useEffect to render a joke to the user\n\n",
  "5. Got to use Expo and React Navigation ",
];

// console.log(SimpleList);
const About = () => {
  return (
    <>
      <Text style={styles.center}>
        <Card style={styles.font} data={about} title={"About App"} />
      </Text>
      <Text style={styles.center}>
        <Card
          style={styles.font}
          data={myList}
          title={"Challenges/Lessons Learned"}
        />
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  header: {
    top: 10,
    fontWeight: "bold",
  },
  font: {
    fontSize: 16,
    fontFamily: "Tahoma",
  },
});

export default About;
