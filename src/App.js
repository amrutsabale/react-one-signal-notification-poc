import { useEffect } from "react";
import OneSignal from "react-onesignal";
import "./App.css";

function App() {
  useEffect(() => {
    OneSignal.init({
      appId: "d6a64b71-5085-4e1f-bb5a-7d8140f9be63",
    });

    OneSignal.addListenerForNotificationOpened(() => {
      console.log("hi");
    });

    OneSignal.on("addListenerForNotificationOpened", function (event) {
      console.log("Notification Clicked", event);
    });

    OneSignal.on("notificationDisplay", function (event) {
      console.log("OneSignal notification displayed:", event);
    });
    OneSignal.on("notificationDismiss", function (event) {
      console.log("OneSignal notification dismissed:", event);
    });
  }, []);

  const onHandleTag = (tag) => {
    console.log("Tagging");
    OneSignal.sendTag("tech", tag).then(() => {
      console.log("tagged");
    });
  };

  return (
    <div className="App">
      <h1> React one signal push notification demo</h1>
      <button onClick={() => onHandleTag("react")}>Click</button>
    </div>
  );
}

export default App;
