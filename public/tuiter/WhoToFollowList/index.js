import who from "./who.js"
import whoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return(`
        <ul class="list-group">
            ${who.map(who => (`
                <li class="list-group-item">
                ${whoToFollowListItem}
            </li>
            `))}
    `)
}
export default WhoToFollowList;