import React from "react"

import "./errorMessage.scss"

const ErrorMessage = () => {
    return (
        <div className="error-message">
            <div className="error-message-image">
                <iframe src="https://giphy.com/embed/13d2jHlSlxklVe" width="100%" height="100%" frameBorder="0" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/reaction-explosion-government-13d2jHlSlxklVe"></a></p>
            </div>
            <div className="error-message-text">Something went wrong <br /> Please check if the location name is correct</div>
        </div>
    )
}

export default ErrorMessage