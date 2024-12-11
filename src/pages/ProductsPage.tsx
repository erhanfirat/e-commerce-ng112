import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import { API } from "../utils/api";
import { useAppSelector } from "../store/store";

const ProductsPage: React.FC = () => {
  const productList = useAppSelector((store) => store.product.productList);

  const createProduct = () => {
    const newProduct = {
      createdAt: "2024-12-10T09:20:32.843Z",
      name: "Kırmızı Biber",
      img: "https://loremflickr.com/640/480/food",
      description:
        "Esse temporibus atque. Quis doloremque veniam natus voluptate excepturi culpa. Velit suscipit repellat. Ipsam praesentium eos velit illum voluptatum voluptates aut consectetur eveniet. Quisquam laborum nisi explicabo ipsam doloremque blanditiis accusamus.",
      stock: "5",
      price: "303.00",
      active: true,
      color: "salmon",
    };

    API.post("products", newProduct).then(() => {
      console.log("Ürün eklendi");
    });
  };
  return (
    <>
      <h1 className="title">ÜRÜNLER</h1>
      <Button onClick={createProduct}>Ürün Ekle</Button>
      <div className="flex flex-wrap gap-1">
        {productList.map((productData) => (
          <ProductCard key={productData.id} productData={productData} />
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
