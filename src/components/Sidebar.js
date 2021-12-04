import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { useGlobalContext } from "../context";
import SideLink from "./SideLink";

function Sidebar() {
  const { links } = useGlobalContext();
  const [active, setActive] = useState(0);

  return (
    <aside className="sidebar">
      <div className="logo-wrapper">
        <img src={logo} alt="spotify" />
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
