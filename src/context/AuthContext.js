import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return ({ email, password}) => {
        //make api request to sign up with email and password

        //if we sign up, modify our state, and say that we are authenticated

        // if signing up fails, we need to reflect an error message
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
    { isSignIn: false }
);