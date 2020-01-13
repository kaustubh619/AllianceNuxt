<template>
  <div>
    <div class="custom-id_block1 custom-id_image1">
      <div class="custom-id-bg1 position-relative">
        <div class="custom-id1">
          <nuxt-link to="/" class="text-decor1 text-decor--sub1"
            >Home</nuxt-link
          >
          <span style="color: white">|</span>
          <span>
            <nuxt-link to href class="text-decor1 text-decor--sub1"
              >Packages</nuxt-link
            >
          </span>
        </div>
      </div>
    </div>
    <div>
      <section id="tour-package-by-id1">
        <div class="container-fluid custom-id-back1 p-0">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h4 style="text-align: center" class="mt-5">
                  <!-- The Best Vacation Experience - Explore By Theme -->
                  Search results for "{{ query }}"
                </h4>
                <h3
                  style="text-align: center; font-weight: 400; font-size: 22px"
                  class="mb-5 after-content"
                >
                  Total {{ count }} results found
                </h3>
                <hr
                  style="display: block; margin-left: auto; margin-right: auto; width: 200px; margin-top: -51px;"
                />
              </div>
              <div
                class="offset-1 col-10 offset-sm-0 col-sm-6 col-md-4 col-lg-3 mt-4"
                v-for="(i, j) in query_packages"
                :key="j"
              >
                <div class="card">
                  <div style="overflow: hidden">
                    <img
                      :src="i.images.split(',')[0]"
                      class="card-img-top"
                      alt
                    />
                  </div>
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <p
                        class="card-text"
                        style="color: black; font-weight: 600"
                      >
                        {{ i.name }}
                      </p>
                      <div class="card-text duration">
                        Duration
                        <p style="color: #f7a818">
                          {{ i.duration }}D/{{ i.duration - 1 }}N
                        </p>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between">
                      <p class="price__tag">₹ {{ i.price }}</p>
                      <nuxt-link
                        :to="{
                          name: 'package-id',
                          params: { id: i.id }
                        }"
                        class="btn detail"
                      >
                        <div class="button__padding">
                          <button class="card__button">
                            <span class="card__button--text">Book</span>
                          </button>
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row m-0">
            <div class="col-12 mt-5">
              <p class="famous-para">Popular Places Around The World</p>
              <hr
                style="display: block; margin-left: auto; margin-right: auto; width: 200px; margin-top: -33px;"
              />
            </div>
            <div class="col-12 col-sm-3 p-0 m-0 hover-class">
              <img src="~static/images/F1.png" class="famous-img" />
              <div class="overlay-class"></div>
              <div class="overlay-class-text">
                <span style="text-transform: uppercase"
                  >Proper Guided Tour</span
                >
                <span>Dubai Dream Holiday and Fun Package</span>
              </div>
            </div>
            <div class="col-12 col-sm-3 p-0 m-0 hover-class">
              <img src="~static/images/F2.png" class="famous-img" />
              <div class="overlay-class"></div>
              <div class="overlay-class-text">
                <span style="text-transform: uppercase"
                  >Proper Guided Tour</span
                >
                <span>Paris Dream Holiday and Fun Package</span>
              </div>
            </div>
            <div class="col-12 col-sm-3 p-0 m-0 hover-class">
              <img src="~static/images/F3.png" class="famous-img" />
              <div class="overlay-class"></div>
              <div class="overlay-class-text">
                <span style="text-transform: uppercase"
                  >Proper Guided Tour</span
                >
                <span>Santorini Island Dream Holiday and Fun Package</span>
              </div>
            </div>
            <div class="col-12 col-sm-3 p-0 m-0 hover-class">
              <img src="~static/images/F4.png" class="famous-img" />
              <div class="overlay-class"></div>
              <div class="overlay-class-text">
                <span style="text-transform: uppercase"
                  >Proper Guided Tour</span
                >
                <span>Italy Dream Holiday and Fun Package</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="coloured_linear pb-3">
      <div class="container">
        <div class="row">
          <div class="pt-5 col-12 col-sm-12 col-md-6 col-lg-6">
            <p class="coloured-linear--text">
              Get Ready for Real time Adventure
            </p>
            <p class="coloured-linear--sub">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna
            </p>
            <div>
              <nuxt-link to="/themes">
                <button type="button" class="btn btn-sm btn-dark btn-decor">
                  BOOK A TRIP
                </button>
              </nuxt-link>
            </div>
          </div>
          <div class="pt-3 col-12 col-sm-12 col-md-6 col-lg-6">
            <img
              class="trip-img"
              src="~static/images/undraw_trip.png"
              style="width:100%;"
              alt
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        query_packages: [],
        query: "",
        count: ""
      };
    },
    mounted() {
      this.getQueryPackages();
      this.query = window.location.href.split("?")[1];
    },

    methods: {
      getQueryPackages: function() {
        var query = window.location.href.split("?")[1];
        this.$store.dispatch("searchPackages", query).then(res => {
          this.query_packages = res.data;
          if (res.data.length !== 0) {
            this.count = res.data.length;
          } else {
            this.count = 0;
          }
        });
      }
    }
  };
