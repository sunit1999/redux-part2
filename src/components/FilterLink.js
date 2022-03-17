import React from "react";
import { NavLink } from "react-router-dom";

const FilterLink = ({ filter, children }) => (
  <NavLink
    to={"/" + (filter === "all" ? "" : filter)}
    style={({ isActive }) => {
      return {
        textDecoration: isActive ? "none" : "",
        color: isActive ? "red" : ""
      };
    }}
  >
    {children}
  </NavLink>
);

export default FilterLink;
