<template>
  <section class="meet-the-team">
    <h2>Meet Our Team</h2>
    <div class="team-container" v-for="profile in profiles" :key="profile._id">
      <!-- Vue's virtual DOM needs to differentiate between the different VNodes; this is done by setting :key to a unique value for each node. Here we use _id.-->
      <div class="team-member">
        <div class="pic-and-role">
          <img v-bind:src="profile.headshot" alt="profile-picture" />
          <p>
            <strong>{{ profile.name }}</strong>
          </p>
          <p>{{ profile.role }}</p>
        </div>
        <div class="bio">
          <p>
            {{ profile.bio }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import sanity from "../client.js";
const query = `*[_type=="team"]{
  _id, 
  name, 
  role, 
  bio, 
  headshot, 
  "headshot": headshot.asset->url,
  order
  } | order(order asc)`;

export default {
  name: "Team",
  data() {
    return {
      profiles: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      sanity.fetch(query).then((profiles) => {
        this.profiles = profiles;
        console.log(profiles);
      });
    },
  },
};
</script>

<style scoped>
/* Meet the Team */
.meet-the-team h2 {
  text-align: center;
  padding: 8rem 0rem 5rem 0rem;
}

.team-container {
  padding: 0rem 16rem 6rem 16rem; /* rop right bottom left */
  display: flex;
  flex-direction: column;
}

.team-member {
  margin: 4rem 0rem;
  display: flex;
  flex-direction: row;
}
.pic-and-role {
  flex-shrink: 0;
}

.meet-the-team img {
  width: 17rem;
  height: 17rem; /* the perfect circle */
  /* object-fit: contain; */ /* commented out to prevent cut-off */
  border-radius: 50%;
}

.pic-and-role p {
  text-align: center;
  margin-top: 1.5rem;
}

.bio {
  margin-left: 6rem;
  padding-left: 2rem;
  border-left: rgb(121, 0, 60) 0.5rem solid;
}

.bio p {
  font-size: 1.6rem;
}

@media screen and (max-width: 1000px) {
  .team-container {
    padding: 0rem 5rem 2rem 5rem; /* rop right bottom left */
  }
  .meet-the-team img {
    width: 17rem;
    height: 17rem; /* the perfect circle */
    /* object-fit: contain; */ /* commented out to prevent cut-off */
    border-radius: 50%;
  }
  .bio {
    margin-left: 3rem;
    padding-left: 1.5rem;
  }
}

@media screen and (max-width: 550px) {
  .meet-the-team h2 {
    text-align: center;
    padding: 4rem 0rem 2rem 0rem;
  }
  .pic-and-role {
    margin-bottom: 1rem;
  }
  .team-container {
    padding: 0rem 5rem 2rem 5rem; /* rop right bottom left */
  }
  .team-member {
    flex-direction: column;
  }

  .meet-the-team img {
    display: block;
    margin: auto;
    width: 13rem;
    height: 13rem; /* the perfect circle */
    border-radius: 50%;
  }

  .bio {
    text-align: left; /* otherwise the word spacings are terrible */
    margin-left: 1rem;
    padding-left: 1rem;
  }
}
</style>

