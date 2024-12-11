import Button from "../components/Button";
import { API } from "../utils/api";
import { useAppDispatch, useAppSelector } from "../store/store";
import { sepeteEkle } from "../store/product/productSlice";
import { useHistory, useParams } from "react-router-dom";

type ProductIdParamType = {
  productId: string;
};

const ProductDetailPage = () => {
  const { productId } = useParams<ProductIdParamType>();
  const history = useHistory();
  const dispatch = useAppDispatch();
  const productData = useAppSelector((store) =>
    store.product.productList.find((p) => p.id === productId)
  );

  const deleteProduct = () => {
    API.delete(`products/${productData?.id}`).then(() => {
      alert("Ürün başarıyla silindi!");
    });
  };

  const sepeteEkleFn = () => {
    if (productData) {
      dispatch(sepeteEkle(productData));
    }
  };

  return (
    <>
      <div>
        <Button onClick={() => history.goBack()}>
          <i className="fa-solid fa-chevron-left"></i>
        </Button>
        <h1>Ürün Detay Sayfası</h1>
      </div>
      <div className="p-2 rounded border flex flex-col gap-1">
        <img
          src={`${productData?.img}?random=${Math.floor(
            Math.random() * 99999999
          )}`}
          className="max-w-full"
        />
        <h3>{productData?.name}</h3>
        <p className="text-sm grow">{productData?.description}</p>
        <p>{productData?.price}</p>
        <Button color="orange" onClick={sepeteEkleFn}>
          Sepete Ekle
        </Button>

        <Button onClick={deleteProduct} color="red">
          Sil
        </Button>
      </div>
    </>
  );
};

export default ProductDetailPage;
