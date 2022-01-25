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
  const responseListener = useRef();

  useEffect(async () => {
    try {
      const token = await registerForPushNotificationsAsync();
      setExpoPushToken(token);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <AppContext.Provider value={{ token: expoPushToken, setJoke, joke }}>
      {children}
    </AppContext.Provider>
  );
};
