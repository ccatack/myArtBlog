import React, { useRef } from "react";
import SpritePage from "./components/SpritePage";
import Scenes from "./components/Scenes";
import HomePage from "./components/HomePage";

export default function App() {

  const [page, setPage] = React.useState(0)
  const [scroll, setScroll] = React.useState(false)

  function handlePageChange(event) {
    setPage(event.target.value)
    setScroll(false)
  }

  function handleAboutButton(event) {
    setPage(0)
    setScroll(true)
  }

  React.useEffect(() => {
    setScroll(false)
  }, [scroll])

  return (
    <div className="app-container">
      <header>
        <img src="../images/artBlogBanner.png"></img>
        <button onClick={(e) => handlePageChange(e)} value="0" className="home-button" title="Home">Corb's Art Blog</button>
        <button onClick={(e) => handleAboutButton(e)} className="about-button" title="About me" value="0">
          <h2 className="about-button-text">About</h2>
          <img src="../images/sprites/frisbPlayer.png" className="about-button-image"></img>
        </button>
        <button className="github-button" onClick={() => {window.open("https://github.com/ccatack/myArtBlog", '_blank');}} title="GitHub for this blog">
          <h2 className="github-button-text">GitHub</h2>
          <img src="../images/githubIcon.png" className="github-button-image"></img>
        </button>
      </header>
      <nav className="button-container">
        <button className="nav-button" onClick={(e) => handlePageChange(e)} value="0">
          <img src="../images/homeIcon.png"></img>
          Home
        </button>
        <button className="nav-button" onClick={(e) => handlePageChange(e)} value="1">
          <img src="../images/sceneIcon.png"></img>
          Scenes
        </button>
        <button className="nav-button" onClick={(e) => handlePageChange(e)} value="2">
          <img src="../images/spriteIcon2.png"></img>
          Sprites
        </button>
      </nav>
      {page == 0 && <HomePage doScroll={scroll}/>}

      {page == 1 && <Scenes/>}

      {page == 2 && <SpritePage/>}
    </div>
  );
}