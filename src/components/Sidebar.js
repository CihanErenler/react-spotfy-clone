import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { useGlobalContext } from "../context";
import SideLink from "./SideLink";
import { Link } from "react-router-dom";

function Sidebar() {
  const { links } = useGlobalContext();
  const [active, setActive] = useState(0);

  return (
    <aside className="sidebar">
      <div className="logo-wrapper">
        <Link to="/">
          <img src={logo} alt="spotify" />
        </Link>
      </div>
      <section className="links">
        {links.map((link, index) => {
          return (
            <SideLink
              key={index}
              {...link}
              active={active}
              index={index}
              setActive={setActive}
            />
          );
        })}
      </section>
    </aside>
  );
}

export default Sidebar;
