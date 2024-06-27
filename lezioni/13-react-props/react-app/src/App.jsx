import { Button } from "./components/atoms/Button/Button";
import { Header } from "./components/layout/Header/Header";
import "./styles/layout.css";

import posts from "./data.json";
import Footer from "./components/layout/Footer/Footer";

function App() {
  console.log(posts);

  return (
    <>
      {/* Content projection - proiezione del contenuto */}
      <Header brand={{ name: "Edgemony" }} className="header" />
      <main></main>
      <Footer />
      {/* <Header /> */}
    </>
  );
}

export default App;
