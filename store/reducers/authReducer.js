const initialState = {
  isAuthenticated: true,
  user: {
   nick:'serifbey-dc',
    img:'https://www.chardhamtour.in/wp-content/uploads/2019/03/user-default.png'
  },
};

export default function AuthReducer(state = initialState, action) {
  switch (action) {
    default:
      return state;
  }
}
