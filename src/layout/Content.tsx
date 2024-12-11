import { useEffect } from "react";
import ProductsPage from "../pages/ProductsPage";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import { ProductType } from "../App";

type ContentProps = { products: ProductType[] };

const Content: React.FC<ContentProps> = ({ products }: ContentProps) => {
  useEffect(() => {
    // component did mount
    // console.warn("CONTENT COMPONENT DID MOUNT!");
  }, []);
  return (
    <div className="content p-3 grow">
      <HomePage />
      <ProductsPage products={products} />
      <ContactPage />
    </div>
  );
};

export default Content;
