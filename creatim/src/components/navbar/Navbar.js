import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const menuLinks = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about-us" },
  { name: "Products Filter", url: "/products" },
  { name: "Contact Us", url: "/contact-us" },
];

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    console.log("Burger Clicked");
    setClicked(!clicked);
  };

  return (
    <div>
      <nav>
        <div className="Navbar-wrap">
          <div onClick={clickHandler} className="burger-menu">
            {clicked ? (
              <CloseIcon style={{ fontSize: "2.5rem", color: "white" }} />
            ) : (
              <MenuIcon style={{ fontSize: "2.5rem", color: "white" }} />
            )}
          </div>

          <ul className={clicked ? "menu-list" : "menu-list-close"}>
            {menuLinks.map((link, i) => {
              return (
                <li key={i}>
                  <Link
                    onClick={() => {
                      setClicked(!clicked);
                    }}
                    to={link.url}
                  >
                    {link.name}{" "}
                  </Link>
                </li>
              );
            })}

            {/* <li>
              <Link
                onClick={() => {
                  setClicked(!clicked);
                }}
                className="search"
                to="/serach"
              >
                <SearchIcon /> Serach
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
