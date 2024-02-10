import { Text, Image, Button, View } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreenCalendar from "./HomeScreenCalendar";

import HomeScreenKM from "./HomeScreenKM";
import Icon from "react-native-vector-icons/Ionicons";
import stylesX from "./HomsScreenStyleSheet";
import { connect } from "react-redux";

const days = [
  { day: "Lun", mark: true },
  { day: "Mar" },
  { day: "Mie" },
  { day: "Jue" },
  { day: "Vier" },
  { day: "Sab" },
  { day: "Dom" },
];

const HomeScreen = ({ navigation,appDuck }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View flex={1}>
        <View flex={0.3} pl={5}>
          <Text fontWeight={"bold"}>Hello</Text>
          <Text fontWeight={"bold"} color={"#759eff"}>
            {appDuck.user.name}
          </Text>
        </View>
        <View padding={2} pb={4}>
          <HomeScreenCalendar days={days}></HomeScreenCalendar>
        </View>
        <View>
          <HomeScreenKM navigation={navigation}></HomeScreenKM>
        </View>

        <View alignItems={"center"} justifyContent={"center"}>
          <View
            backgroundColor={"purple.400"}
            width={"85%"}
            marginTop={10}
            marginBottom={10}
            borderRadius={10}
            style={stylesX.shadowProp}
          >
            <View padding={7}>
              <View flexDirection={"row"}>
                <View width={50} justifyContent={"center"}>
                  <Icon name="bonfire" size={20} color="#900" />
                </View>
                <View flex={1}>
                  <Text color={"#fff"} fontSize={25}>
                    3680
                  </Text>
                </View>
              </View>
              <View flexDirection={"row"}>
                <View width={50} justifyContent={"center"}>
                  <Icon name="heart" size={20} color="#900" />
                </View>
                <View>
                  <Text color={"#fff"} fontSize={25}>
                    98
                  </Text>
                </View>
              </View>
              <View flexDirection={"row"}>
                <View width={50} justifyContent={"center"}>
                  <Icon name="heart" size={20} color="#900" />
                </View>
                <View>
                  <Text color={"#fff"} fontSize={25}>
                    460
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapState = (state) => {
  return {
    appDuck: state.appDuck,
  };
};

export default connect(mapState)(HomeScreen);
