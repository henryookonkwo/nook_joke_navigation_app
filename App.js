import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./navigation/DrawerNavigator";
import { AppContextProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </AppContextProvider>
  );
};

export default App;
