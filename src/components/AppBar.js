import React from 'react';

const AppBar = () => (
  <div className="app-bar">
    <div className="app-bar__container">
      <span className="app-bar__brand">React List</span>
      <button className="app-bar__action">
        <i className="material-icons">refresh</i>
      </button>
      <button className="app-bar__action">
        <i className="material-icons">save</i>
      </button>
    </div>
  </div>
);

export default AppBar;
