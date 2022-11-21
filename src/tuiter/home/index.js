import React from "react";
import PostItem from "../post-list/post-item";
import postsArray from '../post-list/homeposts.json';
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        // <WhatsHappening/>
        <ul className="list-group">
            {
                postsArray.map(homeposts =>
                    <PostItem
                        key={homeposts._id}
                        homeposts={homeposts}/>
                )
            }
        </ul>
    )
}

export default HomeComponent