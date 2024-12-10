const Footer: React.FC = () => {
  return (
    <div className="footer bg-slate-800 text-white p-3 flex">
      <h1 className="pr-5">Footer</h1>
      <nav className="flex flex-row">
        <a href="#">Ana Sayfa</a>
        <a href="#">Ürünler</a>
        <a href="#">İletişim</a>
      </nav>
    </div>
  );
};

export default Footer;
