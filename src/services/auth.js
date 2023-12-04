import { API } from '../config/axios.js';

export const RegisterCall = async (params) => {
  try {
    let res = await API.post('api/app/register', params);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const LoginCall = async (params) => {
  try {
    let res = await API.post('api/app/login', params);
    return res.data;
  } catch (error) {
    throw error;
  }
};
export const ProfileCall = async () => {
  try {
    let res = await API.get('api/app/profile');
    return res.data;
  } catch (error) {
    throw error;
  }
};






