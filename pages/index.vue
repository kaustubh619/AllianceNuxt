<template>
  <div>
    <div id="demo" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="images/c2.jpeg" alt="Los Angeles" class="carousel1" />
        </div>
        <div class="carousel-item">
          <img src="images/c10.jpg" alt="Chicago" class="carousel1" />
        </div>
        <!-- <div class="carousel-item">
          <img src="images/c5.jpg" alt="New York" class="carousel" />
        </div>-->
      </div>

      <!-- Left and right controls -->
      <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>
    <div class="fixed-block">
      <span>Let Your Soul & Spirit Fly</span>
      <span>Discover The World</span>
      <div>
        <p class="text-1" style="color: white!important">
          Where are you going?
        </p>
      </div>
      <div class="transparent">
        <div class="transparent__div">
          <div class="d-flex transparent__div--form justify-content-center">
            <div>
              <input
                type="text"
                class="transparent__div--form--input form__fill--blank"
                placeholder="Enter Your Destination"
                style="padding: 0px 10px"
                v-model="destination"
              />
            </div>
            <div>
              <button
                @click="searchPackages"
                class="transparent__div--button--yellow form__fill--blank"
              >
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section id="theme">
      <div class="container-fluid">
        <div class="container">
          <div class="row p-4">
            <div class="text col-12">
              <h1 class="text--main">
                The Best Vacation Experience - Explore By Theme
              </h1>
              <h6 class="text--sub">
                Find exciting places to visit based on your favorite destination
                theme
              </h6>
            </div>
            <div
              class="col-12 col-sm-4 col-lg-3 p-3 theme-box"
              v-for="(i, j) in themes"
              :key="j"
            >
              <nuxt-link
                :to="{
                  name: 'category-id',
                  params: { id: i.id }
                }"
              >
                <div style="overflow: hidden">
                  <img :src="i.category_image" class="theme-img" />
                </div>
                <p class="theme-name">{{ i.name }}</p>
              </nuxt-link>
            </div>
            <div class="col-12">
              <nuxt-link to="/themes">
                <button class="theme-button">
                  View All Destination Themes
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="destination" v-for="(x, y) in categories" :key="y">
      <div
        :class="y % 2 === 0 ? 'destination__box' : 'tour__package--background'"
      >
        <div class="text">
          <h1 class="text--main">{{ x.name }}</h1>
          <h6 class="text--sub">{{ x.info }}</h6>
        </div>
        <div class="container">
          <div class="row">
            <div
              class="offset-1 col-10 offset-sm-0 col-sm-6 col-md-4 col-lg-3"
              v-for="(i, j) in x.packages.slice(0, 4)"
              :key="j"
            >
              <div class="card">
                <!-- <img src="images/d.png" class="card-img-top" alt /> -->
                <div style="overflow: hidden">
                  <img :src="i.images.split(',')[0]" class="card-img-top" alt />
                </div>
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <p class="card-text" style="color: black; font-weight: 600">
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

            <div class="d-flex justify-content-end w-100">
              <nuxt-link
                :to="{
                  name: 'tour_package-id',
                  params: { id: x.id }
                }"
                class="d-flex destination__search"
              >
                <div>Discover More</div>
                <div class="double--angle">
                  <img src="images/double-angle.png" alt />
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Logo from "~/components/Logo.vue";

  export default {
    components: {},

    data() {
      return {
        categories: [],
        themes: [],
        destination: ""
      };
    },

    mounted() {
      $("#home").addClass("active");
      this.getCategoriesWithPackages();
      this.getMainCategories();
    },

    methods: {
      getCategoriesWithPackages: function() {
        this.$store.dispatch("getCategoriesWithPackages").then(res => {
          this.categories = res.data;
        });
      },

      getMainCategories: function() {
        this.$store.dispatch("getMainCategories").then(res => {
          this.themes = res.data.reverse().splice(0, 4);
        });
      },

      searchPackages: function() {
        this.$router.push("/query_packages?" + this.destination);
      }
    }
  };
</script>

<style>
.carousel1 {
  width: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.9;
}

@media (min-width: 75em) {
  .carousel1 {
    height: 60vh !important;
  }
}

@media (min-width: 56.25em) and (max-width: 75em) {
  .carousel1 {
    height: 45vh !important;
  }
}

@media (max-width: 56.25em) {
  .carousel1 {
    height: 51vh !important;
  }
}

.fixed-block {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
}

.fixed-block span:first-child {
  display: block;
  font-size: 3.5rem;
  text-align: center;
  font-weight: 600;
  color: white;
  letter-spacing: 2px;
  z-index: 2;
  text-transform: uppercase;
}

