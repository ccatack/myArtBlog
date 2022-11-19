import React from "react";
import largeScenes from "../data/largeScenes";

export default function Scenes() {

    const scenes = largeScenes.map(item => {
        return (
            <div key={item.id} className="overlay-container">
                <img src={"/myArtBlog" + item.image}></img>
                <div className="overlay">
                    <div className="text">{'"' + item.name + '"'}</div>
                </div>
            </div>
        )
    })

    return (
        <section className="scenes-section">
            {scenes}
        </section>
    )
}