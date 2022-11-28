import React from "react";
import {useDispatch} from "react-redux";
//import {deleteTuit} from "./tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
    {
        tuit = {
            "_id": 234,
            "userName": "SpaceX",
            "image": "./images/profile1.jpg",
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return(
        <div className="row">
            <div className="col-1">
                <img src={tuit.image} className="float-start rounded-circle" height={48} alt=" "/>
            </div>
            <div className="col-11">
                <div>
                    <span className="fw-bolder">
                    {tuit.userName}
                    </span>
                    <span className="text-secondary">
                    {tuit.handle}
                    </span>
                </div>
                <div className="text-white">
                    {tuit.tuit}
                </div>
                <div>
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                </div>
            </div>
        </div>
    )
}

export default TuitItem