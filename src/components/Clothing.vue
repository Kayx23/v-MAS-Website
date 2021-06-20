<template>
  <div>
    <section class="clothing">
      <h2>2019-2020 designs</h2>
      <!-- modal code credit: https://github.com/Riley-Brown/vanilla-js-modal -->
      <!-- items -->
      <div class="modal-content-wrapper">
        <div class="image-modal-content">
          <img
            src="../assets/images/clothing/black-hoodie.jpg"
            alt="Black Hoodie"
          />
        </div>
        <div class="image-modal-content">
          <img
            src="../assets/images/clothing/red-hoodie.jpg"
            alt="Maroon Hoodie"
          />
        </div>
        <div class="image-modal-content">
          <img
            src="../assets/images/clothing/red-tee.jpg"
            alt="Maroon T-shirt"
          />
        </div>
      </div>

      <!-- modal popup -->
      <div class="image-modal-popup">
        <div class="wrapper">
          <span>&times;</span>
          <img src="" alt="Image Modal" />
          <div class="description"></div>
        </div>
      </div>
    </section>

    <p id="note">*2020-2021 designs are coming soon!</p>
    <br /><br /><br />
  </div>
</template>

<script>
export default {
  name: "Clothing",
  created() {
    import("../js/modal.js");
  },
};
</script>

<style scoped>
/* modal credit: https://github.com/Riley-Brown/vanilla-js-modal */

/* modal content styles */
.modal-content-wrapper {
  max-width: 1400px;
  width: 85%;
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px 0 10px 0;
}
.modal-content-wrapper .image-modal-content {
  flex: 0 0 30%;
  cursor: pointer;
  transition: 300ms ease-out;
  margin-right: 20px;
  margin-bottom: 40px;
}
@media (max-width: 992px) {
  .modal-content-wrapper .image-modal-content {
    flex: 0 0 45%;
  }
}
@media (max-width: 550px) {
  .modal-content-wrapper .image-modal-content {
    flex: 0 0 100%;
  }
}
.modal-content-wrapper .image-modal-content:hover {
  transform: scale(1.03);
  transition: 300ms ease-in;
}
.modal-content-wrapper .image-modal-content img {
  width: 100%;
  height: 350px;
  object-fit: contain;
  border-radius: 10px;
}

/* modal popup styles */
.image-modal-popup {
  position: fixed;
  overflow: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  animation: 500ms fadeIn;
  display: none;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.image-modal-popup .wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  margin-top: 30px;
  position: relative;
}

.image-modal-popup .description {
  text-align: center;
}
.image-modal-popup img {
  width: 650px;
  margin-top: 30px;
  margin-bottom: 10px;
  cursor: pointer;
  display: block;
  max-height: 600px;
  width: auto;
  height: auto;
}
@media (max-width: 550px) {
  .image-modal-popup img {
    width: 100%;
  }
}

.image-modal-popup span {
  position: fixed;
  top: 0;
  right: 15px;
  font-size: 5rem;
  color: rgb(218, 214, 214);
  cursor: pointer;
}
.image-modal-popup p {
  margin: 5px auto;
  font-size: 1.1rem;
}
.image-modal-popup a {
  margin-bottom: 5px;
  display: inline-block;
  color: #222;
  font-weight: 500;
  text-decoration: none;
  background: #fff;
  margin: 10px 10px;
  padding: 10px 15px;
  border-radius: 6px;
}

.clothing h2 {
  text-align: center;
  margin-top: 5rem;
}

#note {
  margin-left: 5rem;
}
</style>