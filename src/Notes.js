import { useState } from "react";

export default function Notes({ setSavedNotes }) {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

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
