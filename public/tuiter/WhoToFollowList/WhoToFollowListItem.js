function WhoToFollowListItem(who){
    return(`
        <div class="row">
            <div class="col-2">
                    <img class="float-start" src="${who.avatarIcon}" height="50px">
                </div>
                <div class="col-8">
                    <div class="fw-bold">
                        ${who.userName}
                    </div>
                    <div>
                        ${who.handle}</div>
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-primary float-end rounded-pill">Follow</button>
                </div>
        </div>
    `)
}

export default WhoToFollowListItem;