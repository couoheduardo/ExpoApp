import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NativeBaseProvider } from "native-base";
import { theme } from "./theme";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import EpisodesList from "./screens/EpisodesList";

import Settings from "./screens/Settings";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { LogBox } from "react-native";
import DrawerNavigatorContent from "./DrawerNavigatorContent";
LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();
const Stack = createNativeStackNavigator();

// npm install @react-navigation/drawer
// npx expo install react-native-gesture-handler react-native-reanimated


const user = {
  name: 'Eduardo Couoh',
  city: 'Merida',
  sexo:'M'
}

const Tab = createBottomTabNavigator();

const StackAuth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const stackHome = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="EpisodesList" component={EpisodesList} />
    </Stack.Navigator>
  );
};

const stackSettings = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="EpisodesList" component={EpisodesList} />
    </Stack.Navigator>
  );
};

const tabBottomMain = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "stackHome") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "stackSettings") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="stackHome"
        component={stackHome}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="stackSettings"
        component={stackSettings}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const DrawerComponent = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerNavigatorContent {...props} />}
      options={{ drawerPosition: "right" }}
    >
      <Drawer.Screen name="HomeScreen" component={stackHome} />
      <Drawer.Screen name="Settings" component={tabBottomMain} />
    </Drawer.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const logguedIn = true;

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        {logguedIn === true ? (
          <DrawerComponent></DrawerComponent>
        ) : (
          <StackAuth></StackAuth>
        )}
      </NavigationContainer>
    </NativeBaseProvider>
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
