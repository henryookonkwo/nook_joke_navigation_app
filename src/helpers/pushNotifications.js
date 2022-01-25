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
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  /*
   * if the user fails to grant notification
   * we throw an alert to inform user that Notifcation failed
   */
  if (finalStatus !== "granted") {
    alert("Failed to get push token for push notification!");
    return;
  }
  // Get token form getExpoPushTokenAsync method
  token = (await Notifications.getExpoPushTokenAsync()).data;

  return token;
}

export async function sendPushNotification(token) {
  const message = {
    to: token,
    sound: "default",
    title: "Jokes",
    body: "Open to view a joke",
    data: { route: "DisplayJoke" },
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
