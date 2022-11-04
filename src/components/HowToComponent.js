import React from "react";

export default function HowToComponent() {

    const backButtonRef = React.useRef()

    const [slide, setSlide] = React.useState(0)
    const ref0 = React.useRef()
    const ref1 = React.useRef()

    const refArray = [ref0, ref1]

    React.useEffect(() => {
        handleIMGChange(0)
    }, [])

    const showIMGs = (current) => {
        for (var i = 0; i < refArray.length; i++) {
            if (refArray[i].current.id == current) {
                refArray[i].current.style.display = "block"
            }
            else {
                refArray[i].current.style.display = "none"
            }
        }
    }

    function handleIMGChange(n) {
        var current = slide
        if (current + n >= refArray.length) {
            backButtonRef.current.disabled = true
            current = 0
        }
        else {
            if (current + n <= 0) {
                backButtonRef.current.disabled = true
                current = 0
            }
            else {
                backButtonRef.current.disabled = false
                current =+ n
            }
        }
        setSlide(current)
        console.log(current)
        showIMGs(current)
    }

    return (
        <div className="how-to-container">
            <div>How to create pixel art</div>
            <div className="image-button-container">
                <button ref={backButtonRef} onClick={() => handleIMGChange(-1)}>back</button>
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