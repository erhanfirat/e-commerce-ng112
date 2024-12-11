import { ProductType } from "../App";
import ProductCard from "../components/ProductCard";

type ProductsPageProps = { products: ProductType[] };

const ProductsPage: React.FC<ProductsPageProps> = ({
  products,
}: ProductsPageProps) => {
  return (
    <>
      <h1 className="title">ÜRÜNLER</h1>
      <div className="flex flex-wrap gap-1">
        {products.map((productData) => (
          <ProductCard key={productData.id} productData={productData} />
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
