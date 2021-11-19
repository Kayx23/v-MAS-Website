<template>
  <div>
    <!-- purposely left outside so it does not scroll with cards -->
    <h2 id="resources">Resources</h2>
    <section id="resources-section">
      <div class="card-container">
        <div class="card">
          <div class="card-icon"></div>
          <h4>Study Sessions</h4>
          <p>
            We are here to help you with your Exam P, FM and IFM studying, as
            well as the relevant math and stats courses! See you at 11:30am -
            12:30pm EST every Friday on Zoom.
          </p>
          <a
            href="https://mcmaster.zoom.us/j/98028635729?pwd=L2ZtQkFycE1NZ3Boa29YeUFQS2xzZz09"
            >Zoom Link</a
          >
        </div>
        <!-- <div class="card">
          <div class="card-icon"></div>
          <h4>Clothing Program</h4>
          <p>
            Want to order shirts or hoodies with the "Mactuaries" or MAS logo
            print to channel some actuarial spirits? Stay tuned, 2021-2022
            designs are coming in the Winter Term!
          </p>
          <router-link to="/clothing">Read More</router-link>
        </div> -->
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

        <div class="card">
          <div class="card-icon"></div>
          <h4>New ASA Curriculum Changes</h4>
          <p>
            Questions about the new ASA pathway changes? Don't know what changes
            have been made and when they will be effective? Please view the
            documents below for full explanations!
          </p>
          <a href="./pdfs/mas_pathway_changes.pdf">View PDF</a>
        </div>

        <div class="card">
          <div class="card-icon"></div>
          <h4>ASNA 2022 Info</h4>
          <p>
            Missed our ASNA presentation? Find all the fees, deadlines, event schedules, and all other important information in tis PDF.
          </p>
          <a href="./pdfs/ASNA_Info_2022.pdf">View PDF</a>
        </div>

        <div class="card">
          <div class="card-icon"></div>
          <h4>Coaching Actuaries and SOA Event</h4>
          <p>
            Here is our Coaching Actuaries and SOA powerpoint if you weren’t able to make it or if you wanted a recap. Feel free to email us with any questions!
          </p>
          <a href="./pdfs/SOA_CA_Event.pdf">View PDF</a>
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
