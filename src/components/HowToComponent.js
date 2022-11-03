import React from "react";

export default function HowToComponent() {

    const [slide, setSlide] = React.useState(0)
    const ref0 = React.useRef()
    const ref1 = React.useRef()

    const refArray = [ref0, ref1]

    React.useEffect(() => {
        showIMGs()
    }, [])

    const showIMGs = () => {
        for (var i = 0; i < refArray.length; i++) {
            if (refArray[i].current.id == slide) {
                refArray[i].current.style.display = "block"
            }
            else {
                refArray[i].current.style.display = "none"
            }
        }
    }

    function handleIMGChange(n) {
        setSlide((prevSlide) => {
            if (prevSlide + n >= refArray.length) {
                return 0
            }
            else {
                return prevSlide + n
            }
        })
        console.log(slide)
        showIMGs()
    }

    return (
        <div className="how-to-container">
            <div>How to create pixel art</div>
            <div className="image-button-container">
                <button onClick={() => handleIMGChange(-1)}>back</button>
                <img ref={ref0} id="0" src="../images/howTo/spead1.png"></img>
                <img ref={ref1} id="1" src="../images/howTo/spread2.png"></img>
                <button onClick={() => handleIMGChange(+1)}>next</button>
            </div>
            <div className="dots-container">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    )
}