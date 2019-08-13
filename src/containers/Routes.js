import React from "react";
import { Route, Switch } from "react-router-dom";

import About from "./About/About";
import Notes from "./Notes/Notes";
import PageNotFound from "./PageNotFound/PageNotFound";

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
        <Notes 
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
    <Route path="/about" exact component={About} />
    <Route component={PageNotFound} />
  </Switch>
);

export default Routes;
