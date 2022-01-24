import * as Permissions from "expo-permissions";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";

export async function registerForPushNotificationsAsync() {
  let token;
  // get permission status
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  /*
   * check if status is not granted,
   * if that is the case then we ask for permission
   */
  if (existingStatus !== "granted") {
    console.log("I ran first");
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  /*
   * if the user fails to grant notification
   * we throw an alert to inform user that Notifcation failed
   */
  if (finalStatus !== "granted") {
    console.log("I ran second");
    alert("Failed to get push token for push notification!");
    return;
  }
  // Get token form getExpoPushTokenAsync method
  token = (await Notifications.getExpoPushTokenAsync()).data;

  return token;
}

// export async function registerForPushNotificationsAsync() {
//   let token;
//   if (Constants.isDevice) {
//     const { status: existingStatus } =
//       await Notifications.getPermissionsAsync();
//     let finalStatus = existingStatus;
//     if (existingStatus !== "granted") {
//       const { status } = await Notifications.requestPermissionsAsync();
//       finalStatus = status;
//     }
//     if (finalStatus !== "granted") {
//       alert("Failed to get push token for push notification!");
//       return;
//     }
//     token = (await Notifications.getExpoPushTokenAsync()).data;
//     console.log(token);
//   } else {
//     alert("Must use physical device for Push Notifications");
//   }

//   if (Platform.OS === "android") {
//     Notifications.setNotificationChannelAsync("default", {
//       name: "default",
//       importance: Notifications.AndroidImportance.MAX,
//       vibrationPattern: [0, 250, 250, 250],
//       lightColor: "#FF231F7C",
//     });
//   }

//   return token;
// }

export async function sendPushNotification(token) {
  const message = {
    to: token,
    sound: "default",
    title: "Jokes",
    body: "Open to view a joke",
    data: { route: "Home" },
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
}
