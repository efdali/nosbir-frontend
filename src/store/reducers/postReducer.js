import {ADD_POST} from '../actions';
const initialState={
    post:{
        title:"ok"
    }
};

export default function postReducer(state=initialState,action){
    switch(action.type){
        case ADD_POST:
            return Object.assign({},state,{post : {title:"ok"}})
        default:
            return state;
    }
}