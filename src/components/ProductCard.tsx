import axios from "axios";
import Button from "./Button";
import { API } from "../utils/api";
import { useAppDispatch } from "../store/store";
import { sepeteEkle } from "../store/product/productSlice";

const ProductCard = ({ productData }) => {
  const dispatch = useAppDispatch();

  const deleteProduct = () => {
    API.delete(`products/${productData.id}`).then((res) => {
      alert("Ürün başarıyla silindi!");
    });
  };

  const sepeteEkleFn = () => {
    dispatch(sepeteEkle(productData));
  };

  return (
    <div className="basis-[240px] grow p-2 rounded border flex flex-col gap-1">
      <img
        src={`${productData.img}?random=${Math.floor(
          Math.random() * 99999999
        )}`}
        className="max-w-full"
      />
      <h3>{productData.name}</h3>
      <p className="text-sm grow">{productData.description}</p>
      <p>{productData.price}</p>
      <Button color="orange" onClick={sepeteEkleFn}>
        Sepete Ekle
      </Button>
      <Button onClick={deleteProduct} color="red">
        Sil
      </Button>
    </div>
  );
};

export default ProductCard;
