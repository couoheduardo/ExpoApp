import { Text, View, Image, Button } from "native-base";

import { connect } from "react-redux";
import { loggedAction } from "../redux/ducks/appDuck";
import logoPNG from "../assets/logo.png";

const LoginScreen = ({ navigation, loggedAction, dataRedux }) => {
  const data = {
    user: { name: "tonich", years: 42, city: "Merida" },
  };

  const loginButton = async () => {
    console.log(dataRedux.logged)

    await loggedAction(data);
  };

  console.log(dataRedux)


  return (
    <View flex={1} backgroundColor={"#759eff"}>
      <View flex={1.5} alignItems={"center"} justifyContent={"center"}>
        <Image source={logoPNG} width={200} height={200}></Image>
      </View>
      <View flex={0.5} alignItems={"center"}>
        <Button width={150} marginBottom={2}>
          Sign Up
        </Button>
        <Button
          width={150}
          marginBottom={2}
          colorScheme="secondary"
          onPress={() => loginButton()}
        >
          Login
        </Button>
        <Text style={{ color: "#fff", fontSize: 12 }}>
          Forgot your password?
        </Text>
      </View>
    </View>
  );
};

const mapState = (state) => {
  return {
    dataRedux: state.appDuck
  };
};

export default connect(mapState, { loggedAction })(LoginScreen);
