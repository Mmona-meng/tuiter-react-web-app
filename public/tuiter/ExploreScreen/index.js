import navigation from "./navigation.js"
import content from "./content.js";

const init = () => {
    $('#explore').append(`
        <div class="container pt-2">
            <div class="row">
                <div class="col-2">
                    ${navigation()}
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
$(init)