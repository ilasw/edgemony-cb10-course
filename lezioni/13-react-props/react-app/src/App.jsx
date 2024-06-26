import { Button } from "./components/atoms/Button/Button";
import { Header } from "./components/layout/Header/Header";
import "./styles/layout.css";

import posts from "./data.json";

function App() {
  console.log(posts);

  return (
    <>
      {/* Content projection - proiezione del contenuto */}
      <Header brand={{ name: "Edgemony" }} className="header" />

      <div className="container">
        <form style={{ marginTop: "100px" }}>
          <Button type="button">Sono un button</Button>
        </form>
      </div>
      {/* <Header /> */}
    </>
  );
}

export default App;
