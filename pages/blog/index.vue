<template>
  <div>
    <div class="about__us--block21 contact__us--block-image21">
      <div class="black-bg21 position-relative">
        <div class="route21">
          <nuxt-link to="/" class="text-decor text-decor--sub" href
            >Home |</nuxt-link
          >
          <span>
            <nuxt-link to class="text-decor text-decor--sub">Blog</nuxt-link>
          </span>
          <p
            class="text-decor text-decor-next"
            style="text-transform: uppercase; color: white!important"
          >
            blog
          </p>
        </div>
      </div>
    </div>

    <section id="pattern-bg">
      <div class="container">
        <div class="row pt-5">
          <div class="col-12 col-lg-8 mb-5">
            <div class="container-fluid">
              <div class="row">
                <div
                  class="col-12 col-md-6"
                  v-for="(x, y) in blog_list"
                  :key="y"
                >
                  <nuxt-link
                    :to="{
                      name: 'blog-id',
                      params: { id: x.id }
                    }"
                  >
                    <div class="mb-4">
                      <div style="overflow: hidden">
                        <img :src="x.thumbnail" class="vlog-images" alt="..." />
                      </div>
                      <div class="centered p-3 card-bg">
                        <p
                          class="vlog-date"
                          style="text-align: center; margin-bottom: 0px!important"
                        >
                          {{ x.added_date }}
                        </p>

                        <p
                          class="vlog-headline"
                          style="text-align: center; min-height: 40px"
                        >
                          {{ x.title }}
                        </p>
                        <p
                          class="vlog-date"
                          style="text-align: center; font-weight: 400"
                        >
                          Posted By Admin
                        </p>
                      </div>
                    </div>
                  </nuxt-link>
                </div>
                <div class="col-12 mt-5">
                  <p style="color: black; text-align: center">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <video
                    id="player"
                    poster="../images/video-poster.jpg"
                    playsinline
                    controls
                  >
                    <source src="~static/video-travel.mp4" type="video/mp4" />
                    <source src="product_video" type="video/webm" />
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <!-- <div class="searchbar__bg">
              <input
                type="text"
                placeholder="Search keyword"
                class="keyword__searchbar"
              />
              <i class="faas fa fa-search" aria-hidden="true"></i>
            </div> -->
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 col-lg-12">
                  <section class="search">
                    <input
                      type="text"
                      placeholder="Search Posts"
                      class="custom-form-input"
                      v-model="post_query"
                    />
                    <button
                      class="absolute-button"
                      type="submit"
                      @click="searchBlogs"
                    >
                      <i class="search-fa fa fa-search" aria-hidden="true"></i>
                    </button>
                  </section>
                </div>
                <div class="col-12 col-lg-12">
                  <div>
                    <p
                      style="color:black; font-size: 20px; font-weight: 600; text-align: center"
                    >
                      Recent Posts
                    </p>
                    <div class="mb-3" v-for="(i, j) in recent_posts" :key="j">
                      <nuxt-link
                        :to="{
                          name: 'blog-id',
                          params: { id: i.id }
                        }"
                      >
                        <div style="overflow: hidden">
                          <img
                            :src="i.thumbnail"
                            class="vlog-images"
                            alt="..."
                          />
                        </div>
                        <div class="p-3 card-bg">
                          <p
                            class="vlog-date"
                            style="text-align: center; margin-bottom: 0px!important"
                          >
                            {{ i.added_date }}
                          </p>
                          <p
                            class="vlog-headline"
                            style="text-align: center; min-height: 40px"
                          >
                            {{ i.title }}
                          </p>
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  let player;
  export default {
    data() {
      return {
        blog_list: [],
        recent_posts: [],
        post_query: ""
      };
    },
    mounted() {
      $("#blog").addClass("active");
      this.getAllBlogs();
      this.getSplicedBlogs();
      player = new Plyr("#player");
    },

    methods: {
      getAllBlogs: function() {
        this.$store.dispatch("getBlogs").then(res => {
          this.blog_list = res.data;
        });
      },

      getSplicedBlogs: function() {
        this.$store.dispatch("getBlogs").then(res => {
          this.recent_posts = res.data.reverse().splice(0, 2);
        });
      },

      searchBlogs: function() {
        this.$router.push("/query_blogs?" + this.post_query);
      }
    }
  };
