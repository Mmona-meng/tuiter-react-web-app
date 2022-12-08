import React from "react";

const TuitStats = (
    {
        replies,
        retuits,
        likes
    }
) => {
    return(
        <div className="row mt-2">
            <div className="col-3" >
                <i className="bi bi-chat me-2"></i>
                {replies}
            </div>
            <div className="col-3" >
                <i className="bi bi-arrow-repeat me-2"></i>
                {retuits}
            </div>
            <div className="col-3" >
                <i className="bi bi-heart me-2"></i>
                {likes}
            </div>
            <div className="col-3" >
                <i className="bi bi-share me-2"></i>
            </div>
        </div>
    )
}
export default TuitStats