<template>
  <header class="main-head">
    <scrollactive>
      <nav id="top">
        <li>
          <!-- puts img inside of <li> for alignment! -->
          <img src="../assets/icons/mactuaries.png" alt="MAS-logo" />
        </li>
        <ul id="main-list">
          <li><router-link to="/">Home</router-link></li>

          <li>
            <a
              v-if="$route.name === 'home'"
              href="#resources"
              class="scrollactive-item"
              >Resources</a
            >
            <router-link v-else :to="{ name: 'home', hash: '#resources' }"
              >Resources</router-link
            >
          </li>
          <li>
            <a
              v-if="$route.name === 'home'"
              href="#events"
              class="scrollactive-item"
              >Events</a
            >
            <router-link v-else to="/#events">Events</router-link>
          </li>
          <li>
            <router-link to="/meet-the-team">Meet the Team</router-link>
          </li>
          <li>
            <a href="#address" class="scrollactive-item">Contact Us</a>
          </li>
        </ul>
        <ion-icon name="menu" id="menu" onclick="ExpandMenu()"></ion-icon>
      </nav>
    </scrollactive>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  created() {
    this.$loadScript("../js/navbar.js");
  },
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

/* sandwich */
ion-icon {
  font-size: 2.5rem;
  color: rgb(65, 65, 66);
  margin-top: 0.5rem;
  margin-right: 0.5rem;
}
</style>