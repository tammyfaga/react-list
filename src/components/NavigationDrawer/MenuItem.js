import React from "react";
import classNames from "classnames";

const MenuItem = ({ isActive, icon, label, onClick }) => (
  <button 
    className={classNames("navigation-drawer__menu__item", {
      "navigation-drawer__menu__item--active": isActive
    })}
    onClick={onClick}
  >
    <i className="material-icons">{icon}</i> {label}
  </button>
);

export default MenuItem;
