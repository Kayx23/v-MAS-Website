<template>
  <div>
    <section class="hero">
      <header>
        <h1>McMaster Actuarial Society</h1>
      </header>
    </section>

    <div class="who-are-we">
      <img src="../assets/icons/white-logo.png" alt="MAS-white-logo2" />
      <h2>Who Are We</h2>
      <p>
        Established in 2012, the McMaster Actuarial Society (MAS) is dedicated
        to bringing together the vast actuarial and mathematics community on
        campus. Our society's functions include supplying students with
        actuarial exam resources, providing information about the actuarial
        accreditation process, hosting employer recruitment sessions and social
        events, mentoring students on actuarial career development, representing
        McMaster Actuarial Science at Conferences/Case Competitions, and more.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style scoped>
/* hero */
.hero {
  background: url(../assets/images/HH.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 70vh;
  display: flex;
  align-items: center; /* centering MAS */
  justify-content: center;
}
.hero h1 {
  color: white;
  font-size: 5rem;
  text-shadow: 2px 2px 2px black;
  text-align: center;
}

/* Who are we */
.who-are-we {
  background: rgb(121, 0, 60); /* McMaster Maroon */
  color: white; /* text color */
  display: table;
  padding: 4rem 2.7rem;
}
.who-are-we img {
  width: 18rem;
  object-fit: contain;
  display: block;
  margin: auto;
}
.who-are-we h2 {
  margin-bottom: 1%;
  text-align: center;
}
.who-are-we p {
  text-align: justify;
  text-align-last: center; /* center the last line */
  margin: 1rem 4rem;
  line-height: 1.8;
}
@media screen and (max-width: 400px) {
  .who-are-we p {
    text-align: center;
  }
}
</style>