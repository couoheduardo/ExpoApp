import { Text, Image, Button, View} from "native-base"
import { SafeAreaView } from "react-native-safe-area-context";




const HomeScreenCalendar = ({days})=>{


 return (
    <View flexDirection={'row'}>
    {
        days.map((item, index)=>{

            return (
                <View borderRadius={10}  py={2}  flex={1}  alignItems={'center'} backgroundColor={item.mark ? '#759eff':'white'}>
                    <Text fontSize={12} fontWeight={'bold'} color={item.mark? '#fff':'#cccc'}>{item.day}</Text>
                    <Text fontWeight={'bold'} color={item.mark ? '#fff':'#000'}>{index+1}</Text>
                </View>
            )
        })
    }
</View>
 );   
}

export default HomeScreenCalendar;