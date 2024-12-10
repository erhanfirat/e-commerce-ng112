import { useEffect } from "react";
import ProductsPage from "../pages/ProductsPage";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";

const Content: React.FC = () => {
  useEffect(() => {
    // component did mount
    console.warn("CONTENT COMPONENT DID MOUNT!");
  }, []);
  return (
    <div className="content p-3 grow">
      <HomePage />
      <ProductsPage />
      <ContactPage />
    </div>
  );
};

export default Content;
