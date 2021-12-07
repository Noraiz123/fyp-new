import axios from 'axios';

export const loginRequest = async (data) => {
  try {
    const result = await axios.post('http://localhost:1337/api/auth/local', data);
    if (result.status == 200) {
      return result.data;
    }
  } catch (err) {
    return {};
  }
};

export const signupRequest = async (data) => {
  try {
    const result = await axios.post('http://localhost:1337/api/auth/local/register', data);
    if (result.status == 200) {
      return result.data;
    }
  } catch (err) {
    return {};
  }
};

export const emailVerification = async (data) => {
  try {
    const result = await axios.post('http://localhost:1337/api/auth/send-email-confirmation', data);
    if (result.status == 200) {
      return result.data;
    }
  } catch (err) {
    return {};
  }
};
