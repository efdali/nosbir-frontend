const initialState={
    isAuthenticated:false,
    user:{}
}

export default function AuthReducer(state=initialState,action){
    switch(action){
        default:
            return state;
    }
}