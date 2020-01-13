<template>
  <div>
    <div class="tour_block tour_image">
      <div class="tour-bg position-relative">
        <div class="tour">
          <nuxt-link to="/" class="text-decor text-decor--sub">Home</nuxt-link>
          <span style="color: white">|</span>
          <span>
            <nuxt-link to href class="text-decor text-decor--sub"
              >Themes</nuxt-link
            >
          </span>
          <p class="text-decor text-decor-next" style="color: white">
            Destination Themes
          </p>
        </div>
      </div>
    </div>
    <div class="container-fluid tour-back p-5">
      <div class="container">
        <div class="row">
          <div class="text-theme col-12" style="text-align: center">
            <h1 class="text-theme--main">
              The Best Vacation Experience - Explore By Theme
            </h1>
            <h6 class="text-theme--sub">
              Find exciting places to visit based on your favorite destination
              theme
            </h6>
          </div>
          <div
            class="col-lg-3 p-3 col-md-6"
            v-for="(x, y) in categories"
            :key="y"
          >
            <nuxt-link
              :to="{
                name: 'category-id',
                params: { id: x.id }
              }"
            >
              <div class="body1">
                <div
                  class="body2"
                  :style="{
                    background: `linear-gradient( to right bottom, rgba(0, 0, 0, 0.701), rgba(128, 128, 128, 0.601) ), url(${x.category_image}) center no-repeat`,
                    backgroundSize: 'cover'
                  }"
                >
                  <h5
                    style="text-align: center; display: block; width: 100%; color: white"
                  >
                    {{ x.name }}
                  </h5>
                </div>
              </div>
            </nuxt-link>
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
        categories: []
      };
    },
    mounted() {
      $("#categories").addClass("active");
      this.getMainCategories();
    },
    methods: {
      getMainCategories: function() {
        this.$store.dispatch("getMainCategories").then(res => {
          this.categories = res.data;
        });
      }
    }
  };
</script>

<style>
.tour_block {
  width: 100%;
  height: 34rem;
}

.tour_image {
  background-image: url("~static/images/tour.jpg");
  background-size: cover;
  background-position: center;
}
.tour-bg {
  width: 100%;
  height: 34rem;
  background-color: #00000073;
}

.tour {
  position: absolute;
  top: 50%;
  left: 7%;
}

@media (max-width: 56.25em) {
  .tour_block {
    height: 22rem !important;
  }
  .tour-bg {
    height: 22rem !important;
  }
}

.tour-back {
  background: url("~static/images/pattern.png");
  background-size: cover;
  background-position: center;
}

.body1 {
  border-radius: 5px;
  border: 1px solid #d7d7d7;
  width: 100%;
  height: 170px;
  padding: 15px;
  background-color: white;
  transition: all 0.3s linear;
}

.body2 {
  border-radius: 5px;
  border: 1px solid #d7d7d7;

  height: 140px;
  /* display: table-cell; */
  vertical-align: middle;
  padding: 50px 0px;
}

.body1:hover {
  transform: scale(1.05);
}

.body2:hover {
  background-color: #f7a818;
  cursor: pointer;
}

.text-theme {
  padding: 0;
}

.text-theme--main {
  font-size: 1.8rem;
  color: #000;
  font-weight: 600;
}

.text-theme--sub {
  font-size: 1.2rem;
  color: #707070;
}

@media (max-width: 37.5em) {
  .text-theme--main {
    font-size: 1.4rem;
  }
  .text-theme--sub {
    font-size: 1rem;
  }
}
</style>