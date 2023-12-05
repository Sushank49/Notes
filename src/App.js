import { useEffect, useState } from "react";
import Notes from "./Notes";
import PrevNotes from "./PrevNotes";

export default function App() {
  const [savedNotes, setSavedNotes] = useState([]);

  useEffect(
    function () {
      localStorage.setItem("Notes", JSON.stringify(savedNotes));
    },
    [savedNotes]
  );

  return (
    <>
      <Header />
      <PrevNotes savedNotes={savedNotes} />
      <Notes setSavedNotes={setSavedNotes}></Notes>
      <Footer></Footer>
    </>
  );
}

function Header() {
  return <Nav className="nav"></Nav>;
}

function Nav() {
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
          className="nav-link"
          rel="noreferrer"
          onClick={() => setPage("-Notes Anywhere")}
        >
          <li className="nav-child">LOGO</li>
        </a>
      </div>
      <NavLinks setPage={setPage}></NavLinks>
    </ul>
  );
}

function NavLinks({ setPage }) {
  return (
    <div className="nav-links">
      <a href="#" className="nav-link" rel="noreferrer">
        <li className="nav-child">New note</li>
      </a>
      <a href="about.html" className="nav-link" rel="noreferrer">
        <li
          className="nav-child"
          onClick={(e) => {
            setPage("About");
            e.preventDefault();
          }}
        >
          About
        </li>
      </a>
      <a href="#" className="nav-link" rel="noreferrer">
        <li className="nav-child sign-in">Sign in</li>
      </a>
      <a href="#" className="nav-link sign-up" rel="noreferrer">
        <li className="nav-child">Sign up</li>
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
