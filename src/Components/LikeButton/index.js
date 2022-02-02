import { useState } from "react";
import "./index.css"

export function LikeButton () {

    const [counter, setCounter] = useState(0);

    function handleAcress() {
        setCounter(counter + 1)
    }

    return (
        <>
            <button onClick={handleAcress} className="btn">{counter} Likes</button>
        </>
    )
}