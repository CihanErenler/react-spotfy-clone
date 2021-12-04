import React from "react";
import { Link } from "react-router-dom";

function SideLink({ label, to, icon, active, index, setActive }) {
  return (
    <Link
      to={to}
      className={`${active === index ? "sidebar-link active" : "sidebar-link"}`}
      onClick={() => setActive(index)}
    >
      {icon}
      {label}
    </Link>
  );
}

export default SideLink;
