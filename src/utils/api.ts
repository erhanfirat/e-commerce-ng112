import axios from "axios";

export const API = axios.create({
  baseURL: "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/",
  headers: {
    Authorization: "TOKEN_HERE",
  },
});

// API.get("products")
/*
export const doRequest = ({ reqType = "get", endpoint, payload, config }) => {
  return API[reqType](endpoint, payload, config)
    .then((res) => res.data)
    .catch((err) => {
      // Uygulama genelinde hata kontrolü
    });
};

// endpoints
export const getProductsParams = {
  reqType: "get",
  endpoint: "products",
};

export const createProductsParams = (newProductData) => ({
  reqType: "get",
  endpoint: "products",
  payload: newProductData
});


doRequest(createProductsParams(newProductD));
*/

