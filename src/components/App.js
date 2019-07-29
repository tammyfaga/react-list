import React from 'react';
import uuid from "uuid/v1";

import NewNote from './NewNote';
import NoteList from './NoteList';
import AppBar from './AppBar';

class App extends React.Component {
  state = {
    notes: [],
    isLoading: false
  };

  componentDidMount() {
    this.handleReload();
  }

  handleAddNote = text => {
    this.setState(prevState => {
      const notes = prevState.notes.concat({ id: uuid(), text });
      
      this.handleSave(notes);

      return { notes };
    });
  };

  handleMove = (direction, index) => {
    this.setState(prevState => {
      const newNotes = prevState.notes.slice();
      const removedNote = newNotes.splice(index, 1)[0];

      if (direction === "up") {
        newNotes.splice(index - 1, 0, removedNote);
      } else {
        newNotes.splice(index + 1, 0, removedNote);
      }

      this.handleSave(newNotes);

      return {
        notes: newNotes
      };
    });
  };

  handleDelete = id => {
    this.setState(prevState => {
      const newNotes = prevState.notes.slice();
      const index = newNotes.findIndex(note => note.id === id);

      newNotes.splice(index, 1)[0];
      this.handleSave(newNotes);

      return {
        notes: newNotes
      };
    });
  };

  handleEdit = (id, text) => {
    this.setState(prevState => {
      const newNotes = prevState.notes.slice();
      const index = newNotes.findIndex(note => note.id === id);

      newNotes[index].text = text;
      this.handleSave(newNotes);

      return {
        notes: newNotes
      };
    });
  };

  handleReload = () => {
    this.setState({ isLoading: true });
    const notes = window.localStorage.getItem('notes');
    setTimeout(() => {
      this.setState({ notes: JSON.parse(notes), isLoading: false });
    }, 3000);
  };

  handleSave = notes => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      window.localStorage.setItem("notes", JSON.stringify(notes));
      this.setState({ isLoading: false });
    }, 3000);
  };

  render() {
    const { isLoading } = this.state;

    return (
      <div>
        <AppBar isLoading={isLoading} />
        <div className="container">
          <NewNote onAddNote={this.handleAddNote} />
          <NoteList 
            notes={this.state.notes} 
            onMove={this.handleMove} 
            onDelete={this.handleDelete}
            onEdit={this.handleEdit}
          />
        </div>
      </div>
    );
  }
}

export default App;
