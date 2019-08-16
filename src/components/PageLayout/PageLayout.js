import React from 'react';

import AppBar from "../AppBar/AppBar";
import NavigationDrawer from "../NavigationDrawer/NavigationDrawer";
import withNotes from "../../containers/Notes/withNotes";

import "./page-layout.scss";

const PageLayout = ({ 
  children,
  isLoading,
  saveHasError,
  onSaveRetry,
  onOpenMenu,
  isMenuOpen,
  onCloseMenu,
  menu
}) => (
  <div>
    <AppBar 
      isLoading={isLoading} 
      saveHasError={saveHasError} 
      onSaveRetry={onSaveRetry}
      onOpenMenu={onOpenMenu}
    />
    <div className="container">
      {children}
    </div>
    <NavigationDrawer 
      menu={menu}
      isOpen={isMenuOpen}
      onCloseMenu={onCloseMenu}
    />
  </div>
);

export default withNotes(PageLayout);
