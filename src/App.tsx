import Header from "./layout/Header";
import "./App.css";
import LeftSide from "./layout/LeftSide";
import Content from "./layout/Content";
import Footer from "./layout/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { API, doRequest, getProductsParams } from "./utils/api";
import { useAppDispatch } from "./store/store";
import { setProductList } from "./store/product/productSlice";

export type ProductType = {
  createdAt: string;
  name: string;
  img: string;
  description: string;
  stock: string;
  price: string;
  active: boolean;
  color: string;
  id: string;
};

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // component did mount
    // console.warn("APP COMPONENT DID MOUNT!");
    // Tüm uygulama başarıyla yüklendi
    // TODO: Ürün listesini backend den çek
    const productsPromise = API.get("products"); // doRequest(getProductsParams); //

    productsPromise
      .then((res) => {
        console.log("Serverdan cevap geldi: ", res.data);
        dispatch(setProductList(res.data));
      })
      .catch((err) => {
        console.error("Serverdan cevap geldi: ", err);
      })
      .finally(() => {
        console.warn("HTTP Request sonlandı!");
      });
  }, []);

  console.warn("APP RENDERED ********************** ");
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row">
        <LeftSide />
        <Content />
      </div>
      <Footer />
    </>
  );
}

export default App;
