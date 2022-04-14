import { useState } from 'react';
import { ApiState } from '../context/ApiProvider';

const axios = require('axios');

export const fetchApi = (api,setApi) => {
    var config = {
      method: "get",
      url: "https://fakestoreapi.com/products",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(response.data)
        setApi(response.data);
        localStorage.setItem("api",JSON.stringify(response.data))
      })
      .catch(function (error) {
        console.log(error);
      });
}