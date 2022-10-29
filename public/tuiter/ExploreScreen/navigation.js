const navigation = () => {
    return (`
        <div class="list-group">
        <div class="list-group-item"><i class="fa-brands fa-twitter"></i></div>
        <a href="../home.html" class="list-group-item list-group-item-action">Home</a>
        <a href="index.html" class="list-group-item list-group-item-action active">Explore</a>
        <a href="../notifications/index.html"
           class="list-group-item list-group-item-action">Notifications</a>
        <a href="../messages/index.html" class="list-group-item list-group-item-action">Messages</a>
        <a href="../Bookmarks/index.html"
           class="list-group-item list-group-item-action">Bookmarks</a>
        <a href="../lists/index.html" class="list-group-item list-group-item-action">Lists</a>
        <a href="../profile/index.html" class="list-group-item list-group-item-action">Profile</a>
        <a href="../more/index.html" class="list-group-item list-group-item-action">More</a>
    </div>
    <div class="pt-1">
        <button type="button" class="btn btn-primary w-100 rounded-pill">Tuit</button>
    </div>
    `)
}
export default navigation;