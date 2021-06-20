import axios from 'axios';

export const SetRegister = async (name, email, password) => {
  const res = await axios
    .post(`${process.env.REACT_APP_ADDRESS}/user/register`, {
      name,
      email,
      password,
    })
    .catch((error) => error.response.data);

  return res;
};

export const SetLogin = async (email, password) => {
  const res = await axios
    .post(`${process.env.REACT_APP_ADDRESS}/user/login`, {
      email,
      password,
    })
    .catch((error) => error.response.data);

  if (res.status === 200) {
    sessionStorage.setItem('isAuth', true);
    sessionStorage.setItem('auth-token', res.data.token);
    sessionStorage.setItem('user', res.data.name);
  }
  return res;
};
