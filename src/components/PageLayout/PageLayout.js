import React from 'react';

import AppBar from "../AppBar/AppBar";
import NavigationDrawer from "../NavigationDrawer/NavigationDrawer";

import "./page-layout.scss";

const PageLayout = ({ 
  children,
  isLoading,
  saveHasError,
  onSaveRetry,
  onOpenMenu,
  isMenuOpen,
  onCloseMenu 
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
      isOpen={isMenuOpen}
      onCloseMenu={onCloseMenu}
    />
  </div>
);

export default PageLayout;
