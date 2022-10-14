import React from "react";
import largeScenes from "../data/largeScenes";

export default function Scenes() {

    const scenes = largeScenes.map(item => {
        return (
            <div key={item.id}>
                <img src={item.image}></img>
                <h2>{item.name}</h2>
            </div>
        )
    })

    return (
        <section className="scenes-section">
            {scenes}
        </section>
    )
}