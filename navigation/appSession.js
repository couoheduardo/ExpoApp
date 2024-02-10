import { NativeBaseProvider } from "native-base";
import { theme } from "../theme";
import { NavigationContainer } from "@react-navigation/native";

import { DrawerComponent } from "./drawerComponent";
import { StackAuth } from "./stackAuth";
import { connect } from "react-redux";


const AppSession = ({appDuck}) => {


    console.log(appDuck, 13)

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        {appDuck.logged === true ? (
          <DrawerComponent></DrawerComponent>
        ) : (
          <StackAuth></StackAuth>
        )}
      </NavigationContainer>
    </NativeBaseProvider>
  );
};


const mapState = (state)=>{
    return {
        appDuck: state.appDuck
    }
}


export default connect(mapState)(AppSession) ;
