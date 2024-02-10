import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import EpisodesList from "../screens/EpisodesList";


const Stack = createNativeStackNavigator();

export const stackHome = () => {
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
