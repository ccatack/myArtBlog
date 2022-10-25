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

    return (
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
    )
}