</script>

<style>
.custom-id_block1 {
  width: 100%;
  height: 34rem;
}

.custom-id_image1 {
  background-image: url("~static/images/tour.jpg");
  background-size: cover;
  background-position: center;
}
.custom-id-bg1 {
  width: 100%;
  height: 34rem;
  background-color: #00000073;
}

.custom-id1 {
  position: absolute;
  top: 50%;
  left: 7%;
}

@media (max-width: 56.25em) {
  .custom-id-bg1 {
    height: 22rem !important;
  }
  .custom-id_block1 {
    height: 22rem !important;
  }
}

.custom-id-back1 {
  background: url("~static/images/pattern.png");
  background-size: cover;
  background-position: center;
}

.famous-img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  object-position: center;
}

@media (min-width: 37.5em) and (max-width: 56.25em) {
  .famous-img {
    height: 270px;
  }
}

@media (min-width: 56.25em) and (max-width: 75em) {
  .famous-img {
    height: 340px;
  }
}

.hover-class {
  cursor: pointer;
}

.hover-class:hover > .overlay-class {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
  opacity: 0.8;
  background-image: linear-gradient(to bottom, #f65e75, #ffec97);
  z-index: 100;
  display: block;
}

.hover-class > .overlay-class-text {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
  opacity: 1;
  z-index: 1000;
  display: none;
}

.hover-class:hover > .overlay-class-text {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  opacity: 1;
  z-index: 1000;
  display: block;
  text-align: center;
  color: white;
}

.overlay-class-text span:first-child {
  display: block;
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -43%);
  font-size: 18px;
}

.overlay-class-text span:nth-child(2) {
  display: block;
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 28px;
  font-weight: 600;
}

@media (min-width: 37.5em) and (max-width: 75em) {
  .overlay-class-text span:first-child {
    top: 30%;
    font-size: 12px;
  }

  .overlay-class-text span:nth-child(2) {
    top: 40%;
    font-size: 16px;
  }
}

.famous-para {
  text-align: center;
  font-size: 30px;
  color: black;
}

@media (max-width: 37.5em) {
  .famous-para {
    font-size: 20px;
    font-weight: 600;
  }
}

.famous-para::after {
  content: "";
  border-bottom: 5px solid #f7a818;
  width: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 30px;
}

@media (min-width: 37.5em) {
  .hover-class {
    margin-top: 30px !important;
  }
}

.after-content::after {
  content: "";
  border-bottom: 5px solid #f7a818;
  width: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 30px;
}

.text-decor1 {
  text-transform: uppercase;
  color: #fff;
}

.text-decor-sub1 {
  font-size: 0.95rem;
  font-weight: 500;
}

.text-decor-next1 {
  font-size: 2rem;
  font-weight: 700;
}

@media (max-width: 37.5em) {
  .text-decor-next1 {
    font-size: 1.4rem;
  }
}
</style>