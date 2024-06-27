import { Button } from "./components/atoms/Button/Button";
import { Header } from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Main from "./components/components/Main/Main";

import posts from "@/assets/data.json";
import "./styles/layout.css";

function App() {
  return (
    <>
      {/* Content projection - proiezione del contenuto */}
      <Header brand={{ name: "Edgemony" }} className="header" />

      <Main posts={posts} />

      <Footer>
        <button>Ciao</button>
      </Footer>
      {/* <Header /> */}
    </>
  );
}

export default App;
