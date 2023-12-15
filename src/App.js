import { useEffect, useState } from "react";
import Notes from "./Notes";
import PrevNotes from "./PrevNotes";

export default function App() {
  const [savedNotes, setSavedNotes] = useState(function () {
    const storedValue = localStorage.getItem("SavedNotes");
    return JSON.parse(storedValue) || [];
  });

  const [selectedNotes, setSelectedNotes] = useState("");
  const [newNote, setNewNote] = useState(false);

  useEffect(
    function () {
      localStorage.setItem("SavedNotes", JSON.stringify(savedNotes));
    },
    [savedNotes]
  );

  return (
    <>
      <Header setNewNote={setNewNote} />
      <PrevNotes
        savedNotes={savedNotes}
        setSavedNotes={setSavedNotes}
        selectedNotes={selectedNotes}
        setSelectedNotes={setSelectedNotes}
      />
      <Notes
        setSavedNotes={setSavedNotes}
        savedNotes={savedNotes}
        selectedNotes={selectedNotes}
        newNote={newNote}
        setNewNote={setNewNote}
        setSelectedNotes={setSelectedNotes}
      ></Notes>
      <Footer></Footer>
    </>
  );
}

function Header({ setNewNote }) {
  return <Nav className="nav" setNewNote={setNewNote}></Nav>;
}

function Nav({ setNewNote }) {
  const [page, setPage] = useState("- Notes Anywhere");

  useEffect(
    function () {
      if (!page) return;
      document.title = page;

      return function () {
        document.title = "- Notes Anywhere";
      };
    },
    [page]
  );

  console.log(page);

  return (
    <ul className="nav-dad">
      <div className="logo-box">
        <a
          href="#"
          className="nav-logo"
          rel="noreferrer"
          onClick={() => setPage("-Notes Anywhere")}
        >
          <li className="nav-logo">LOGO</li>
        </a>
      </div>
      <NavLinks setPage={setPage} setNewNote={setNewNote}></NavLinks>
    </ul>
  );
}

function NavLinks({ setPage, setNewNote }) {
  return (
    <div className="nav-links">
      <a href="#" className="nav-link" rel="noreferrer">
        <li className="nav-child" onClick={() => setNewNote(true)}>
          New note
        </li>
      </a>
    </div>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      ©
      <a
        href="https://github.com/Sushank49"
        target="_blank"
        className="footer-link"
        rel="noreferrer"
      >
        Sushank
      </a>
      ,
      <a
        href="https://github.com/HardikNeo"
        target="_blank"
        className="footer-link"
        rel="noreferrer"
      >
        Hardik
      </a>
      <span className="footer-date">{year}</span>
    </footer>
  );
}
