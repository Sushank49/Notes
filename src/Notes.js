import { useState } from "react";

export default function Notes() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSave(e) {
    if (!text) {
      alert("Atleast save something you dumb");
      return;
    }
    e.preventDefault();
  }

  return (
    <form id="note-main">
      <input className="note-title" id="note-title" type="text"></input>
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
