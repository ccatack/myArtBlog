import React from "react";
import largeScenes from "../data/largeScenes";
import sprites from "../data/sprites";

export default function HomePage() {
    /* dates are YYYY - MM - DD */

    var mostRecent

    const p1 = Date.parse(largeScenes[0].dateAdded)
    const p2 = Date.parse(sprites[0].dateAdded)

    const d1 = new Date(p1)
    const d2 = new Date(p2)

    d1 < d2 ? mostRecent=sprites : mostRecent=largeScenes;

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
            <section className="about-section">
                <div className="about-links">
                    <button onClick={() => {window.open("https://www.linkedin.com/in/corbin-atack/", '_blank');}}>
                        <img src="../images/linkedinIcon.png"></img>
                    </button>
                    <button onClick={() => {window.open("https://github.com/ccatack", '_blank');}}>
                    <img src="../images/githubIcon.png" className="github-icon"></img>
                    </button>
                    <button onClick={handleEmailClick}>
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
                        <h2>My Artwork</h2>
                        <p>woo i love art. woo i love art. woo i love art. woo i love art. woo i love art. woo i love art. woo i love art. woo i love art. woo i love art. woo i love art. woo i love art. woo i love art. woo i love art. woo i love art. woo i love art. woo i love art. woo i love art. woo i love art. woo i love art. woo i love art. woo i love art. woo i love art. woo i love art. woo i love art. woo i love art. woo i love art. woo i love art. woo i love art. woo i love art. woo i love art. woo i love art. </p>
                    </div>
                </div>
            </section>
        </div>
    )
}