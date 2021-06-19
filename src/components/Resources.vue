<template>
  <div>
    <!-- purposely left outside so it does not scroll with cards -->
    <h2 id="resources">Resources</h2>
    <section id="resources-section">
      <div class="card-container">
        <div class="card">
          <div class="card-icon"></div>
          <h4>Exam Material Rental</h4>
          <p>
            Due to COVID-19, we are currently not renting out any physicial
            manuals or calculators. We apologize for the inconvenience and will
            resume this service as soon as campus reopens.
          </p>
          <a href="#nothing">Coming Soon</a>
        </div>
        <div class="card">
          <div class="card-icon"></div>
          <h4>Study Sessions</h4>
          <p>
            We are here to help you with your Exam P, FM and IFM studying, as
            well as the relevant math and stats courses! See you at 12:30pm -
            1:20pm EST every Thursday on Zoom.
          </p>
          <a onclick="alert('Stay tuned - Zoom link to be updated!')"
            >Zoom Link</a
          >
        </div>
        <div class="card">
          <div class="card-icon"></div>
          <h4>Clothing Program</h4>
          <p>
            Want to order shirts or hoodies with the "Mactuaries" or MAS logo
            print to channel some actuarial spirits? Stay tuned, 2020-2021
            designs are coming soon!
          </p>
          <!-- <a href="./clothing.html">Read More</a> -->
          <router-link to="/clothing">Read More</router-link>
        </div>
        <div class="card">
          <div class="card-icon"></div>
          <h4>Mock Interviews</h4>
          <p>
            Set up a mock-interview with our execs to brush up on your interview
            skills and experience actual questions that students faced during
            their co-op and full-time interviews.
          </p>
          <a href="mailto:actuary@mcmaster.ca">Email Us</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Resources",
};
</script>

<style scoped>
/* resources */
#resources {
  background: rgb(240, 239, 239);
  text-align: center;
  padding: 4rem 2rem 2rem 2rem;
}
#resources-section {
  background: rgb(240, 239, 239);
}
#resources-section h4 {
  padding-top: 2rem;
  font-family: Arial; /* for bolding */
  font-size: 1.6rem;
}

#resources-section p {
  padding: 2rem;
  padding-bottom: 1rem;
}

#resources-section .card-container {
  margin: auto;
  height: 52vh;
  display: flex;
  justify-content: space-evenly;
}

#resources-section .card {
  height: 82%;
  border: darkgray;
  width: 25rem;
  text-align: center;
  flex-wrap: wrap;
  margin: 1rem;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1), 0px 20px 20px rgba(0, 0, 0, 0.1);
}

#resources-section .card-icon {
  height: 13%;
  background: rgb(121, 0, 60);
  position: sticky; /* don't scroll the banner */
  top: 0;
}

#resources-section a {
  font-size: 1.6rem;
  display: block;
  padding-top: 0rem;
  background-color: rgb(121, 0, 60);
  color: white;
  border-radius: 10rem;
  margin: auto;
  width: 12rem;
  padding: 0.5rem 0rem;
  text-decoration: none;
}

@media screen and (max-width: 1050px) {
  #resources-section h4 {
    padding-top: 1rem;
  }
  #resources-section p {
    padding: 0.5rem;
  }
  #resources-section .card-container {
    display: list-item;
    height: max-content; /* adjust for content */
    padding-bottom: 2rem;
  }
  #resources-section .card {
    margin: auto;
    width: 95%;
    height: min-content;
  }
  #resources-section .card-icon {
    height: 0.5rem;
  }
  #resources-section a {
    margin-bottom: 1rem;
  }
}
</style>
