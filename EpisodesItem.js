import { Text, View } from "native-base";

import Icon from "react-native-vector-icons/Ionicons";
import stylesX from "./HomsScreenStyleSheet";

const EpisodesItem = ({mb=4, title, episode, airDate})=>{
    return (
        <View
        backgroundColor={"purple.400"}
        width={"85%"}
        borderRadius={10}
        style={stylesX.shadowProp}
        mb={mb}
      >
        <View padding={7}>
          <View flexDirection={"row"}>
            <View width={50} justifyContent={"center"}>
              <Icon name="bonfire" size={20} color="#900" />
            </View>
            <View flex={1}>
              <Text color={"#fff"} fontSize={25}>
                {title}
              </Text>
            </View>
          </View>
          <View flexDirection={"row"}>
            <View width={50} justifyContent={"center"}>
              <Icon name="heart" size={20} color="#900" />
            </View>
            <View>
              <Text color={"#fff"} fontSize={25}>
                {episode}
              </Text>
            </View>
          </View>
          <View flexDirection={"row"}>
            <View width={50} justifyContent={"center"}>
              <Icon name="heart" size={20} color="#900" />
            </View>
            <View>
              <Text color={"#fff"} fontSize={25}>
                {airDate}
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
}

export default EpisodesItem;