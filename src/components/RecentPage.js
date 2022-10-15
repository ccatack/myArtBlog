import React from "react";
import largeScenes from "../data/largeScenes";
import sprites from "../data/sprites";

export default function RecentPage() {
    /* dates are YYYY - MM - DD */

    var mostRecent

    const d1 = new Date(largeScenes[0].dateAdded)
    const d2 = new Date(sprites[0].dateAdded)

    d1 < d2 ? mostRecent=sprites : mostRecent=largeScenes;

    return (
        <section className="scenes-section">
            <div>
                <img src={mostRecent[0].image}></img>
                <h2>{mostRecent[0].name}</h2>
            </div>
        </section>
    )
}