const axios = require("axios");

export const fetchApi = () => {
  var config = {
    method: "get",
    url: "https://fakestoreapi.com/products",
    headers: {},
  };

  axios(config)
    .then(function (response) {
      localStorage.setItem("api", JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};
