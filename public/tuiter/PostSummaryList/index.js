import posts from "./posts.js";

const PostSummaryList = () => {
    return(`
    <ul class="list-group">
            ${posts.map(exploreItems => (`
                <li class="list-group-item">
                <div class="row">
                    <div class="col-8">
                        <div class="text-secondary">
                            ${exploreItems.topic}
                        </div>
                        <div class="fw-bolder">
                            ${exploreItems.userName}
                        </div>
                        <div class="fw-bolder">
                            ${exploreItems.title}
                        </div>
                    </div>
                    <div class="col-4">
                        <img class="float-end" src="../images/react.png" height="100px"/>
                    </div>
                </div>
            </li>
            `))}
    `)
}