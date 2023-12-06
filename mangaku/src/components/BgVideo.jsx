import React from "react";
import video from '../assets/video.mp4';
function BgVideo() {
    return (
        <div className="bgConteiner">
            <div className="overlay">
                <video src={video} autoPlay loop muted />
                <div className="conteiner">

                </div>
            </div>
        </div>
    )
}

export default BgVideo;