<template>
  <div>
    <div class="about__us--block about__us--block-image">
      <div class="black-bg position-relative">
        <div class="route1">
          <nuxt-link to="/" class="text-decor text-decor--sub" href
            >Home</nuxt-link
          >
          <span style="color: white">|</span>
          <span>
            <nuxt-link to href class="text-decor text-decor--sub"
              >About us</nuxt-link
            >
          </span>
          <p class="text-decor text-decor-next" style="color: white">
            About Us
          </p>
        </div>
      </div>
    </div>

    <div class="container-fluid custom-back pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6">
            <div class="custom-block">
              <p class="text-11">We Believe That Interior Beauty Lasts Long</p>
              <p class="text-12">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              </p>
            </div>
          </div>
          <div class="col-12 col-sm-6">
            <div class="custom-block-right">
              <img src="~static/images/wide.png" class="my-img-1" />
              <img src="~static/images/p.png" class="my-img-2" />
            </div>
          </div>
        </div>
      </div>
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

    <div class="container">
      <div class="mb-5">
        <p class="pt-3 m-0 headline" style="text-align: center; color: black">
          We Helped 1000+ Travel the World
        </p>
        <p
          class="headline-sub"
          style="text-align: center; color: black; font-weight: 600"
        >
          Our customers love our offers and our advice, but see what they have
          to say.
        </p>
      </div>
      <div class="row mb-3 mr-1" v-for="(x, y) in comments" :key="y">
        <div class="col-3 col-md-3">
          <div>
            <img
              class="feedback-photos centered"
              style="display: block; margin-left: auto; margin-right: auto; margin-top: 10px;"
              :src="x.customer_image"
              alt
            />
            <br />
            <p class="feedback-text" style="color: black; text-align: center">
              {{ x.customer_location }}
            </p>
          </div>
        </div>
        <div class="poligon col-9 col-md-9 col-lg-9">
          <div class="poligon-inside">
            <p class="pt-2 m-0 feedback-primary">
              <b>"{{ x.trip_name }}"</b>
            </p>
            <p
              class="feedback-text"
              style="color: black;padding-left:8px;padding-right:8px"
            >
              {{ x.customer_comment }}
            </p>
          </div>
        </div>
      </div>

      <div>
        <p class="headline mt-5" style="color: black; text-align: center;">
          Why Vacation with Us
        </p>
        <p
          class="headline-sub m-0"
          style="color: black; text-align: center; font-size: 20px"
        >
          Change the way you Travel
        </p>
        <p class="headline-sub m-0 pb-2">
          Even if you are looking for somewhere to eat in a new city, our travel
          guides will help you make the best decision
        </p>
      </div>
      <div class="row mb-5">
        <div class="col-12 col-sm-12 col-md-4 col-lg-4 title">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-blue">Experience Counts</h5>
              <p class="card-text text-dark">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-4 col-lg-4 title">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-blue">Customer Service</h5>
              <p class="card-text text-dark">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-4 col-lg-4 title">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-blue">Going That Extra Mile</h5>
              <p class="card-text text-dark">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren
              </p>
            </div>
          </div>
        </div>
        <p
          class="feedback-text p-3 text-dark"
          style="font-size: 15px; font-weight: 400"
        >
          <i>
            Our trips are the best choice for the wanderer in you, feel free to
            contact one of our handpicked top notched customer friendly travel
            agent and we will be happy to serve you and provide you with best
            vacation planning
          </i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        comments: []
      };
    },
    mounted() {
      $("#about").addClass("active");
      this.getTripComments();
    },
    methods: {
      getTripComments: function() {
        this.$store.dispatch("getTripComments").then(res => {
          this.comments = res.data.reverse().splice(0, 3);
        });
      }
    }
  };
</script>

<style>
.about__us--block {
  width: 100%;
  height: 34rem;
}

.about__us--block-image {
  background-image: url("~static/images/photo.png");
}
.black-bg {
  width: 100%;
  height: 34rem;
  background-color: #00000073;
}
@media (max-width: 56.25em) {
  .about__us--block {
    height: 22rem !important;
  }
  .black-bg {
    height: 22rem !important;
  }
}
.route1 {
  position: absolute;
  top: 50%;
  left: 7%;
}
.text-decor {
  text-transform: uppercase;
  color: #fff;
}
.text-decor-sub {
  font-size: 0.95rem;
  font-weight: 500;
}
.text-decor-next {
  font-size: 2rem;
  font-weight: 700;
}

