const Header: React.FC = () => {
  return (
    <div className="header p-3 bg-sky-500 text-white flex justify-between items-center flex-col md:flex-row lg:flex-row">
      <h1 className="">E-Commerce</h1>
      <nav>
        <a href="#">Ana Sayfa</a>
        <a href="#">Ürünler</a>
        <a href="#">İletişim</a>
      </nav>
      <div>User Panel</div>
    </div>
  );
};

export default Header;
