import React, { useState } from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Text, View } from "native-base";

import { Linking, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { loggedOutAction } from "./redux/ducks/appDuck";

const DrawerNavigatorContent = ({
  navigation,
  setAttribute,
  navigationDuck,
  loggedOutAction
}) => {
  return (
    <DrawerContentScrollView
      bounces={true}
      nestedScrollEnabled={true}
      contentContainerStyle={{ flex: 1, backgroundColor: "#ccc" }}
    >
      <View my={10} alignItems={"center"} justifyContent={"center"}>
        {/*<Image source={imgLogo} width={161} height={120} borderRadius={60} resizeMode={'stretch'}></Image>*/}
        {/*<Text fontSize={'md'} mt={5} textAlign={'center'}>{appDuck.user.firstName}{'\n'}{appDuck.user.lastName}</Text>*/}
      </View>
      <View flex={1}>
        <View flex={1}>
          <View flexDirection={"row"} mb={10}>
            <View flex={0.2} alignItems={"center"} justifyContent={"center"}>
              {/*<Image source={iconHome} style={{width: 20, height: 20}}></Image>*/}
            </View>
            <View flex={1} justifyContent={"center"}>
              <Text fontSize={"5xl"} fontFamily={"PantonBlackCaps"}>
                Expo
              </Text>
            </View>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
            <View flexDirection={"row"} mb={4}>
              <View flex={0.2} alignItems={"center"} justifyContent={"center"}>
                {/*<Image source={iconHome} style={{width: 20, height: 20}}></Image>*/}
              </View>
              <View flex={1} justifyContent={"center"}>
                <Text fontSize={"lg"} fontFamily={"PantonRegular"}>
                  Home
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("EpisodesList", { x: 10 })}
          >
            <View flexDirection={"row"} mb={4}>
              <View flex={0.2} alignItems={"center"} justifyContent={"center"}>
                {/*<Image source={iconHome} style={{width: 20, height: 20}}></Image>*/}
              </View>
              <View flex={1} justifyContent={"center"}>
                <Text fontSize={"lg"} fontFamily={"PantonRegular"}>
                  Settings
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("LocationsScreen")}
          >
            <View flexDirection={"row"} mb={4}>
              <View flex={0.2} alignItems={"center"} justifyContent={"center"}>
                {/*<Image source={iconHelp} style={{width: 20, height: 20}}></Image>*/}
              </View>
              <View flex={1} justifyContent={"center"}>
                <Text fontSize={"lg"} fontFamily={"PantonRegular"}>
                  Episodes
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={async () => {
              await loggedOutAction();
            }}
          >
            <View flexDirection={"row"} mb={4}>
              <View flex={0.2} alignItems={"center"} justifyContent={"center"}>
                {/*<Image source={iconHelp} style={{width: 20, height: 20}}></Image>*/}
              </View>
              <View flex={1} justifyContent={"center"}>
                <Text fontSize={"lg"} fontFamily={"PantonRegular"}>
                  Cerrar Sesión
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};


const mapState = (state)=>{
  return {

  }
}


export default connect(mapState,{loggedOutAction})(DrawerNavigatorContent) ;
