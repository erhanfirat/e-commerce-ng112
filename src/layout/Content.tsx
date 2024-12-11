import { useEffect } from "react";
import ProductsPage from "../pages/ProductsPage";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import { Route, Switch } from "react-router-dom";
import YumurtaPage from "../pages/YumurtaPage";
import ProductDetailPage from "../pages/ProductDetailPage";

const Content: React.FC = () => {
  useEffect(() => {
    // component did mount
    // console.warn("CONTENT COMPONENT DID MOUNT!");
  }, []);
  return (
    <div className="content p-3 grow">
      <Switch>
        <Route path={"/"} exact>
          <HomePage />
        </Route>
        <Route path={"/yumurta"}>
          <YumurtaPage />
        </Route>
        <Route path={"/urunler"} exact>
          <ProductsPage />
        </Route>
        <Route path={"/urunler/:productId"} exact>
          <ProductDetailPage />
        </Route>
        <Route path={"/iletisim"}>
          <ContactPage />
        </Route>
        <Route path={"*"}>
          <h1 className="text-3xl text-red-400">404</h1>
          <p>Sayfa bulunamadı.</p>
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
