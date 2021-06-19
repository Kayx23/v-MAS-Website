<template>
  <footer>
    <section class="footer-yellow"></section>
    <section class="footer-grey">
      <img src="../assets/images/math-stats.png" alt="Math-and-Stats-logo" />
      <div id="address">
        <h4>Address:</h4>
        <br />
        <p>McMaster University</p>
        <p>1280 Main Street West</p>
        <p>Hamilton, Ontario, Canada</p>
        <p>L8S 4K1</p>
      </div>
      <div id="contact-us">
        <h4>Contact Us:</h4>
        <br />
        <p>Email: actuary@mcmaster.ca</p>
        <div class="social-media-icons">
          <a href="https://www.facebook.com/McMasterActuarialSociety/">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a href="https://www.instagram.com/mactuaries/">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a
            href="https://www.linkedin.com/company/mcmaster-actuarial-society/"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </div>
      </div>
      <div></div>
    </section>

    <section class="footer-maroon">
      <p>
        © {{ new Date().getFullYear() }} McMaster Actuarial Society. All rights
        reserved.
      </p>
    </section>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/* footer */

.footer-yellow {
  background: rgb(255, 192, 72);
  height: 1rem;
}

.footer-grey {
  background: rgb(92, 106, 114); /* McMaster Maroon */
  height: 19rem;
  color: white; /* text color */
  display: flex;
  justify-content: space-around;
}

.footer-grey img {
  width: 40rem;
  padding: 5rem;
  object-fit: contain;
}

.footer-grey #address,
#contact-us {
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
}

.social-media-icons {
  display: flex;
}

@media screen and (max-width: 900px) {
  .footer-grey img {
    display: none;
  }
  .footer-grey #address {
    margin-left: 2rem;
  }
}

ion-icon {
  font-size: 2.5rem;
  color: rgb(65, 65, 66);
  margin-top: 0.5rem;
  margin-right: 0.5rem;
}

/* footer maroon */
.footer-maroon {
  background: rgb(121, 0, 60);
  height: 6rem;
  color: white;
  display: flex;
  align-items: center;
}
.footer-maroon p {
  padding-left: 7rem;
}

@media screen and (max-width: 600px) {
  .footer-maroon p {
    padding-left: 2rem;
  }
}
</style>