import { ProductType } from "../App";
import { UserPanel } from "../components/UserPanel";

type HeaderProps = { products: ProductType[] };

const Header: React.FC<HeaderProps> = ({ products }: HeaderProps) => {
  return (
    <div className="header p-3 bg-sky-500 text-white flex justify-between items-center flex-col gap-2 md:flex-row lg:flex-row">
      <h1 className="text-2xl font-bold">E-Commerce</h1>
      <nav className="flex gap-2">
        <a href="#">Ana Sayfa</a>
        <a href="#">Ürünler [{products.length}]</a>
        <a href="#">İletişim</a>
      </nav>
      <UserPanel />
    </div>
  );
};

export default Header;
