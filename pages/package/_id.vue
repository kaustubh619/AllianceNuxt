<template>
  <div>
    <div class="about__us--block contact__us--block-image">
      <div>
        <div class="route">
          <nuxt-link class="text-decor text-decor--sub" to="/"
            >Home |</nuxt-link
          >
          <span>
            <nuxt-link to class="text-decor text-decor--sub">Package</nuxt-link>
          </span>
          <p class="text-decor text-decor-next">package</p>
        </div>
      </div>
    </div>

    <section id="pattern-bg">
      <div class="container">
        <div class="row pt-4">
          <div class="col-12 col-sm-12 col-md-8 col-md-8 mb-5">
            <span>{{ name }}</span>
            <div class="total_stay">
              <p style="text-align: center">
                {{ nights }}nights {{ days }}days
              </p>
            </div>

            <!-- <div class="mt-4">
              <img class="images__folder" src="~static/images/photo.png" alt />
            </div>-->

            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
              style="position:relative"
            >
              <!-- <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  v-for="(i,j) in allImages"
                  :key="j"
                  class="i === 1 ? 'active' : ''"
                  :data-slide-to="j"
                ></li>
              </ol>-->
              <div class="carousel-indicators">
                <img
                  v-for="(a, b) in allImages"
                  :key="b"
                  :src="a"
                  data-target="#carouselExampleIndicators"
                  :data-slide-to="b"
                  class="carousel-thumbnail"
                />
              </div>
              <div class="carousel-inner" role="listbox">
                <div
                  v-for="(item, i) in allImages"
                  :key="i"
                  class="carousel-item"
                  :class="i === 0 ? 'active' : ''"
                >
                  <img :src="item" class="cst-img" />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>

            <h5 class="custom-margin">Overview</h5>
            <div class="white-bg">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Package Name</th>
                    <th scope="col">{{ name }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Duration</td>
                    <td>{{ days }}days / {{ nights }}nights</td>
                  </tr>
                  <tr>
                    <td>Price(Per Person)</td>
                    <td>₹ {{ price }}</td>
                  </tr>
                  <tr>
                    <td>Package City Routes</td>
                    <td>{{ city_routes }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h4>Itinerary</h4>
              <div v-for="(d, e) in itinerary" :key="e">
                <post-image v-if="d.type === 'image'" :data="d" />
                <post-heading v-if="d.type === 'header'" :data="d" />
                <post-paragraph v-if="d.type === 'paragraph'" :data="d" />
                <post-list v-if="d.type === 'list'" :data="d" />
              </div>
              <hr />
            </div>
            <div>
              <h4>Inclusion</h4>
              <div v-for="(g, h) in inclusion" :key="h">
                <post-image v-if="g.type === 'image'" :data="g" />
                <post-heading v-if="g.type === 'header'" :data="g" />
                <post-paragraph v-if="g.type === 'paragraph'" :data="g" />
                <post-list v-if="g.type === 'list'" :data="g" />
              </div>
              <hr />
            </div>
            <div>
              <h4>Exclusion</h4>
              <div v-for="(k, l) in exclusion" :key="l">
                <post-image v-if="k.type === 'image'" :data="k" />
                <post-heading v-if="k.type === 'header'" :data="k" />
                <post-paragraph v-if="k.type === 'paragraph'" :data="k" />
                <post-list v-if="k.type === 'list'" :data="k" />
              </div>
              <hr />
            </div>
            <div>
              <h4>Policy & Terms</h4>
              <div
                v-for="(m, n) in policy"
                :key="n"
                style="margin-bottom: 20px"
              >
                <post-image v-if="m.type === 'image'" :data="m" />
                <post-heading v-if="m.type === 'header'" :data="m" />
                <post-paragraph v-if="m.type === 'paragraph'" :data="m" />
                <post-list v-if="m.type === 'list'" :data="m" />
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-md-4">
            <div
              class="p-2 mt-4 mb-2"
              style="background-color: #e1e1e7; font-weight: 600"
            >
              Tell us your requirement
            </div>
            <form class="white-bg">
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Enter Your Name"
                  v-model="cst_name"
                />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="Enter your Email Address"
                  v-model="cst_email"
                />
              </div>
              <div class="form-group">
                <label for="mobile">Mobile No</label>
                <input
                  type="text"
                  class="form-control"
                  id="mobile"
                  placeholder="Enter your Mobile Number"
                  v-model="cst_phone"
                />
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  class="form-control"
                  id="message"
                  rows="3"
                  v-model="cst_message"
                ></textarea>
              </div>
            </form>
            <button
              type="button"
              class="btn btn-lg int-button mb-5"
              @click="postPackageQuery"
            >
              Submit Your Query
            </button>
            <p class="dest-p">Relevant Packages</p>
            <div
              v-for="(g, h) in spliced_results"
              :key="h"
              class="box-class mb-3 p-1"
            >
              <nuxt-link
                :to="{
                  name: 'package-id',
                  params: { id: g.id }
                }"
              >
                <div class="mb-2">
                  <img class="tour_cards" :src="g.images.split(',')[0]" alt />
                </div>
                <p class="tags" style="color: black; margin-bottom: 0px">
                  {{ g.name }}
                </p>
                <div class="row">
                  <div class="col-6">
                    <p style="color: black; margin-bottom: 0px">
                      Duration: {{ g.duration - 1 }}N / {{ g.duration }}D
                    </p>
                  </div>
                  <div class="col-6">
                    <p style="color: black; text-align: right">
                      From ₹ {{ g.price }}
                    </p>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <notifications group="foo" position="top center" />
  </div>
</template>
<script>
  import PostHeading from "~/components/Heading.vue";
  import PostParagraph from "~/components/Paragraph.vue";
  import PostList from "~/components/List.vue";

  export default {
    components: { PostHeading, PostParagraph, PostList },

    data() {
      return {
        name: "",
        days: "",
        nights: "",
        price: "",
        city_routes: "",
        allImages: [],
        itinerary: [],
        inclusion: [],
        exclusion: [],
        policy: [],
        category: "",
        results: [],
        spliced_results: [],
        cst_name: "",
        cst_email: "",
        cst_phone: "",
        cst_message: "",
        package_id: ""
      };
    },
    mounted() {
      this.getPackageWithId();
    },

    methods: {
      getPackageWithId: function() {
        this.$store
          .dispatch("getPackageWithId", this.$route.params.id)
          .then(res => {
            this.name = res.data.name;
            this.days = res.data.duration;
            this.nights = res.data.duration - 1;
            this.price = res.data.price;
            this.city_routes = res.data.package_city_routes;
            this.allImages = res.data.images.split(",").splice(0, 4);
            this.itinerary = JSON.parse(res.data.itinerary);
            this.inclusion = JSON.parse(res.data.inclusion);
            this.exclusion = JSON.parse(res.data.exclusion);
            this.policy = JSON.parse(res.data.policy_and_terms);
            this.category = res.data.category;

            this.$store
              .dispatch("getPackagesByCategoryId", this.category)
              .then(response => {
                var packagelist = response.data;
                this.results = packagelist.filter(function(el) {
                  return el.name !== res.data.name;
                });
                this.spliced_results = this.results.reverse().splice(0, 2);
              });
          });
      },

      postPackageQuery: function() {
        var payload = new FormData();
        this.package_id = this.$route.params.id;
        payload.append("package", this.package_id);
        payload.append("name", this.cst_name);
        payload.append("email", this.cst_email);
        payload.append("phone", this.cst_phone);
        payload.append("message", this.cst_message);
        if (this.cst_name === "") {
          this.$notify({
            group: "foo",
            type: "error",
            text: "<h5>Name field cannot be empty</h5>",
            width: "600"
          });
        } else if (this.cst_email === "") {
          this.$notify({
            group: "foo",
            type: "error",
            text: "<h5>Email field cannot be empty</h5>",
            width: "600"
          });
        } else if (this.cst_phone === "") {
          this.$notify({
            group: "foo",
            type: "error",
            text: "<h5>Please enter your mobile number</h5>",
            width: "600"
          });
        } else if (this.cst_message === "") {
          this.$notify({
            group: "foo",
            type: "error",
            text: "<h5>Message field cannot be empty</h5>",
            width: "600"
          });
        } else {
          this.$store.dispatch("postPackageQuery", payload).then(res => {
            this.$notify({
              group: "foo",
              text: "<h5>Your request has been submitted</h5>",
              width: "600"
            });
            this.cst_name = "";
            this.cst_email = "";
            this.cst_phone = "";
            this.cst_message = "";
          });
        }
      }
    }
  };
</script>

<style>
.about__us--block {
  width: 100%;
  height: 34rem;
}

@media (max-width: 37.5em) {
  .about__us--block {
    height: 24em;
  }
}

.contact__us--block-image {
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.801),
      rgba(128, 128, 128, 0.801)
    ),
    url("~static/images/photo.png");
}

