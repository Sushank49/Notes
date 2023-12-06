export default function PrevNotes({
  savedNotes,
  setSavedNotes,
  setSelectedNotes,
  selectedNotes,
}) {
  function onDelete(id) {
    setSavedNotes((notes) => notes?.filter((note) => note.id !== id));
  }

  return (
    <section className="prev-notes">
      {savedNotes.length ? (
        savedNotes?.map((saved, i) => (
          <PrevNotesChild
            title={saved.title}
            note={saved.notes}
            id={saved.id}
            setSelectedNotes={setSelectedNotes}
            key={i}
            selectedNotes={selectedNotes}
            handleDelete={onDelete}
          ></PrevNotesChild>
        ))
      ) : (
        <h1 style={{ fontSize: "2.4rem", margin: "1rem 1rem" }}>
          Please save to view
        </h1>
      )}
    </section>
  );
}

function PrevNotesChild({
  title,
  note,
  id,
  setSelectedNotes,
  selectedNotes,
  handleDelete,
}) {
  return (
    <section
      className={`prev-notes-child ${selectedNotes === id ? "active" : null}`}
      onClick={() => setSelectedNotes(id)}
    >
      <>
        <h2 className="prev-notes-title">{title}</h2>
        <p className="prev-note-para">{note}</p>
        <span className="delete" onClick={() => handleDelete(id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            className="dustbin"
          >
            <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"></path>
          </svg>
        </span>
      </>
    </section>
  );
}
