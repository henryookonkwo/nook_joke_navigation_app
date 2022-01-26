import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { AppContext } from "../context/AppContext";
import Card from "../src/components/Card";

const JokeScreen = () => {
  const { joke } = useContext(AppContext);
  return (
    // <View style={styles.center}>
    //   <Text>Here is the joke you requested</Text>
    //   <Text>{joke}</Text>
    // </View>
    <Card data={joke} title={"Here is the joke you requested"} />
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default JokeScreen;
