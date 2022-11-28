import React from "react";

const TuitStats = (
    {
        tuit = {
            "replies": 123,
            "retuits": 432,
            "likes": 2345
        }
    }
) => {
    return(
        <div className="row mt-2">
            <div className="col-3" >
                <i className="fa-regular fa-comment"></i>
                {tuit.replies}
            </div>
            <div className="col-3" >
                <i className="fa-solid fa-retweet"></i>
                {tuit.retuits}
            </div>
            <div className="col-3" >
                <i className="fa-regular fa-heart"></i>
                {tuit.likes}
            </div>
            <div className="col-3" >
                <i className="fa-solid fa-arrow-up-from-bracket"></i>
            </div>
        </div>
    )
}
export default TuitStats