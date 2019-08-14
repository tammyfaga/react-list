import React from "react";
import { Route, Switch } from "react-router-dom";

import AboutPage from "./About/AboutPage";
import NotesPage from "./Notes/NotesPage";
import SettingsPage from "./Settings/SettingsPage";
import PageNotFound from "./PageNotFound/PageNotFound";

export const menu = [
  { icon: "note", label: "Notas", path: "/" },
  { icon: "settings", label: "Configurações", path: "/settings" },
  { icon: "info", label: "Sobre", path: "/about" }
];

const Routes = ({
  notes,
  reloadHasError,
  onRetry,
  onAddNote,
  onMove, 
  onDelete,
  onEdit
}) => (
  <Switch>
    <Route path="/" 
      exact 
      render={props => (
        <NotesPage
          notes={notes}
          reloadHasError={reloadHasError}
          onRetry={onRetry}
          onAddNote={onAddNote}
          onMove={onMove} 
          onDelete={onDelete}
          onEdit={onEdit}
          {...props}
        />
      )}
    />
    <Route path="/settings" component={SettingsPage} />
    <Route path="/about" exact component={AboutPage} />
    <Route component={PageNotFound} />
  </Switch>
);

export default Routes;
