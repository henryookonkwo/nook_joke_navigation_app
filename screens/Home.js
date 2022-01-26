import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "../src/components/Card";

const Home = () => {
  // this is used to store the joke
  const [joke, setJoke] = useState([]);
  let JokeCounter = 1;

  //on render we get a joke to render to user
  useEffect(async () => {
    try {
      const response = await fetch(
        // `https://v2.jokeapi.dev/joke/Any?type=single`
        `https://v2.jokeapi.dev/joke/Any?type=single&amount=3`
      );
      const data = await response.json();
      const allJokes = data.jokes;
      let result = allJokes.map(({ joke }) => joke);

      // console.log(result);
      setJoke(result);
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(joke.length);
  return (
    <>
      {/* <View style={styles.center}> */}
      <Text style={styles.header}>List of random jokes to make your day</Text>
      <Text style={styles.center}>
        <Card data={joke[0]} title={"Joke 1"} />
      </Text>
      <Text style={styles.center}>
        <Card data={joke[1]} title={"Joke 2"} />
      </Text>
      <Text style={styles.center}>
        <Card data={joke[2]} title={"Joke 3"} />
      </Text>

      {/* <Button title="Go to Joke Screen" onPress={handleOnPress} /> */}
      {/* </View> */}
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
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: 5,
    padding: 5,
    fontSize: 20,
    color: "#3b3a30",
  },
  font: {
    fontSize: 16,
    fontFamily: "Helvetica",
  },
});

export default Home;
