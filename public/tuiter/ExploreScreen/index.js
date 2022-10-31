import content from "./content.js";
import NavigationSidebar from "../NavigationSideBar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import P

const exploreComponent = () => {
    $('#wd-explore').append(`
       <div class="row mt-2">
       <div class="col-2 col-md-2 col-lg-1 col-xl-2">
        ${NavigationSidebar()}
       </div>
       <div class="col-10 col-lg-7 col-xl-6 bg-primary">
        <h3>ExploreComponent</h3>
       </div>
       <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 bg-danger">
        ${WhoToFollowList()}
       </div>
       </div>

       <div class="container pt-2">
            <div class="row">
                <div class="col-2">
                    ${navigationSideBar()}
                </div>
                <div class="col-6">
                    ${content()}
                </div>
                <div class="col-4">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <div class="row fw-bold">Who to follow</div>
                        </li>
                        <li class="list-group-item">
                            <div class="row">
                                <div class="col-2">
                                    <img class="float-start" src="../images/java.svg" height="50px"/>
                                </div>
                                <div class="col-8">
                                    <div class="fw-bold">Java</div>
                                    <div>@Java</div>
                                </div>
                                <div class="col-2">
                                    <button type="button" class="btn btn-primary float-end rounded-pill">Follow
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="row">
                                <div class="col-2">
                                    <img class="float-start" src="../images/relativeSpace.png" height="50px"/>
                                </div>
                                <div class="col-8">
                                    <div class="fw-bold">Relativity Space</div>
                                    <div>@relativityspace</div>
                                </div>
                                <div class="col-2">
                                    <button type="button" class="btn btn-primary float-end rounded-pill">Follow
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="row">
                                <div class="col-2">
                                    <img class="float-start" src="../images/virgin.svg" height="50px"/>
                                </div>
                                <div class="col-8">
                                    <div class="fw-bold">Virgin Galactic</div>
                                    <div>@virgingalactic</div>
                                </div>
                                <div class="col-2">
                                    <button type="button" class="btn btn-primary float-end rounded-pill">Follow
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="row">
                                <div class="col-2">
                                    <img class="float-start" src="../images/NASA.png" height="50px"/>
                                </div>
                                <div class="col-8">
                                    <div class="fw-bold">NASA</div>
                                    <div>@NASA</div>
                                </div>
                                <div class="col-2">
                                    <button type="button" class="btn btn-primary float-end rounded-pill">Follow
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="row">
                                <div class="col-2">
                                    <img class="float-start" src="../images/Tesla.png" height="50px"/>
                                </div>
                                <div class="col-8">
                                    <div class="fw-bold">Tesla</div>
                                    <div>@Tesla</div>
                                </div>
                                <div class="col-2">
                                    <button type="button" class="btn btn-primary float-end rounded-pill">Follow
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
$(exploreComponent);