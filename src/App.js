import React from "react";
import SpritePage from "./components/SpritePage";
import Scenes from "./components/Scenes";
import HomePage from "./components/HomePage";

export default function App() {

  const [page, setPage] = React.useState(0)

  function handlePageChange(event) {
    setPage(event.target.value)
  }

  return (
    <div className="app-container">
      <header>
        <img src="../images/artBlogBanner.png"></img>
        <button onClick={handlePageChange} value="0">Corb's Art Blog</button>
      </header>
      <nav className="button-container">
        {/* <button className="nav-button" onClick={handlePageChange} value="0">Recent Post</button> */}
        <button className="nav-button" onClick={handlePageChange} value="1">
          Scenes
          <img src="../images/sceneIcon.png"></img>
        </button>
        <button className="nav-button" onClick={handlePageChange} value="2">
          Sprites
          <img src="../images/spriteIcon.png"></img>
        </button>
      </nav>
      {page == 0 && <HomePage/>}

      {page == 1 && <Scenes/>}

      {page == 2 && <SpritePage/>}
    </div>
  );
}