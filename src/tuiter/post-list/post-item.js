import React from "react";

const PostItem = ({homeposts}) => {
    return(
        <div className="row">
            <div className="col-1">
                <img src={homeposts.avatarIcon} className="float-start rounded-circle" height={48}/>
            </div>
            <div className="col-11">
                <div>
                    <span className="fw-bolder">
                    {homeposts.userName}
                    </span>
                    <span className="text-secondary">
                    {homeposts.handle}
                    </span>
                </div>
                <div className="text-white">
                    {homeposts.content}
                </div>
                <div>
                    <img src={homeposts.image} className="rounded-corners-all-around" height="300px"/>
                </div>
                <div className="row mt-2">
                    <div className="col-3" >
                        <i className="fa-regular fa-comment"></i>
                    </div>
                    <div className="col-3" >
                        <i className="fa-solid fa-retweet"></i>
                    </div>
                    <div className="col-3" >
                        <i className="fa-regular fa-heart"></i>
                    </div>
                    <div className="col-3" >
                        <i className="fa-solid fa-arrow-up-from-bracket"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItem