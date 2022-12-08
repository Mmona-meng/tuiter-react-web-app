import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";
import TuitStats from "./tuit-stats";

const TuitsList = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                tuitsArray.map(tuits =>
                    <TuitItem
                        key={tuits._id} post={tuits}/> )
            }
            <TuitStats/>
        </ul>
    );
};

export default TuitsList;