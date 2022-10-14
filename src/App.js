import React from "react";
import SpritePage from "./components/SpritePage";
import Scenes from "./components/Scenes";

export default function App() {

  const [page, setPage] = React.useState(0)

  function handlePageChange(event) {
    setPage(event.target.value)
  }

  return (
    <div className="app-container">
      <header>
        <h1>Corb's Art Blog</h1>
      </header>
      <nav className="button-container">
        <button className="nav-button" onClick={handlePageChange} value="0">most recent post</button>
        <button className="nav-button" onClick={handlePageChange} value="1">Scenes</button>
        <button className="nav-button" onClick={handlePageChange} value="2">Sprites</button>
      </nav>
      {page == 0 && 
        <div className="recent-post">
          recent post page
        </div>
      }

      {page == 1 && <Scenes/>}

      {page == 2 && <SpritePage/>}
    </div>
  );
}