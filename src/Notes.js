import { useEffect, useState } from "react";

export default function Notes({
  setSavedNotes,
  selectedNotes,
  savedNotes,
  newNote,
  setNewNote,
  setSelectedNotes,
}) {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  useEffect(
    function () {
      if (newNote) {
        setText("");
        setTitle("");
        setNewNote(false);
        setSelectedNotes("");
      }
    },
    [setNewNote, newNote]
  );

  useEffect(
    function () {
      if (!selectedNotes) {
        return;
      }
      const selectedNote = savedNotes?.find(
        (note) => note?.id === selectedNotes
      );
      setText(selectedNote?.notes);
      setTitle(selectedNote?.title);
    },
    [selectedNotes, savedNotes]
  );

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSave(e) {
    e.preventDefault();
    if (!text) {
      alert("Atleast save something you dumb");
      return;
    }
    const notes = {
      notes: text,
      title: title,
      time: new Date().getUTCDate(),
      id: new Date().getMilliseconds(),
    };

    setSavedNotes((savedNotes) => [...savedNotes, notes]);
    alert("Message saved");
    setText("");
    setTitle("");
  }

  return (
    <form id="note-main">
      <input
        value={title}
        className="note-title"
        placeholder="TITLE"
        id="note-title"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <button className="btn-save" onClick={handleSave}>
        Save
      </button>
      <div className="text-area">
        <textarea
          name="memo"
          className="text-area-child"
          type="text"
          value={text}
          onChange={handleChange}
        ></textarea>
      </div>
    </form>
  );
}
