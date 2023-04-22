import React from "react";
import spinner from "../../assets/spinner.gif"

const Spinner = () => {
    return (
        <div >
            <img src={spinner} alt="loading spinner" style={{ display: "block", margin: "0 auto" }} />
        </div>
    )
}

export default Spinner