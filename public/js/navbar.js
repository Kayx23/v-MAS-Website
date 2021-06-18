// for the mobile look navbar
function ExpandMenu() {
      var x = document.getElementById("main-list");
      if (x.className === "topnav") {
            x.className += " responsive";
      } else {
            x.className = "topnav";
      }
}

// call at page loading to assign "topnav" to #main-list
ExpandMenu()