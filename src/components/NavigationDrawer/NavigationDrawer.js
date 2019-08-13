import React from 'react';
import className from 'classnames';
import { withRouter } from "react-router-dom";

import MenuItem from "./MenuItem";

import "./navigation-drawer.scss"

const NavigationDrawer = ({ menu, isOpen, onCloseMenu, history, location }) => (
  <div 
    className={className("navigation-drawer", {
      "navigation-drawer--open": isOpen 
    })}
  >
    <div className="navigation-drawer__head">
      <button className="navigation-drawer__head__button" 
        onClick={onCloseMenu}>
        <i className="material-icons">close</i>
      </button>
    </div>
    <div className="navigation-drawer__menu">
      {menu.map(item => (
        <MenuItem
          key={item.icon}
          isActive={location.pathname === item.path}
          onClick={() => {
            onCloseMenu();
            history.push(item.path); 
          }}
          icon={item.icon}
          label={item.label}
        />
      ))}
    </div>
  </div>
);

export default withRouter(NavigationDrawer);
