import { NavLink } from "react-router-dom";
import { UserPanel } from "../components/UserPanel";
import { useAppSelector } from "../store/store";

const Header: React.FC = () => {
  const productLength = useAppSelector(
    (store) => store.product.productList.length
  );
  const yumurtaAdedi = useAppSelector((store) => store.counter.value);
  return (
    <div className="header p-3 bg-sky-500 text-white flex justify-between items-center flex-col gap-2 md:flex-row lg:flex-row">
      <h1 className="text-2xl font-bold">E-Commerce</h1>
      <nav className="flex gap-2 items-center">
        <NavLink exact to="/">
          Ana Sayfa
        </NavLink>
        <NavLink exact to="/urunler">
          Ürünler [{productLength}]
        </NavLink>
        <NavLink exact to="/yumurta">
          Yumurta [{yumurtaAdedi}]
        </NavLink>
        <NavLink exact to="/iletisim">
          İletişim
        </NavLink>
      </nav>
      <UserPanel />
    </div>
  );
};

export default Header;
