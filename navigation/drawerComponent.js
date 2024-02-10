import { createDrawerNavigator } from "@react-navigation/drawer";
import { stackHome } from "./stackHome";
import { tabBottomMain } from "./tabBottom";
import DrawerNavigatorContent from "../DrawerNavigatorContent";

const Drawer = createDrawerNavigator();
export const DrawerComponent = () => {
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
