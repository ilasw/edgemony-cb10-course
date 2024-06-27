import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="wrapper">
          <div className="logo">Logo</div>
          <nav className="nav">
            <MenuList />
          </nav>
        </div>
      </div>
    </footer>
  );
};

function MenuList() {
  const menus = [
    {
      id: 1,
      label: "Shop and Learn",
      items: [
        { label: "Company info" },
        { label: "Careers" },
        { label: "Altre cose" },
      ],
    },

    {
      id: 2,
      label: "Account",
      items: [
        { label: "Company info" },
        { label: "Careers" },
        { label: "Altre cose", items: [{ label: "sono un nipote" }] },
      ],
    },

    {
      id: 3,
      label: "Account",
    },
  ];

  return (
    <ul className="menu">
      {menus.map((menu) => (
        <Menu key={menu.id} menu={menu} />
      ))}
    </ul>
  );
}

function Menu(props) {
  const { label, items = [], href = "#" } = props.menu;

  return (
    <li className="item">
      <a href={href}>{label}</a>

      {/* {items.length ? (
        <ul>
          {items.map((item, index) => (
            <li key={index} className="item subitem">
              <a href="#">{item.label}</a>
            </li>
          ))}
        </ul>
      ) : null} */}

      {/* Stiamo facendo un controllo "se esiste almeno un items" e dopo di che stampiamo una lista usando il map */}
      {/* {Boolean(items.length) && (
        <ul>
          {items.map((item, index) => (
            <li key={index} className="item subitem">
              <a href="#">{item.label}</a>
            </li>
          ))}
        </ul>
      )} */}

      {Boolean(items.length) && (
        <ul>
          {items.map((item, index) => (
            <Menu key={index} menu={item} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default Footer;
