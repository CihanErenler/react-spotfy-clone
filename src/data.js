import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { BiLibrary, BiSearch } from "react-icons/bi";

export const links = [
  { label: "Home", to: "/", icon: <MdHomeFilled className="sidebar-icon" /> },
  {
    label: "Search",
    to: "/search",
    icon: <BiSearch className="sidebar-icon" />,
  },
  {
    label: "Library",
    to: "/library",
    icon: <BiLibrary className="sidebar-icon" />,
  },
];
