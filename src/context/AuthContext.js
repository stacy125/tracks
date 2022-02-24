import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signup':
            return { errorMessage: '', token: action.payload };
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return async ({ email, password}) => {
        //make api request to sign up with email and password
        //if sign up, modify our state, and say that we are authenticated
        // if signing up fails, reflect an error message
        try {
            const response = await trackerApi.post('/signup', {email, password});
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({ type: 'signup', payload: response.data.token });

            navigate('TrackList');
        } catch (error) {
            dispatch({
                type: 'add_error',
                payload: 'Something went wrong with sign up.'
            })
        }
    };
};

const signin = (dispatch) => {
    return ({ email, password}) => {
        //make api request to sign in with email and password

        //if we sign in, modify our state, and say that we are authenticated

        // if signing up fails, we need to reflect an error message
    };
};
const signout = (dispatch) => {
    return () => {
        //sign out
    };
};

export const { Provider, Context} = createDataContext(
    authReducer,
    { signin, signup, signout},
    { token: null, errorMessage: "" }
);