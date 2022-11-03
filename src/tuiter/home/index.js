import React from "react";
import PostItem from "../post-list/post-item";
import postsArray from '../post-list/homeposts.json';

const HomeComponent = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(homeposts =>
                    <PostItem
                        key={homeposts._id}
                        post={homeposts}/>
                )
            }
        </ul>
    )
}

export default HomeComponent