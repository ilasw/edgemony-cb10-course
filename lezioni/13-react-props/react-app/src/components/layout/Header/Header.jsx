import "./Header.css";

// ogni componente ha come primo parametro un oggetto "props"
// se quando usato viene messo del contenuto dentro il mio componente, questo sarà disponibile dentro props.children
function Header(props) {
  // destructoring
  const { brand, children, ...attrs } = props; // const children = props.children;
  //   console.log({props}) // { "props": props};

  console.log("props", props);

  return (
    <header {...attrs}>
      <div className="container">
        <div className="wrapper">
          <div className="logo">Logo - {brand.name}</div>
          <Menu />
          {children}
        </div>
      </div>
    </header>
  );
}

function Menu() {
  return (
    <nav className="nav">
      <ul className="list">
        <li className="item">
          <a href="#">About us</a>
        </li>
        <li className="item">
          <a href="#">Blog</a>
        </li>
      </ul>
    </nav>
  );
}

export { Header };
