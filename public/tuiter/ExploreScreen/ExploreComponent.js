import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent =() => {
    return(`
        <div class="row mb-2">
            <!-- search field and cog -->
            <div class="col-10">
                <div class="position-relative">
                    <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                    <i class="fa-solid fa-magnifying-glass position-absolute wd-search-tuiter"></i>
                </div>
            </div>
            <div class="col-2">
                <i class="fa-solid fa-gear fa-lg"></i>
            </div>
       </div>
       <ul class="nav mb-2 nav-tabs">
            <!-- tabs -->
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
            <!-- image with overlaid text -->
       <div class="position-relative mb-2">
            <img src="../images/spaceship.jpeg" width="100%"/>
            <h2 class="position-absolute bottom-0 text-white">SpaceX's Starship</h2>
       </div>
       ${PostSummaryList()}
    `)
}

export default ExploreComponent;