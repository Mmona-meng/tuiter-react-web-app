import who from "./who.js"
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return(`
        <ul class="list-group">
            <li class="list-group-item mb-2">
                    <div class="row fw-bold">Who to follow</div>
            </li>
            ${who.map(who => (`
                <li class="list-group-item">
                ${WhoToFollowListItem(who)}
                </li>
            `)).join('')}
        </ul>
    `)
}
export default WhoToFollowList;