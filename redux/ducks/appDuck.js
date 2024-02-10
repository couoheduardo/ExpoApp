import AsyncStorage from "@react-native-async-storage/async-storage";

const initialData = {
    logged: null,
    user: null
}

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const appDuck = (state = initialData, action) => {
    switch (action.type) {
        case LOGIN:
            return {...state, logged: true, ...action.payload}
        case LOGOUT:
            return {...state, logged: false, user: null}
        default:
            return state
    }
}

export let loggedAction = (data) => {
    return async (dispatch, getState) => {
        dispatch({type: LOGIN, payload: data});
    };
}

export let loggedOutAction = () => {
    return async (dispatch, getState) => {
        await AsyncStorage.setItem('@user', '');
        await AsyncStorage.setItem('@barbershopId', '');
        dispatch({type: LOGOUT});
    };
}

export const bootAction = () => {
    return async (dispatch, getState) => {

        try {
            const user = await AsyncStorage.getItem('@user');
            const barbershopId = await AsyncStorage.getItem('@barbershopId');
            console.log(barbershopId)
            if (user) {
                dispatch({type: LOGIN, payload: JSON.parse(user)});
            }
        } catch (e) {
            console.log(e, 37)
        }

    };
}


export default appDuck;