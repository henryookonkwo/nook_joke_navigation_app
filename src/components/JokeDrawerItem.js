import React, { useCallback, useContext, useEffect } from "react";
import { Button } from "react-native";
import { sendPushNotification } from "../helpers/pushNotifications";
import { AppContext } from "../../context/AppContext";
import * as Notifications from "expo-notifications";

const JokeDrawerItem = ({ navigation }) => {
  const { token, setJoke } = useContext(AppContext);

  const handleOnPress = useCallback(async () => {
    try {
      const response = await fetch(
        `https://v2.jokeapi.dev/joke/Any?type=single`
      );
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.log(error);
    }
    await sendPushNotification(token);
  }, [token]);

  const lastNotificationResponse = Notifications.useLastNotificationResponse();
  const navigateToDisplayJoke = useCallback(
    () => navigation.navigate("JokeScreen"),
    [navigation]
  );

  useEffect(() => {
    if (lastNotificationResponse) {
      //get the route
      const route = JSON.stringify(
        lastNotificationResponse.notification.request.content.data.route
      );
      //use some function to return the correct screen by route
      navigateToDisplayJoke();
    }
  }, [lastNotificationResponse]);

  return <Button title="Show me a joke" onPress={handleOnPress} />;
};

export default JokeDrawerItem;
