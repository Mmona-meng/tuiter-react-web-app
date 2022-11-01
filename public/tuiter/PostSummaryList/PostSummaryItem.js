function PostSummaryItem(posts) {
    return(`
        <div class="row">
            <div class="col-8">
                <div class="text-secondary">
                    ${posts.topic}
                </div>
                <div class="fw-bolder">
                    ${posts.userName}
                </div>
                <div class="fw-bolder">
                    ${posts.title}
                </div>
            </div>
            <div class="col-4">
                <img class="float-end" src="${posts.image}" height="100px">
            </div>
        </div>
    `)
}

export default PostSummaryItem;