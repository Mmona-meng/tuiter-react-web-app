import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const dispatch = useDispatch();

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
                Likes: {tuit.likes}
                <i onClick={() =>
                    dispatch(updateTuitThunk(
                        {
                            ...tuit,
                            likes: tuit.likes + 1}
                    )} className="bi bi-heart-fill me-2 text-danger"></i>
            </div>
            <div className="col-3" >
                <i className="fa-solid fa-arrow-up-from-bracket"></i>
            </div>
        </div>
    )
}
export default TuitStats