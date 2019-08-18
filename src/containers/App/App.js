import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import PageLayout from "../PageLayout/PageLayout";
import Routes, { menu } from "../Routes";
import SettingsProvider from "../Settings/SettingsProvider";
import NotesProvider from "../Notes/NotesProvider";

const App = () => (
  <Router>
    <SettingsProvider>
      <NotesProvider>
        <PageLayout menu={menu}>
          <Routes />
        </PageLayout>
      </NotesProvider>
    </SettingsProvider>
  </Router>
);

export default App;
