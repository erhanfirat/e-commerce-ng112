const LeftSide: React.FC = () => {
  return (
    <div className="left-side p-3 bg-slate-200 hidden md:block basis-[200px]">
      <h3 className="text-center">Kategoriler</h3>
      <nav className="flex flex-col items-center">
        <a href="#">Tişört</a>
        <a href="#">Kazak</a>
        <a href="#">Pantalon</a>
        <a href="#">Ayakkabı</a>
        <a href="#">Ceket</a>
        <a href="#">Elbise</a>
        <a href="#">Çanta</a>
        <a href="#">Takı</a>
      </nav>
    </div>
  );
};

export default LeftSide;
