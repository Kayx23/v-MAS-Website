<script>
// import { VueReCaptcha } from 'vue-recaptcha-v3'
export default {
  name: "EmailSignUp",
  methods: {
    CheckAndSubmit: function (e) {
      e.preventDefault();
      const form = document.querySelector("form");
      const submitResponse = document.querySelector("#response");
      const URL = "https://api.mactuary.ca/webform-write-to-dynamo";

      let data = {};
      Array.from(form).map((input) => (data[input.id] = input.value));

      // :)
      if (data.year) {
        submitResponse.innerHTML = "ERROR";
        return;
      }

      // if empty email
      if (!data.email) {
        submitResponse.innerHTML = "Email Required!";
        return;
      }

      // if email is filled out
      submitResponse.innerHTML = "Submitting...";

      var xhr = new XMLHttpRequest();

      xhr.open(
        "POST",
        URL +
          "?fname=" +
          data.fname +
          "&lname=" +
          data.lname +
          "&email=" +
          data.email
      );

      xhr.send();

      xhr.onloadend = (response) => {
        if (response.target.status === 200) {
          form.reset();
          submitResponse.innerHTML =
            'Submitted! Please complete your email confirmtion within <strong><span style="color: #993300;">1 hour</span></strong>.';
        } else {
          submitResponse.innerHTML = "Unknown Error! Please report to us.";
        }
      };
    },
  },
};
</script>

<template>
  <section id="subscribe-section">
    <h2 id="subscribe">Join our Mailing List</h2>
    <p id="hype">for monthly newsletter, announcements, events, and more!</p>

    <div id="mc_embed_signup">
      <form method="post" @submit="CheckAndSubmit">
        <div>
          <div class="indicates-required">
            <span class="asterisk">*</span> indicates required
          </div>
          <div class="mc-field-group">
            <label>Email <span class="asterisk">*</span> </label>
            <input type="email" id="email" />
          </div>
          <div class="mc-field-group">
            <label>First Name </label>
            <input type="text" id="fname" />
          </div>
          <div class="mc-field-group">
            <label>Last Name </label>
            <input type="text" id="lname" />
          </div>
          <h5 id="response"></h5>

          <div style="position: absolute; left: -5000px">
            <input type="text" id="year" tabindex="-1" />
          </div>
          <div class="clear">
            <button type="submit" class="button">Subscribe</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
#hype {
  margin-top: 1rem;
  padding-left: 1rem;
  text-align: center;
}

#subscribe-section {
  background: rgb(240, 239, 239);
  padding: 3rem 36rem;
}

@media screen and (max-width: 1500px) {
  #subscribe-section {
    padding: 3rem 12rem;
  }
}
@media screen and (max-width: 1200px) {
  #subscribe-section {
    padding: 3rem 10rem;
  }
}
@media screen and (max-width: 800px) {
  #subscribe-section {
    padding: 3rem 8rem;
  }
}
@media screen and (max-width: 500px) {
  #subscribe-section {
    padding: 3rem 4rem;
  }
}

#subscribe-section h2 {
  text-align: center;
}

#mc_embed_signup form {
  display: block;
  position: relative;
  text-align: left;
  margin: 1rem;
}

#mc_embed_signup input {
  border: 1px solid #abb0b2;
  border-radius: 0.5rem;
}

#mc_embed_signup div.clear {
  text-align: center; /* centering subscribe button */
}

#mc_embed_signup .button {
  clear: both;
  background-color: rgb(255, 184, 63);
  border: 0 none;
  border-radius: 4rem;
  transition: all 0.23s;
  color: black;
  cursor: pointer;
  display: inline-block;
  font-weight: 550;
  padding: 0.7rem 2.3rem;
  text-align: center;
  text-decoration: none;
  vertical-align: top;
  white-space: nowrap;
  width: auto;
}

#mc_embed_signup .button:hover {
  background-color: rgb(181, 181, 181);
}

#mc_embed_signup .nowrap {
  white-space: nowrap;
}

#mc_embed_signup .mc-field-group {
  clear: left;
  padding-bottom: 3%; /* spacing */
}

#mc_embed_signup .mc-field-group label {
  display: block;
  margin-bottom: 3px;
}
#mc_embed_signup .mc-field-group input {
  display: block;
  padding: 8px 0;
  text-indent: 1rem;
  width: 99%; /* do not go to 100%, otherwise horizontally scrollable! */
}

#mc_embed_signup .indicates-required {
  text-align: right;
  font-size: 11px;
  margin-right: 4%;
}
#mc_embed_signup .asterisk {
  color: #e85c41;
  font-size: 150%;
  font-weight: normal;
  position: relative;
  top: 5px;
}
#mc_embed_signup .clear {
  clear: both;
}

#mc_embed_signup div.response {
  margin: 1em 0;
  padding: 1em 0.5em 0.5em 0;
  float: left;
  top: -1.5em;
  z-index: 1;
  width: 80%;
}
#mc_embed_signup label.error {
  display: block;
  float: none;
  width: auto;
  margin-left: 1.05em;
  text-align: left;
  padding: 0.5em 0;
}
</style>