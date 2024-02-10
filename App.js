import { StyleSheet } from "react-native";
import { LogBox } from "react-native";
import { Provider, connect, useSelector } from "react-redux";
import generateStore from "./redux/store";
import AppSession from "./navigation/appSession";

const store = generateStore();

LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <Provider store={store}>
      <AppSession></AppSession>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
