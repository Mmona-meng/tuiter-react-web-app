function PostItem(homePosts) {
    return(`
        <div class="row">
            <div class="col-1">
                <img src="${homePosts.avatarIcon}" class="float-start rounded-circle" height="50px">
            </div>
            <div class="col-11">
                <div>
                    <span class="fw-bolder">
                    ${homePosts.userName}
                    </span>
                    <span class="text-secondary">
                    ${homePosts.handle}
                    </span>
                </div>
                <div class="text-white">
                    ${homePosts.content}
                </div>
                <div>
                    <img src="${homePosts.image}" class="rounded-corners-all-around" height="300px">
                </div>
            </div>           
        </div>
    `)
}

export default PostItem;