<template>
  <header class="main-head">
    <nav id="top">
      <li>
        <!-- puts img inside of <li> for alignment! -->
        <img src="icons/mactuaries.png" alt="MAS-logo" />
      </li>
      <ul id="main-list">
        <li><a href="index.html">Home</a></li>
        <li><a href="index.html#resources">Resources</a></li>
        <li><a href="index.html#events">Events</a></li>
        <li><a href="meet-the-team.html">Meet the Team</a></li>
        <li><a href="FAQ.html">FAQ</a></li>
      </ul>
      <ion-icon name="menu" id="menu" onclick="ExpandMenu()"></ion-icon>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
nav {
  height: 6rem;
  width: 95%; /* acts as the margin */
  margin: auto; /* centers it */
  background-color: white;
  overflow: visible; /* for mobile look */
}

nav li {
  list-style-type: none; /* remove bullets */
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 0.7rem;
  vertical-align: middle;
}
nav ul {
  margin: 0;
  padding: 0;
  text-align: center;
  float: right; /* item orders in reverse */
}
nav ul li {
  display: inline-block;
  padding: 1.3rem;
  float: left; /* reverse back to normal */
}
nav ul li:hover {
  background-color: rgb(240, 239, 239);
  border-radius: 2rem;
}
nav img {
  position: absolute;
  left: 40px;
  top: 14px;
  width: 100px;
  object-fit: contain;
}
nav a {
  color: black;
  text-decoration: none; /* gets rid of hyperlink format */
}

nav ion-icon {
  float: right;
  margin: 1.3rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  padding-left: 1.8rem;
  padding-right: 1.8rem;
  border-radius: 1.5rem;
  display: none;
}

nav ion-icon:hover {
  background-color: rgb(255, 192, 72);
}

@media screen and (max-width: 650px) {
  .topnav li {
    display: none;
  }
  nav ion-icon {
    display: block;
  }
}

@media screen and (max-width: 650px) {
  nav {
    width: 100%;
    max-width: 100%;
  }
  nav ion-icon {
    position: absolute; /* gets rid of hyperlink format */
    right: 0;
    top: 0;
  }
  nav .topnav.responsive {
    background-color: lightgrey;
    display: block;
    position: absolute;
    top: 0;
    padding-top: 0.5rem;
  }
  nav .topnav.responsive li {
    float: none;
    display: block;
    text-align: center;
    width: 100vw;
  }
  nav .topnav.responsive li:hover {
    background-color: rgb(255, 192, 72);
  }
  nav .topnav.responsive li a {
    display: block;
    padding: 0.05rem;
  }
}

.main-head {
  background: white;
  color: black;
}
</style>