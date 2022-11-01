import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return(`
        <ul class="list-group">
            ${posts.map(posts => (`
                <li class="list-group-item">
                    ${PostSummaryItem(posts)}
                </li>
            `)).join('')}
        </ul>
    `)
}

export default PostSummaryList;