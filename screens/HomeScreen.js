import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  // this is used to store the joke
  const [joke, setJoke] = useState("");
  //on render we get a joke to render to user
  useEffect(async () => {
    await fetch(" https://v2.jokeapi.dev/joke/Any?type=single")
      .then((res) => res.json())
      .then((data) => setJoke(data.joke))
      .catch((err) => console.log(err));
  }, []);

  console.log("joke in home: ", joke);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Here is a random joke to make your day</Text>
      <Text>{joke}</Text>
    </View>
  );
};

export default HomeScreen;
