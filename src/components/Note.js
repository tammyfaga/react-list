import React from 'react';
import classNames from "classnames";

class Note extends React.Component {
  state = {
    isEditing: false
  };

  handleEdit = () => {
    this.setState({ isEditing: true });
  };

  handleCancel = () => {
    this.setState({ isEditing: false });
  };

  handleSave = () => {
    this.props.onEdit(this.props.note.id, this.input.value);
    this.setState({ isEditing: false });
  };

  render() {
    const { note, onEdit, onDelete, index, onMove, total } = this.props;
    const { isEditing } = this.state;

    return (
      <div className="note">
        {isEditing ? (
          <input 
            type="text"
            className="note__input"
            defaultValue={note.text}
            ref={c => {
              this.input = c;
            }}
          />
        ) : (
          <span className="note__text">{note.text}</span>
        )}

        {isEditing && (
          <React.Fragment>
            <button
              className="note__button note__button--red"
              onClick={this.handleCancel}
            >
              <i className="material-icons">cancel</i>
            </button>

            <button
              className="note__button note__button--green"
              onClick={this.handleSave}
            >
              <i className="material-icons">done_outline</i>
            </button>
          </React.Fragment>
        )}

        <button
          disabled={isEditing}
          className="note__button"
          onClick={this.handleEdit}
        >
          <i className="material-icons">edit</i>
        </button>

        <button
          disabled={isEditing}
          className="note__button"
          onClick={() => {
            onDelete(note.id);
          }}
        >
          <i className="material-icons">delete</i>
        </button>

        <button
          className={classNames("note__button", {
            "note__button--hidden": index === 0
          })}
          onClick={() => {
            onMove("up", index);
          }}
        >
          <i className="material-icons">arrow_upward</i>
        </button>

        <button
          className={classNames("note__button", {
            "note__button--hidden": index === total - 1
          })}
          onClick={() => {
            onMove("down", index);
          }}
        >
          <i className="material-icons">arrow_downward</i>
        </button>

      </div>
    )
  }
}

export default Note;
