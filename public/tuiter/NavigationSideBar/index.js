const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
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
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;