.coloured_linear {
  background: linear-gradient(to right, #ffec97, #f55172);
}
.container-padding {
  padding-top: 9rem;
}
.coloured-linear--text {
  font-size: 3rem;
  font-weight: 700;
}
.coloured-linear--sub {
  font-size: 1rem;
  color: #292929;
}
.btn-decor {
  font-size: 1rem;
  padding: 0.7rem 1.5rem;
}
.headline {
  font-size: 2rem;
  font-weight: 600;
}
.headline-sub {
  font-size: 0.8rem;
}
.feedback-photos {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}
.feedback-box {
  border: 1px solid black;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 100%, 0 100%);
}
.poligon {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  min-height: 120px;
  background: #d7d7d7;
  -webkit-clip-path: polygon(
    2% 0,
    100% 0,
    100% 100%,
    2% 100%,
    2% 35%,
    0 25%,
    2% 15%
  );
  clip-path: polygon(2% 0, 100% 0, 100% 100%, 2% 100%, 2% 35%, 0 25%, 2% 15%);
}

.poligon-inside {
  position: absolute;
  overflow: auto;
  top: 1px;
  left: 2px;
  right: 1px;
  bottom: 1px;
  background: white;
  -webkit-clip-path: polygon(
    2% 0,
    100% 0,
    100% 100%,
    2% 100%,
    2% 35%,
    0 25%,
    2% 15%
  );
  clip-path: polygon(2% 0, 100% 0, 100% 100%, 2% 100%, 2% 35%, 0 25%, 2% 15%);
  padding: 0px 30px;
}
.feedback-primary {
  font-size: 0.85rem;
  color: #292929;
}
.rating-star::before {
  font-size: 0.7rem;
  color: #9bf2f2;
  padding-right: 0.2rem;
}
.feedback-text {
  font-size: 0.8rem;
}
.more-info {
  color: blue;
  font-size: 0.8rem;
}

.white-bg {
  background-color: #fff;
}
.cst-para {
  z-index: 5;
  height: auto;
  margin-top: 8rem;
}
@media (min-width: 75em) {
  .custom-img {
    margin-left: -100px;
  }
}

.custom-back {
  background: url("~static/images/pattern.png");
}

@media (max-width: 37.5em) {
  .xs-class {
    margin-top: 45px;
  }
}

@media (min-width: 37.5em) and (max-width: 56.25em) {
  .title {
    text-align: justify;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .custom-img {
    margin-left: -4rem;
  }
  .cst-para {
    margin-top: 3.5rem;
  }
  .trip-img {
    height: 100%;
    object-fit: contain;
  }
}

a {
  text-decoration: none !important;
}

a:hover {
  color: #ffce10;
}

.text-11 {
  color: black;
  font-size: 30px;
  font-weight: 600;
}
.text-12 {
  color: black;
}
.custom-block {
  background: #f8f8f8;
  padding: 10px 30px;
  z-index: 100;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

@media (min-width: 56.25em) {
  .custom-block {
    top: 33%;
  }
}

@media (max-width: 37.5em) {
  .text-11 {
    font-size: 24px;
    text-align: center;
  }
  .text-12 {
    font-size: 18px;
    text-align: justify;
  }
}

@media (max-width: 56.25em) {
  .custom-block {
    position: relative;
  }
}

.my-img-1 {
  width: 100%;
  outline: 2px dashed #ffce10;
  outline-offset: 15px;
}

@media (min-width: 56.25em) {
  .my-img-1 {
    margin-left: -100px;
  }
}

@media (max-width: 37.5em) {
  .my-img-1 {
    margin-top: 30px;
  }
}

.my-img-2 {
  width: 50%;
  outline: 2px dashed #ffce10;
  outline-offset: 15px;
}

@media (min-width: 56.25em) {
  .my-img-2 {
    margin-left: 40%;
    margin-top: -100px;
  }
}

@media (max-width: 56.25em) {
  .my-img-2 {
    margin-left: 25%;
  }
}

.text-dark {
  color: black;
}

.text-blue {
  color: #66ccff;
}

.card-body {
  box-shadow: 0px 8px 3px #d9d9d9;
}
</style>
