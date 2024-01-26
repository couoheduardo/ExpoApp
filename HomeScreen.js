import { Text, Image, Button, View} from "native-base"
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreenCalendar from "./HomeScreenCalendar";


const days = [
    {day:'Lun', mark:true},
    {day:'Mar'},
    {day:'Mie'},
    {day:'Jue'},
    {day:'Vier'},
    {day:'Sab'},
    {day:'Dom'}
];

const HomeScreen = ()=>{
    return ( 
        <SafeAreaView style={{flex:1}}>
            <View flex={1}>
                <View flex={0.2} pl={5} pt={5} >
                    <Text fontWeight={'bold'}>Hello</Text>
                    <Text fontWeight={'bold'} color={'#759eff'}>Amara</Text>
                </View>
                <View  padding={2}>
                    <HomeScreenCalendar days={days} ></HomeScreenCalendar>
                </View>
                <View flex={1} backgroundColor={'amber.50'}>

                </View>
                <View flex={1} backgroundColor={'amber.700'}>

                </View>
            </View>
        </SafeAreaView>
      
    )
}

export default HomeScreen;