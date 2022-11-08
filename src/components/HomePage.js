import React from "react";
import largeScenes from "../data/largeScenes";
import sprites from "../data/sprites";
import HowToComponent from "./HowToComponent";

export default function HomePage(props) {
    /* dates are YYYY - MM - DD */

    var mostRecent

    const p1 = Date.parse(largeScenes[0].dateAdded)
    const p2 = Date.parse(sprites[0].dateAdded)

    const d1 = new Date(p1)
    const d2 = new Date(p2)

    d1 < d2 ? mostRecent=sprites : mostRecent=largeScenes;

    const aboutRef = React.useRef();

    React.useEffect(() => {
        if (props.doScroll) {
            aboutRef.current.scrollIntoView({behavior: "smooth"})
        }
    }, [props.doScroll])

    const handleEmailClick = async () => {
        await navigator.clipboard.writeText("ccatack@gmail.com");
        alert('Email has been copied to your clipboard');
    }

    return (
        <div className="homepage-container">
            <section className="recent-section">
                <div>
                    <h1>Featured Recent Post</h1>
                    <div className="overlay-container">
                        <img src={mostRecent[0].image}></img>
                        <div className="overlay">
                            <div className="text">{'"' + mostRecent[0].name + '"'}</div>
                        </div>
                    </div>
                </div>
            </section>
            <HowToComponent/>
            <section className="about-section" ref={aboutRef} id="about">
                <div className="about-links">
                    <button onClick={() => {window.open("https://www.linkedin.com/in/corbin-atack/", '_blank');}} title="LinkedIn">
                        <img src="../images/linkedinIcon.png"></img>
                    </button>
                    <button onClick={() => {window.open("https://github.com/ccatack", '_blank');}} title="GitHub">
                    <img src="../images/githubIcon.png" className="github-icon"></img>
                    </button>
                    <button onClick={() => handleEmailClick()} title="Copy Email">
                        <img src="../images/emailIcon.png" className="email-button"></img>
                    </button>
                </div>
                <div className="about-pieces">
                    <img src="../images/sprites/frisbPlayer.png"></img>
                    <div className="hire-notice">
                        <h2>Hire me!</h2>
                        <p>I am an enthused recent grad with a computer science degree and I would love to work on your projects. <br></br><br></br> DM me on LinkedIn or shoot me an email!</p>
                    </div>
                    <div className="my-artwork">
                        <h2>About my artwork</h2>
                        <p>My practice is sporadic and impulsive. I might make a three pieces in a week or I might not color a pixel for a month. The subject of my work is just as scattered, making sprites and landscapes and whatever else inspires me on a given day.<br></br><br></br>I come from an artistic background in outdoor photography. This love for layers of land and wild clouds shows up in some of my pixel pieces.<br></br><br></br>While both the medium of pixel art and much of my work is inspired by video games and their history, none of it has been made for or used in any video game. If you are interested in backgrounds or sprites for a game you're producing, feel free to reach out.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}