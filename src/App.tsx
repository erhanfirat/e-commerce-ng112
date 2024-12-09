import Header from "./layout/Header";
import "./App.css";
import LeftSide from "./layout/LeftSide";
import Content from "./layout/Content";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <Header />
      <div>
        <LeftSide />
        <Content />
      </div>
      <Footer />
    </>
  );
}

export default App;
