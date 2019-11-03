import http from '../../utils/http';
import * as actions from '../actions/searchAction';
const initialState={
    users:[],
    posts:[],
    groups:[],
    comments:[]
};

export default function searchReducer(state=initialState,action){
    switch(action.type){

        default:
            return state;
    }
}