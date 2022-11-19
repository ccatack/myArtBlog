import React from "react";

export default function HowToComponent() {

    const backButtonRef = React.useRef()

    const [slide, setSlide] = React.useState(0)
    const ref0 = React.useRef()
    const ref1 = React.useRef()
    const ref2 = React.useRef()
    const ref3 = React.useRef()
    const ref4 = React.useRef()
    const ref5 = React.useRef()
    const ref6 = React.useRef()
    const ref7 = React.useRef()
    const ref8 = React.useRef()
    const ref9 = React.useRef()
    const ref10 = React.useRef()

    const dot0 = React.useRef()
    const dot1 = React.useRef()
    const dot2 = React.useRef()
    const dot3 = React.useRef()
    const dot4 = React.useRef()
    const dot5 = React.useRef()
    const dot6 = React.useRef()
    const dot7 = React.useRef()
    const dot8 = React.useRef()
    const dot9 = React.useRef()
    const dot10 = React.useRef()

    const refArray = [ref0, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10]
    const dotArray = [dot0, dot1, dot2, dot3, dot4, dot5, dot6, dot7, dot8, dot9, dot10]

    React.useEffect(() => {
        handleIMGChange(0)
    }, [])

    const showIMGs = (current) => {
        for (var i = 0; i < refArray.length; i++) {
            if (refArray[i].current.id == current) {
                refArray[i].current.style.display = "block"
                dotArray[i].current.style.backgroundColor = "#444"
            }
            else {
                refArray[i].current.style.display = "none"
                dotArray[i].current.style.backgroundColor = "#ddd"
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
                current += n
            }
        }
        setSlide(current)
        showIMGs(current)
    }

    return (
        <div className="how-to-container">
            <h1>The Process</h1>
            <div className="image-button-container">
                <button ref={backButtonRef} onClick={() => handleIMGChange(-1)}><p>/<br></br>\</p></button>
                <img ref={ref0} id="0" src="https://ccatack.github.io/myArtBlog/public/images/howTo/p1.png"></img>
                <img ref={ref1} id="1" src="https://ccatack.github.io/myArtBlog/public/images/howTo/spead1.png"></img>
                <img ref={ref2} id="2" src="https://ccatack.github.io/myArtBlog/public/images/howTo/spread2.png"></img>
                <img ref={ref3} id="3" src="https://ccatack.github.io/myArtBlog/public/images/howTo/spread3.png"></img>
                <img ref={ref4} id="4" src="https://ccatack.github.io/myArtBlog/public/images/howTo/spread4.png"></img>
                <img ref={ref5} id="5" src="https://ccatack.github.io/myArtBlog/public/images/howTo/spread5.png"></img>
                <img ref={ref6} id="6" src="https://ccatack.github.io/myArtBlog/public/images/howTo/spread6.png"></img>
                <img ref={ref7} id="7" src="https://ccatack.github.io/myArtBlog/public/images/howTo/spread7.png"></img>
                <img ref={ref8} id="8" src="https://ccatack.github.io/myArtBlog/public/images/howTo/spread8.png"></img>
                <img ref={ref9} id="9" src="https://ccatack.github.io/myArtBlog/public/images/howTo/spead9.png"></img>
                <img ref={ref10} id="10" src="https://ccatack.github.io/myArtBlog/public/images/howTo/p2.png"></img>
                <button onClick={() => handleIMGChange(1)}><p>\<br></br>/</p></button>
            </div>
            <div className="dots-container">
                <div ref={dot0} id="0" className="dot"></div>
                <div ref={dot1} id="1" className="dot"></div>
                <div ref={dot2} id="2" className="dot"></div>
                <div ref={dot3} id="3" className="dot"></div>
                <div ref={dot4} id="4" className="dot"></div>
                <div ref={dot5} id="5" className="dot"></div>
                <div ref={dot6} id="6" className="dot"></div>
                <div ref={dot7} id="7" className="dot"></div>
                <div ref={dot8} id="8" className="dot"></div>
                <div ref={dot9} id="9" className="dot"></div>
                <div ref={dot10} id="10" className="dot"></div>
            </div>
            <p>This zine was created for a project in an amazing book-arts class I took in college. This is the digital version, there are also five or six hand-stitched physical copies around the planet in various hands.</p>
        </div>
    )
}