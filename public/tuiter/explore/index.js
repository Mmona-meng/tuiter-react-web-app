function init(){
    $('#explore').append(`
        <div className="container pt-2">
            <div className="row">
                <div className="col-2">
                    <div className="list-group">
                        <div className="list-group-item"><i className="fa-brands fa-twitter"></i></div>
                        <a href="../home.html" className="list-group-item list-group-item-action">Home</a>
                        <a href="index.html" className="list-group-item list-group-item-action active">Explore</a>
                        <a href="../notifications/index.html"
                           className="list-group-item list-group-item-action">Notifications</a>
                        <a href="../messages/index.html" className="list-group-item list-group-item-action">Messages</a>
                        <a href="../bookmarks/index.html"
                           className="list-group-item list-group-item-action">Bookmarks</a>
                        <a href="../lists/index.html" className="list-group-item list-group-item-action">Lists</a>
                        <a href="../profile/index.html" className="list-group-item list-group-item-action">Profile</a>
                        <a href="../more/index.html" className="list-group-item list-group-item-action">More</a>
                    </div>
                    <div className="pt-1">
                        <button type="button" className="btn btn-primary w-100 rounded-pill">Tuit</button>
                    </div>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-10">
                            <div className="position-relative">
                                <input className="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                                <i className="fa-solid fa-magnifying-glass position-absolute wd-search-tuiter"></i>
                            </div>
                        </div>
                        <div className="col-2">
                            <i className="fa-solid fa-gear fa-lg"></i>
                        </div>
                        <ul className="nav nav-tabs mt-2 mb-2">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">For you</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Trending</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Entertainment</a>
                            </li>
                        </ul>

                        <div className="position-relative">
                            <img src="../../images/spaceship.jpeg" width="100%"/>
                            <h2 className="position-absolute bottom-0 text-white">SpaceX's Starship</h2>
                        </div>

                        <ul className="list-group">
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-8">
                                        <div className="text-secondary">
                                            Web Development
                                        </div>
                                        <div className="fw-bolder">
                                            ReactJS - 2h
                                        </div>
                                        <div className="fw-bolder">
                                            React.js is a Single Page Application framework
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <img className="float-end" src="../../images/react.png" height="100px"/>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-8">
                                        <div className="fw-bolder">JavaScript</div>
                                        <div className="fw-bolder">JavaScript is programming language that can run on
                                            browsers as well as desktops
                                        </div>
                                        <div className="text-secondary">123k tuits</div>
                                    </div>
                                    <div className="col-4">
                                        <img className="float-end rounded-4" src="../../images/js.png" height="100px"/>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-8">
                                        <div className="text-secondary">Web Development</div>
                                        <div className="fw-bolder">jQuery</div>
                                        <div className="text-secondary">123k tuits</div>
                                    </div>
                                    <div className="col-4">
                                        <img className="float-end" src="../../images/jquery.png" height="100px"/>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-8">
                                        <div className="text-secondary">Web Development</div>
                                        <div className="fw-bolder">NodeJS</div>
                                        <div className="text-secondary">123k tuits</div>
                                    </div>
                                    <div className="col-4">
                                        <img className="float-end" src="../../images/nodejsLogo.png" height="100px"/>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-4">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <div className="row fw-bold">Who to follow</div>
                        </li>
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-2">
                                    <img className="float-start" src="../../images/java.svg" height="50px"/>
                                </div>
                                <div className="col-8">
                                    <div className="fw-bold">Java</div>
                                    <div>@Java</div>
                                </div>
                                <div className="col-2">
                                    <button type="button" className="btn btn-primary float-end rounded-pill">Follow
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-2">
                                    <img className="float-start" src="../../images/relativeSpace.png" height="50px"/>
                                </div>
                                <div className="col-8">
                                    <div className="fw-bold">Relativity Space</div>
                                    <div>@relativityspace</div>
                                </div>
                                <div className="col-2">
                                    <button type="button" className="btn btn-primary float-end rounded-pill">Follow
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-2">
                                    <img className="float-start" src="../../images/virgin.svg" height="50px"/>
                                </div>
                                <div className="col-8">
                                    <div className="fw-bold">Virgin Galactic</div>
                                    <div>@virgingalactic</div>
                                </div>
                                <div className="col-2">
                                    <button type="button" className="btn btn-primary float-end rounded-pill">Follow
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-2">
                                    <img className="float-start" src="../../images/NASA.png" height="50px"/>
                                </div>
                                <div className="col-8">
                                    <div className="fw-bold">NASA</div>
                                    <div>@NASA</div>
                                </div>
                                <div className="col-2">
                                    <button type="button" className="btn btn-primary float-end rounded-pill">Follow
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-2">
                                    <img className="float-start" src="../../images/Tesla.png" height="50px"/>
                                </div>
                                <div className="col-8">
                                    <div className="fw-bold">Tesla</div>
                                    <div>@Tesla</div>
                                </div>
                                <div className="col-2">
                                    <button type="button" className="btn btn-primary float-end rounded-pill">Follow
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `)
}
$(init)