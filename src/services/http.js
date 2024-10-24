import axios from 'axios';

import {base_url, Unofficial_Crickbuzz_Host, X_RapidAPI_Key} from '../config';
import {showLoader} from '../store/actions/utils';
import {store} from '../store';
import {showToastMsg} from '../utils/common';
import {TOAST_TYPES} from '../utils/constants';
import {isValid} from '../utils/validation';

const header = {
  accept: 'application/json',
  'content-type': 'application/json',
};

const loginHeader = {
  accept: 'application/json',
  'content-type': 'application/json',
};

class httpService {
  constructor() {
    this.setInterceptor();
  }

  setInterceptor = () => {
    let service = axios.create({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    });
    service.interceptors.request.use(
      async config => {
        config.headers = {
          'X-RapidAPI-Key': X_RapidAPI_Key,
          'X-RapidAPI-Host': Unofficial_Crickbuzz_Host,
        };
        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );
    this.service = service;
  };

  get(endpoint, options) {
    let url = endpoint;
    // console.log("URL === ", url);
    return this.service
      .get(url, options)
      .then(response => response)
      .catch(error => this.handleCatch(error));
  }

  getUrl(endpoint, options) {
    const otps = {
      method: 'GET',
      url: endpoint,
      params: options,
      headers: {
        'X-RapidAPI-Key': X_RapidAPI_Key,
        'X-RapidAPI-Host': Unofficial_Crickbuzz_Host,
      },
    };

    return axios
      .request(otps)
      .then(response => response)
      .catch(error => this.handleCatch(error));
  }

  postLogin(endpoint, payload) {
    let url = base_url + endpoint;
    return axios
      .post(url, payload, loginHeader)
      .then(response => response)
      .catch(error => this.handleCatch(error));
  }

  post(endpoint, payload) {
    let url = base_url + endpoint;
    return this.service
      .request({method: 'POST', url: url, data: payload})
      .then(response => response.data)
      .catch(error => this.handleCatch(error));
  }

  put(endpoint, payload) {
    let url = base_url + endpoint;
    return this.service
      .request({method: 'PUT', url: url, data: payload})
      .then(response => response.data)
      .catch(error => this.handleCatch(error));
  }

  delete(endpoint) {
    let url = base_url + endpoint;
    return this.service
      .delete(url, header)
      .then(response => response.data)
      .catch(error => this.handleCatch(error));
  }

  handleCatch(error) {
    // console.log('handleCatch ', error);
    store.dispatch(showLoader(false));
    if (isValid(error?.response)) {
      //The response status is an error code

      if (error?.response?.status === 401) {
        return showToastMsg(
          TOAST_TYPES.TOAST_ERROR,
          'Session expired..please login again',
        );
      }
      return showToastMsg(
        TOAST_TYPES.TOAST_ERROR,
        isValid(error?.response?.data?.message)
          ? error?.response?.data?.message
          : error?.response?.data?.statusMessage,
      );
    } else if (isValid(error?.message)) {
      //An error occurred when setting up the request
      showToastMsg(TOAST_TYPES.TOAST_ERROR, error?.message);
      return;
    } else if (isValid(error?.request)) {
      //Response not received through the request was sent
      showToastMsg(TOAST_TYPES.TOAST_ERROR, 'Something went wrong..');
    }
  }
}

export default new httpService();