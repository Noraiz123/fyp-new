const initialState = {
  id: null,
  username: '',
  email: '',
  isSignedIn: false,
  token: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_LOGIN_SESSION': {
      const {
        jwt,
        user: { username, email, id },
      } = action.payload;
      return { ...state, id, username, email, token: jwt, isSignedIn: true };
    }

    case 'START_SIGNUP_SESSION': {
      const {
        jwt,
        user: { username, email, id },
      } = action.payload;
      return { ...state, id, username, email, token: jwt, isSignedIn: true };
    }

    default:
      return initialState;
  }
};

export default authReducer;
