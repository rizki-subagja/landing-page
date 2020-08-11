function hideNav() {
    var x = document.getElementById("hidenav");
    if (x.className === "hidenav") {
        x.className += " responsive";
    } else {
        x.className = "hidenav";
    }
}