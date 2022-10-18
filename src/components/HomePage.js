import React from "react";
import largeScenes from "../data/largeScenes";
import sprites from "../data/sprites";

export default function HomePage() {
    /* dates are YYYY - MM - DD */

    var mostRecent

    const d1 = new Date(largeScenes[0].dateAdded)
    const d2 = new Date(sprites[0].dateAdded)

    d1 < d2 ? mostRecent=sprites : mostRecent=largeScenes;

    return (
        <div>
            <section className="recent-section">
                <div>
                    <h1>Recent Post</h1>
                    <div className="overlay-container">
                        <img src={mostRecent[0].image}></img>
                        <div className="overlay">
                            <div className="text">{'"' + mostRecent[0].name + '"'}</div>
                        </div>
                    </div>
                </div>
        </section>
        </div>
    )
}