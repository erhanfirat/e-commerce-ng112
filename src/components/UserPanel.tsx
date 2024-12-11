import { useAppSelector } from "../store/store";

export const UserPanel = () => {
  const sepetUrunSayisi = useAppSelector((store) => store.product.sepet.length);

  return (
    <div className="flex items-center gap-2">
      <span className="rounded-full border-2 border-gray-400 bg-white w-[30px] center-all">
        <i className="fa-solid fa-user text-gray-400 text-xl"></i>
      </span>
      <span>ali@email.com</span>
      <div className="relative ">
        <i className="fa-solid fa-cart-shopping text-xl"></i>
        <div className="bg-red-700 absolute top-[-5px] right-[-5px] rounded-full w-[16px] h-[16px] text-sm center-all">
          {sepetUrunSayisi}
        </div>
      </div>
    </div>
  );
};
