import tuits from "./tuits.js";

const content = () => {
    return(`
        <div class="row">
        <div class="col-10">
            <div class="position-relative">
                <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                <i class="fa-solid fa-magnifying-glass position-absolute wd-search-tuiter"></i>
            </div>
        </div>
        <div class="col-2">
            <i class="fa-solid fa-gear fa-lg"></i>
        </div>
        <ul class="nav nav-tabs mt-2 mb-2">
            <li class="nav-item">
                <a class="nav-link active" href="#">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Entertainment</a>
            </li>
        </ul>

        <div class="position-relative">
            <img src="../images/spaceship.jpeg" width="100%" alt="spaceship"/>
            <h2 class="position-absolute bottom-0 text-white">SpaceX's Starship</h2>
        </div>

        <ul class="list-group">
            ${tuits.map(tuit => (`
                <li class="list-group-item">
                <div class="row">
                    <div class="col-8">
                        <div class="text-secondary">
                            ${tuit.title}
                        </div>
                        <div class="fw-bolder">
                            ${tuit.topic}
                        </div>
                        <div class="fw-bolder">
                            ${tuit.tuit}
                        </div>
                    </div>
                    <div class="col-4">
                        <img class="float-end" src="../images/react.png" height="100px"/>
                    </div>
                </div>
            </li>
            `))}
            
            <li class="list-group-item">
                <div class="row">
                    <div class="col-8">
                        <div class="fw-bolder">JavaScript</div>
                        <div class="fw-bolder">
                            JavaScript is programming language that can run on browsers as well as desktops
                        </div>
                        <div class="text-secondary">123k tuits</div>
                    </div>
                    <div class="col-4">
                        <img class="float-end rounded-4" src="../images/js.png" height="100px"/>
                    </div>
                </div>
            </li>
            
            <li class="list-group-item">
                <div class="row">
                    <div class="col-8">
                        <div class="text-secondary">Web Development</div>
                        <div class="fw-bolder">jQuery</div>
                        <div class="text-secondary">123k tuits</div>
                    </div>
                    <div class="col-4">
                        <img class="float-end" src="../images/jquery.png" height="100px"/>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row">
                    <div class="col-8">
                        <div class="text-secondary">Web Development</div>
                        <div class="fw-bolder">NodeJS</div>
                        <div class="text-secondary">123k tuits</div>
                    </div>
                    <div class="col-4">
                        <img class="float-end" src="../images/nodejsLogo.png" height="100px"/>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    `)
}

export default content;