import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const Home = () => {
  // this is used to store the joke
  const [joke, setJoke] = useState("");
  //on render we get a joke to render to user
  useEffect(async () => {
    try {
      const response = await fetch(
        `https://v2.jokeapi.dev/joke/Any?type=single`
      );
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <View style={styles.center}>
      <Text>Here is a random joke to make your day</Text>
      <Text>{joke}</Text>
      {/* <Button title="Go to Joke Screen" onPress={handleOnPress} /> */}
    </View>
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

export default Home;
