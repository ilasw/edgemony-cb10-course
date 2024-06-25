import { Header } from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <div className="container">
          <h1>CB10</h1>

          <div className="card">
            <button onClick={() => console.log("ciao")}>Click me!</button>
          </div>
        </div>
      </main>
      <footer className="footer">Footer</footer>
    </>
  );
}

export default App;
