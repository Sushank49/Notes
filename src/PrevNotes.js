export default function PrevNotes({
  savedNotes,
  setSelectedNotes,
  selectedNotes,
}) {
  return (
    <section className="prev-notes">
      {savedNotes?.map((saved, i) => (
        <PrevNotesChild
          title={saved.title}
          note={saved.notes}
          id={saved.id}
          setSelectedNotes={setSelectedNotes}
          key={i}
          selectedNotes={selectedNotes}
        ></PrevNotesChild>
      ))}
    </section>
  );
}

function PrevNotesChild({ title, note, id, setSelectedNotes, selectedNotes }) {
  return (
    <section
      className={`prev-notes-child ${selectedNotes ? "active" : null}`}
      onClick={() => setSelectedNotes(id)}
    >
      <h2 className="prev-notes-title">{title}</h2>
      <p className="prev-note-para">{note}</p>
    </section>
  );
}
