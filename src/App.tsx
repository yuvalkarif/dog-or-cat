import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Upload from "./components/Upload";
import Footer from "./components/Footer";
import "./styles/components.scss";
import { useScroll } from "./hooks/useScroll";
function App() {
  let [executeScroll, elRef] = useScroll<HTMLDivElement>({
    behavior: "smooth",
    block: "start",
  });
  return (
    <div>
      <Header />
      <Main executeScroll={executeScroll} />
      <Upload elRef={elRef} />
      <Footer />
    </div>
  );
}

export default App;
