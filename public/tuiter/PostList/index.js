import homePosts from "./homePosts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return(`
        <ul class="list-group">
            ${homePosts.map(homePosts => (`
                <li class="list-group-item">
                    ${PostItem(homePosts)}
                </li>
            `)).join('')}
        </ul>
    `)
}

export default PostList;