</script>
<style>
.contact__us--block-image21 {
  background-image: url("~static/images/photo.png");
  background-size: cover;
  background-position: center;
}

.about__us--block21 {
  width: 100%;
  height: 34rem;
}

.about__us--block-image21 {
  background-image: url("~static/images/photo.png");
}
.black-bg21 {
  width: 100%;
  height: 34rem;
  background-color: #00000073;
}
@media (max-width: 56.25em) {
  .about__us--block21 {
    height: 22rem !important;
  }
  .black-bg21 {
    height: 22rem !important;
  }
}

.route21 {
  position: absolute;
  top: 50%;
  left: 7%;
}

#pattern-bg {
  background-image: url("~static/images/pattern.png");
}
.contact__us--block-image {
  background-image: url("~static/images/photo.png");
}
.black-bg {
  width: 100%;
  height: 34rem;
  background-color: #00000073;
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
.route {
  position: absolute;
  top: 50%;
  left: 7%;
}
.author__image {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}
.author__name {
  color: black;
  text-transform: uppercase;
  font-size: 0.8rem;
}
.vlog-date {
  font-size: 1rem;
  font-weight: 600;
  color: #d82533;
}
.vlog-images {
  width: 100%;
  height: 14rem;
  object-fit: cover;
  transition: all 0.2s linear;
}
.vlog {
  font-size: 0.8rem;
}
.card-border {
  border: 1px solid black;
}
.card-bg {
  background-color: #4950571c;
}
.vlog-headline {
  font-size: 1rem;
  color: black;
  font-weight: 600;
}
.post__image {
  width: 100%;
  height: 28rem;
}
.post-headline {
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 700;
}
.searchbar__bg {
  width: 100%;
  height: 36%;
  background-image: url("~static/images/12.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
/*.search__word {
  font-size: 1.2rem;
  color: #fff;
  font-weight: 500;
}*/
.centered {
  text-align: center;
}
.keyword__searchbar {
  width: 18rem;
  height: 2.5rem;
  text-transform: uppercase;
  font-size: 0.6rem;
  color: #000;
  padding-left: 0.4rem;
  position: absolute;
  bottom: 2rem;
  left: 1.2rem;
}
.faas {
  position: absolute;
  right: 6rem;
  bottom: 2.7rem;
  color: #848484;
  font-size: 1.1rem;
}
#dropdownMenuButton {
  background-color: #6c757d30;
}
.caret-down {
  padding-left: 6rem;
  font-size: 1rem;
}
.image-size {
  width: 100%;
  height: 70%;
}
.page-count {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
}
.chevron-arrows {
  background-color: #f7a818;
}
.hover__state {
  border: 4px solid #f4f4f5;
}
.hover__state:hover {
  background-color: #1f2732;
}
.hover__state:hover a {
  color: #fff;
}
.positioned-arrow {
  position: absolute;
  bottom: 0.8rem;
  left: 0.9rem;
}

.vlog-images:hover {
  transform: scale(1.1);
}

.search {
  width: 100%;
  height: 300px;
  background-image: url("~static/images/12.png");
  background-size: cover;
  background-position: center;
  margin-bottom: 30px;
}

@media (min-width: 56.25em) and (max-width: 75em) {
  .search {
    height: 240px;
  }
}

.custom-form-input {
  position: absolute;
  border: none;
  box-shadow: 0px 0px 5px 1px #f7a818;
  bottom: 15%;
  left: 10%;
  width: 60%;
  padding: 5px 10px;
  border-radius: 3px 0px 0px 3px;
}

.absolute-button {
  position: absolute;
  border: none;
  box-shadow: 0px 0px 5px 1px #f7a818;
  bottom: 15%;
  left: 70%;
  padding: 5px 10px;
  background: white;
  border-radius: 0px 3px 3px 0px;
}

.absolute-button:active,
.absolute-button:focus {
  outline: none;
}

.search-fa {
  color: #f7a818;
}
</style>