import React from "react";
import sprites from "../data/sprites.js"

export default function SpritePage() {

    const images = sprites.map(item => {
        return (
            <div key={item.id} className="overlay-container">
                <img src={item.image}></img>
                <div className="overlay">
                    <div className="text">{'"' + item.name + '"'}</div>
                </div>
            </div>
        )
    })

    return (
        <section className="sprite-section">
            {images}
        </section>
    )
}