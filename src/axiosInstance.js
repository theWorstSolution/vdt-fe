import {apiHost}  from './config';
import axios from 'axios';
import firebase from 'firebase/compat/app';
const qs = require('qs')



// ----------------------------------------------------------------------
// DEPLOY: bỏ encode = false
const axiosInstance = axios.create({
  baseURL: apiHost,
  paramsSerializer: function (params) {
    return qs.stringify(params, { encode:false})
  },
});

axiosInstance.interceptors.request.use(async function (config) {
    const idToken = await firebase.auth().currentUser?.getIdToken(/* forceRefresh */ true) 
    config.headers['x-access-token'] = idToken;
    return config;
});

export default axiosInstance;