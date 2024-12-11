import Header from "./layout/Header";
import "./App.css";
import LeftSide from "./layout/LeftSide";
import Content from "./layout/Content";
import Footer from "./layout/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

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
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    // component did mount
    // console.warn("APP COMPONENT DID MOUNT!");
    // Tüm uygulama başarıyla yüklendi
    // TODO: Ürün listesini backend den çek
    const productsPromise = axios.get(
      "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products"
    );

    productsPromise
      .then((res) => {
        console.log("Serverdan cevap geldi: ", res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Serverdan cevap geldi: ", err);
      })
      .finally(() => {
        console.warn("HTTP Request sonlandı!");
      });
  }, []);

  return (
    <>
      <Header products={products} />
      <div className="flex flex-col md:flex-row">
        <LeftSide />
        <Content products={products} />
      </div>
      <Footer />
    </>
  );
}

export default App;
