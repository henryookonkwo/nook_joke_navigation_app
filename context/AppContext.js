import React, { createContext, useEffect, useState, useRef } from "react";
import * as Notifications from "expo-notifications";
import { registerForPushNotificationsAsync } from "../src/helpers/pushNotifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const defaultState = {
  token: "",
  joke: "",
  setJoke: undefined,
};

export const AppContext = createContext(defaultState);

export const AppContextProvider = ({ children }) => {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [joke, setJoke] = useState("");
  //   const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(async () => {
    await registerForPushNotificationsAsync()
      .then((token) => {
        setExpoPushToken(token);
      })
      .catch((err) => console.log(err));

    // // This listener is fired whenever a notification is received while the app is foregrounded
    // notificationListener.current =
    //   Notifications.addNotificationReceivedListener((notification) => {
    //     setNotification(notification);
    //   });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        // console.log("response: ", response);
      });

    // clean up
    return () => {
      // Notifications.removeNotificationSubscription(
      //   notificationListener.current
      // );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <AppContext.Provider value={{ token: expoPushToken, setJoke, joke }}>
      {children}
    </AppContext.Provider>
  );
};
