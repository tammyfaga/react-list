import React from 'react';

import NewNote from './NewNote';
import NoteList from './NoteList';
import Error from './Error';

const Notes = ({ reloadHasError }) => {
  return <h1>Notes</h1>;
  /*
  if (reloadHasError) {
    return <Error onRetry={this.handleReload} />;
  }

  return (
    <Fragment>
      <NewNote onAddNote={this.handleAddNote} />
      <NoteList 
        notes={notes} 
        onMove={this.handleMove} 
        onDelete={this.handleDelete}
        onEdit={this.handleEdit}
      />
    </Fragment>
  );
  */
};

export default Notes;
