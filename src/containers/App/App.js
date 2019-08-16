import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import { PageLayout } from "../../components";
import Routes, { menu } from "../Routes";
import SettingsProvider from "../Settings/SettingsProvider";
import NotesProvider from "../Notes/NotesProvider";

class App extends React.Component {
  state = {
    isMenuOpen: false,
  };

  handleOpenMenu = () => {
    this.setState({ isMenuOpen: true });
  };

  handleCloseMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  render() {
    const {
      isMenuOpen, 
    } = this.state;

    return (
      <Router>
        <SettingsProvider>
          <NotesProvider>
            <PageLayout
              isMenuOpen={isMenuOpen}
              menu={menu}
              onOpenMenu={this.handleOpenMenu}
              onCloseMenu={this.handleCloseMenu}
              >
              <Routes />
            </PageLayout>
          </NotesProvider>
        </SettingsProvider>
      </Router>
    );
  }
}

export default App;
