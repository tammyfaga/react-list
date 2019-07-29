import { resolve } from "url";

class NoteService {
  static load() {
    return new Promise(resolve => {
      setTimeout(() => {
        const notes = window.localStorage.getItem('notes');
        resolve(notes);
      }, 3000);
    });
  }

  static save(notes) {
    return new Promise(resolve => {
      setTimeout(() => {
        window.localStorage.setItem("notes", JSON.stringify(notes));
        resolve();
      }, 3000);
    });
  }
}

export default NoteService;
