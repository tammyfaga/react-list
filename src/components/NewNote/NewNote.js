import React from 'react';

import "./new-note.scss";

class NewNote extends React.Component {
  state = {
    text: ""
  };

  render() {
    const { onAddNote } = this.props;
    const { text } = this.state;

    return (
      <div className="new-note">
        <input
          type="text"
          className="new-note__input"
          placeholder="Digite sua nota aqui..."
          value={text}
          onChange={event => {
            this.setState({
              text: event.target.value
            });
          }}
          onKeyPress={event => {
            if (event.key === "Enter") {
              onAddNote(event.target.value);
              this.setState({
                text: ""
              });
            }
          }}
        />
      </div>
    );
  }
}

export default NewNote;
