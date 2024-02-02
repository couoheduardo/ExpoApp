import { Text, Image, Button, View } from "native-base";
import girlRunning from "../assets/girl.png";


const HomeScreenKM = ({navigation})=>{
    return (
        <View pb={4} flexDirection={"row"}>
        <View flex={1} alignItems={"center"} justifyContent={"center"}>
          <Image
            source={girlRunning}
            width={150}
            resizeMode={"contain"}
          ></Image>
        </View>
        <View flex={1} justifyContent={"center"}>
          <Text fontSize={14} bold>
            Today you run for:
          </Text>
          <Text fontSize={20} bold color={"purple.400"}>
            5.31 KM
          </Text>
          <Button width={100} size={"xs"} mt={2} onPress={()=> navigation.navigate('EpisodesList',{x:11})}>
            Details
          </Button>
          <Button width={100} size={"xs"} mt={2} onPress={()=> navigation.navigate('EpisodesList',{x:10})}>
            Details
          </Button>
        </View>
      </View>
    )
}

export default HomeScreenKM;