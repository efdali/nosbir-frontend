import * as actions from '../actions/authActions';
const initialState = {
  isAuthenticated: false,
  user: {
   nick:'serifbey-dc',
    img:'https://www.chardhamtour.in/wp-content/uploads/2019/03/user-default.png'
  },
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case actions.AUTHENTICATE:
      return Object.assign({},state,{
        isAuthenticated:true
      });
    default:
      return state;
  }
}
