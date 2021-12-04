import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { BiLibrary } from "react-icons/bi";

export const links = [
  { label: "Home", to: "/", icon: <MdHomeFilled className="sidebar-icon" /> },
  {
    label: "Search",
    to: "/search",
    icon: <BsSearch className="sidebar-icon" />,
  },
  {
    label: "Library",
    to: "/library",
    icon: <BiLibrary className="sidebar-icon" />,
  },
];
