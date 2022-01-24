import React, { useEffect } from "react";
import { AppContextProvider } from "./context/AppContext";
import AppNavigation from "./navigation/AppNavigation";
import * as Notifications from "expo-notifications";

const App = () => {
  const lastNotificationResponse = Notifications.useLastNotificationResponse();

  useEffect(() => {
    if (lastNotificationResponse) {
      //console.log(lastNotificationResponse);

      //get the route
      const route = JSON.stringify(
        lastNotificationResponse.notification.request.content.data.route
      );

      //use some function to return the correct screen by route
      console.log(route);
    }
  }, [lastNotificationResponse]);
  return (
    <AppContextProvider>
      <AppNavigation />
    </AppContextProvider>
  );
};
export default App;
