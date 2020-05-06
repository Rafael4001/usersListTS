import { AxiosResponse } from 'axios';
import axios from "axios";

import { API_URL } from '../constants'

const getData = (response: AxiosResponse) => {
  return response.data;
};

export const getUsers = async () => {
  try {
    const response =
      await axios.get(API_URL)
        .then(getData)
        .then((res) => (res))
    return response
  } catch (error) {
    console.log(error)
  }
}


