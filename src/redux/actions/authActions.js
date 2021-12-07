import { loginRequest, signupRequest } from '../../apis/auth';

const loginAction = (payload) => {
  return {
    type: 'START_LOGIN_SESSION',
    payload,
  };
};

const signupAction = (payload) => {
  return {
    type: 'START_SIGNUP_SESSION',
    payload,
  };
};

export const StartLogin = (data) => async (dispatch) => {
  try {
    const auth = await loginRequest(data);
    if (auth && auth.jwt) {
      dispatch(loginAction(auth));
      window.location.href = '/';
    }
  } catch (error) {
    console.log(error);
  }
};

export const StartSignup = (data) => async (dispatch) => {
  try {
    const auth = await signupRequest(data);
    if (auth && auth.jwt) {
      dispatch(signupAction(auth));
      window.location.href = '/';
    }
  } catch (error) {
    console.log(error);
  }
};