.fixed-block span:nth-child(2) {
  display: block;
  font-size: 2.7rem;
  text-align: center;
  font-weight: 400;
  color: white;
  letter-spacing: 2px;
  z-index: 2;
  text-transform: uppercase;
}

@media (min-width: 37.5em) and (max-width: 56.25em) {
  .fixed-block span:first-child {
    font-size: 1.6rem;
    letter-spacing: 1px;
  }

  .fixed-block span:nth-child(2) {
    font-size: 1.5rem;
    letter-spacing: 1px;
  }
}

@media (min-width: 56.25em) and (max-width: 75em) {
  .fixed-block span:first-child {
    font-size: 1.8rem;
    letter-spacing: 1px;
  }

  .fixed-block span:nth-child(2) {
    font-size: 1.5rem;
    letter-spacing: 1px;
  }
}

@media (max-width: 37.5em) {
  .fixed-block span:first-child {
    font-size: 1.1rem;
    letter-spacing: 1px;
  }

  .fixed-block span:nth-child(2) {
    font-size: 1.1rem;
    letter-spacing: 1px;
  }
}

.text-1 {
  text-align: center;
  text-transform: uppercase;
  margin-top: 40px;
  color: white;
}

.custom-btn {
  border: none;
  background-color: #f7a818;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 0px 10px 10px 0px;
}

@media (max-width: 37.5em) {
  .custom-btn {
    padding: 6px 14px;
  }
}

.custom-input {
  border: none;
  border-radius: 10px 0px 0px 10px;
  padding: 5px 10px;
  background-color: #e7e7e7;
}

.custom-btn:focus,
.custom-input:focus {
  outline: none;
}

.custom-btn:hover {
  background-color: #ffce10;
}

.active {
  color: #f7a818 !important;
}

.destination__box {
  background-image: url("~static/images/pattern.png");
}

.tour__package--background {
  background-color: #f4f5f9;
}

.text {
  text-align: center;
  padding: 3rem 0;
}

.text--main {
  font-size: 1.8rem;
  color: #000;
  font-weight: 600;
}

.text--sub {
  font-size: 1.2rem;
  color: #707070;
}

@media (max-width: 37.5em) {
  .text--main {
    font-size: 1.4rem;
  }
  .text--sub {
    font-size: 1rem;
  }
}

.card {
  width: 100%;
  margin-bottom: 2rem;
}

.card-text {
  font-size: 0.8rem;
}

.duration {
  text-align: end;
  color: #f7a818 !important;
  font-weight: 600;
}

.price__tag {
  font-size: 1rem;
  color: #f7a818;
}

.button__padding {
  padding-top: 0.4rem;
}

.card__button {
  border-radius: 5px;
  border: none;
  background: #f7a818;
  color: #fff;
}

.card__button--text {
  font-size: 1rem;
  padding: 0 0.4rem;
}

.card__button:hover {
  background: #ffce10;
  color: black;
}

.destination__search {
  font-size: 1rem;
  font-weight: 600;
  color: #f7a818;
  justify-content: end;
  margin-right: 10px;
}

.double--angle {
  padding-left: 0.44rem;
  padding-bottom: 1rem;
}

.destination__search:hover {
  text-decoration: none;
  color: #f7a818;
  transform: scale(1.05);
}

.card-img-top {
  height: 180px !important;
  transition: all 0.4s;
}

.card-img-top:hover {
  transform: scale(1.2);
}
.transparent {
  position: relative;
  /* transform: translateY(3rem); */
}

.transparent__div {
  width: 31rem;
  /* height: 4rem; */
  border-radius: 6px;
  margin: auto;
}

@media (max-width: 37.5em) {
  .transparent__div {
    width: 23rem;
  }
}
.transparent__div--form {
  border: 5px solid #00000082;
  border-radius: 5px;
}
.transparent__div--form--input {
  width: 24rem;
  height: 3rem;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border: none;
  background: #f8f8f8;
  color: black;
}
@media (max-width: 37.5em) {
  .transparent__div--form--input {
    width: 16rem;
  }
}
.transparent__div--button--yellow {
  width: 6.4rem;
  height: 3rem;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #f7a818;
  border: none;
  /*position: absolute;
  right: -6rem;*/
}

.theme-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  object-position: center;
  transition: all 0.4s;
}

#theme {
  background-color: #f4f5f9;
}

.theme-name {
  margin-top: -40px;
  height: 40px;
  color: white;
  background: rgba(0, 0, 0, 0.8);
  text-align: center;
  padding: 8px;
}

.theme-img:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.theme-button {
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: #f7a818;
  padding: 10px 34px;
  border: none;
  font-weight: 600;
  border-radius: 5px;
}

.theme-button:hover {
  background-color: #ffce10;
  box-shadow: 0px 0px 10px 1px grey;
}
</style>
