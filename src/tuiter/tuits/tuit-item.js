import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";
import TuitStats from "./tuit-stats";

const TuitItem = (
    {
        key, post
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <div className="row" key={key}>
            <div className="col-1">
                <img src={post.image} className="float-start rounded-circle" height={48} alt=" "/>
            </div>
            <div className="col-11 mb-2">
                <div>
                    <span className="fw-bolder">
                    {post.userName}
                    </span>
                    <span className="text-secondary">
                    {post.handle}
                    </span>
                </div>
                <div className="text-black">
                    {post.tuit}
                </div>
                <div>
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(post._id)}></i>
                </div>
                <TuitStats replies={post.replies} retuits={post.retuits} likes={post.likes}/>
            </div>
            <hr/>
        </div>
    )
}

export default TuitItem