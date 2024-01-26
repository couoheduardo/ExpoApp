import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import { Button, NativeBaseProvider, Text} from "native-base";
import { theme } from './theme';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import EpisodesList from './EpisodesList';


//npx patch-package native-base
export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
     <EpisodesList></EpisodesList>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
