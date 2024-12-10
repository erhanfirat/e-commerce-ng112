import ProductCard from "../components/ProductCard";
import { productsList } from "../utils/productsData";

const ProductsPage = () => {
  return (
    <>
      <h1 className="title">ÜRÜNLER</h1>
      <div className="flex flex-wrap gap-1">
        {productsList.map((productData) => (
          <ProductCard key={productData.id} productData={productData} />
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
