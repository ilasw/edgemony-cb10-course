import "./Header.css";

import viteLogo from "@/assets/vite.svg";

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
          <div className="logo">
            <img style={{ display: "inline-block" }} src="/react.svg" />
            <img style={{ display: "inline-block" }} src={viteLogo} />-{" "}
            {brand.name}
          </div>
          <Menu />
          {children}
        </div>
      </div>
    </header>
  );
}

function Menu() {
  const items = [
    { label: "About us" },
    { label: "Blog", href: "https://google.it" },
    { label: "Shop" },
  ];

  return (
    <nav className="nav">
      <ul className="list">
        {items.map((item, index, array) => (
          <MenuItem
            key={`${item.label}-${index}`}
            label={item.label}
            href={item.href}
          />
        ))}
      </ul>
    </nav>
  );
}

function MenuItem(props) {
  const { label, href = "#" } = props;
  return (
    <li className="item">
      <a href={href}>{label}</a>
    </li>
  );
}

export { Header };
