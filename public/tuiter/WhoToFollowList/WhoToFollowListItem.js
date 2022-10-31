import who from "./who.js";

function WhoToFollowListItem(who){
    return(`
            
                <div class="row">
                    <div class="col-8">
                        <div class="text-secondary">
                            ${who.avatarIcon}
                        </div>
                        <div class="fw-bolder">
                            ${who.userName}
                        </div>
                        <div class="fw-bolder">
                            ${who.handle}
                        </div>
                    </div>
                    <div class="col-4">
                        <img class="float-end" src="../images/react.png" height="100px"/>
                    </div>
                </div>
            
    `)
}
export default WhoToFollowListItem;