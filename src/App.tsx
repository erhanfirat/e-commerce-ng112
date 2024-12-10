import Header from "./layout/Header";
import "./App.css";
import LeftSide from "./layout/LeftSide";
import Content from "./layout/Content";
import Footer from "./layout/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // component did mount
    console.warn("APP COMPONENT DID MOUNT!");
    // Tüm uygulama başarıyla yüklendi
    // TODO: Ürün listesini backend den çek
  }, []);

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
