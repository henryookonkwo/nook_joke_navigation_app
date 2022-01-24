import React, { useCallback, useContext } from "react";
import { Button } from "react-native";
import { sendPushNotification } from "../helpers/pushNotifications";
import { AppContext } from "../../context/AppContext";

const JokeDrawerItem = () => {
  const { token, setJoke, joke } = useContext(AppContext);
  console.log("token in joke: ", token);
  const handleOnPress = useCallback(async () => {
    await fetch(" https://v2.jokeapi.dev/joke/Any?type=single")
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.joke);
      })
      .catch((err) => console.log(err));
    await sendPushNotification(token);
  }, []);

  return <Button title="Show me a joke" onPress={handleOnPress} />;
};

export default JokeDrawerItem;