.route {
  position: absolute;
  top: 29%;
  left: 7%;
}

@media (min-width: 56.25em) and (max-width: 75em) {
  .route {
    top: 20%;
  }
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

@media (max-width: 37.5em) {
  .text-decor-next {
    font-size: 1.4rem;
  }
}

#pattern-bg {
  background-image: url("~static/images/pattern.png");
}

.total_stay {
  background-color: rgb(247, 168, 24);
  width: 140px;
  color: #fff;
  text-align: center;
}

@media (max-width: 37.5em) {
  .total_stay {
    width: 140px;
    padding: 0px 5px;
  }
}

.images__folder {
  width: 100%;
  height: auto;
}

.white-bg {
  background-color: #fff;
}

.days__count {
  width: 10%;
  height: 100%;
  background-color: #f7a818;
}

.tour_cards {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.int-button {
  background-color: #f7a818 !important;
  font-size: 0.9rem !important;
  padding: 0.5rem 2rem !important;
  width: 100%;
  color: white;
  font-weight: 600;
}

.int-button:hover {
  background-color: #ffce10 !important;
}

.tags {
  text-transform: uppercase;
}

.cst-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
}

@media (max-width: 37.5em) {
  .cst-img {
    height: 240px;
  }
}

@media (min-width: 37.5em) and (max-width: 56.25em) {
  .cst-img {
    height: 300px;
  }
}

.carousel-thumbnail {
  width: 100px;
  height: 100px;
  object-fit: cover;
  object-position: center;
  cursor: pointer;
  padding: 2px;
}

@media (max-width: 56.25em) {
  .carousel-thumbnail {
    width: 70px;
    height: 70px;
  }
}

.carousel-indicators {
  top: 100%;
  margin: none;
}

.custom-margin {
  margin-top: 120px;
}

.h2,
.h3,
.h4,
.h5,
.h6 {
  margin-top: 10px;
}

.box-class {
  box-shadow: 0px 0px 10px 1px grey;
}

.box-class:hover {
  box-shadow: 0px 0px 5px 1px grey;
}

.dest-p {
  color: black;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
}
</style>
