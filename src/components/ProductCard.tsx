import Button from "./Button";

const ProductCard = ({ productData }) => {
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
      <Button color="orange">Sepete Ekle</Button>
    </div>
  );
};

export default ProductCard;
