import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const menuItems = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Menu",
      path: "menu",
    },
    {
      id: 3,
      name: "About",
      path: "about",
    },
    {
      id: 4,
      name: "Contact",
      path: "contact",
    },
  ];
  return (
    <nav>
      <ul className="nav-flexbox">
        {menuItems.map((item) => (
          <li key={item.id} className={styles["nav-item"]}>
              <NavLink to={item.path} className={({ isActive }) => isActive ? styles.activeNavItem : ""}>
                {item.name}
              </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
