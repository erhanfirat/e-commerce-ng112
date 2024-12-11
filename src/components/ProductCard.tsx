import Button from "./Button";
import { API } from "../utils/api";
import { useAppDispatch } from "../store/store";
import { sepeteEkle } from "../store/product/productSlice";
import { ProductType } from "../App";
import React from "react";
import { useHistory } from "react-router-dom";

type ProductCardProp = {
  productData: ProductType;
};

const ProductCard: React.FC<ProductCardProp> = ({
  productData,
}: ProductCardProp) => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const deleteProduct = () => {
    API.delete(`products/${productData.id}`).then(() => {
      alert("Ürün başarıyla silindi!");
    });
  };

  const sepeteEkleFn = () => {
    dispatch(sepeteEkle(productData));
  };

  const incele = () => {
    // todo: navigate to product detail page
    history.push(`urunler/${productData.id}`);
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
      <Button color="blue" onClick={incele}>
        <i className="fa fa-search" />
        İncele
      </Button>
      <Button onClick={deleteProduct} color="red">
        Sil
      </Button>
    </div>
  );
};

export default ProductCard;
