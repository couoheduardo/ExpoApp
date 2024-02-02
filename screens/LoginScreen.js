import { Text, View, Image, Button} from "native-base"

import logoPNG from '../assets/logo.png';

const LoginScreen = ({navigation})=>{
    return ( 
        <View flex={1}  backgroundColor={'#759eff'}>
            <View flex={1.5} alignItems={'center'} justifyContent={'center'}>
                <Image source={logoPNG}  width={200} height={200}></Image>
            </View>
            <View flex={0.5} alignItems={'center'}>
                <Button  width={150} marginBottom={2} >Sign Up</Button>
                <Button  width={150} marginBottom={2} colorScheme="secondary" onPress={()=>{
                    navigation.navigate('HomeScreen')
                }}>
                    Login
                </Button>
                <Text style={{color:'#fff', fontSize:12}}>Forgot your password?</Text>
            </View>
        </View>
    )
}

export default LoginScreen;