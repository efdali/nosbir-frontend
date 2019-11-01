import * as actions from '../actions/denemeAction';
const initialState={
    populerler:[]
};

export default function newPostReducer(state=initialState,action){
    switch(action.type){
        case actions.POPULERLERI_GETIR:
            return Object.assign({},state,{
                populerler:action.populerler
            });
        default :
        return state;
    }
}