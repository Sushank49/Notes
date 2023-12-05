export default function PrevNotes({ savedNotes }) {
  return (
    <section className="prev-notes">
      {savedNotes.map((saved) => (
        <PrevNotesChild title={saved.title} note={saved.notes}></PrevNotesChild>
      ))}
    </section>
  );
}

function PrevNotesChild({ status, title, note }) {
  return (
    <section className={`prev-notes-child ${status ? "active" : null}`}>
      <h2 className="prev-notes-title">{title}</h2>
      <p className="prev-note-para">{note}</p>
    </section>
  );
}
