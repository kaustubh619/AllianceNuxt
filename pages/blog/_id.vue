<template>
  <div>
    <div class="about__us--block31 contact__us--block-image31">
      <div class="black-bg31 position-relative">
        <div class="route31">
          <nuxt-link to="/" class="text-decor text-decor--sub"
            >Home |</nuxt-link
          >
          <span>
            <a href class="text-decor text-decor--sub">Blog</a>
          </span>
          <p class="text-decor text-decor-next">blog</p>
        </div>
      </div>
    </div>

    <section id="pattern-bg">
      <div class="container">
        <div class="row pt-3">
          <div
            class="col-12 col-sm-12 col-md-8 col-lg-8 border_around div__aligned"
          >
            <div>
              <img
                class="post__image"
                style="margin-top: 34px"
                :src="thumb"
                alt
              />
            </div>
            <div class="d-flex mt-4 mb-4">
              <div
                style="display: inline-block;; margin-left: auto"
                class="p-1"
              >
                <!-- <span class="span__para">Added On</span> -->
                <i class="icon-color fa fa-calendar" aria-hidden="true"></i>
                <span class="span__para">{{ date }}</span>
              </div>
              <div
                style="display: inline-block;; margin-right: auto"
                class="p-1"
              >
                <!-- <span class="span__para">Posted By</span> -->
                <i class="icon-color fa fa-user" aria-hidden="true"></i>
                <span class="span__para">Admin</span>
              </div>
            </div>
            <div>
              <p
                class="mt-3 post-headline"
                style="color: black; text-align: left"
              >
                {{ title }}
              </p>
            </div>
            <div v-for="(item, i) in post" :key="i">
              <post-image v-if="item.type === 'image'" :data="item" />
              <post-heading v-if="item.type === 'header'" :data="item" />
              <post-paragraph v-if="item.type === 'paragraph'" :data="item" />
              <post-list v-if="item.type === 'list'" :data="item" />
            </div>
            <div class="row flex p-2 mt-3">
              <div class="cst-flex-1">
                <img
                  class="f__border-radius content__writer--image img-float"
                  src="~static/images/travel.png"
                  alt
                />
              </div>
              <div class="cst-flex-2">
                <p class="p-class-1">
                  <span style="display: block">Content Specialist</span>
                  <span style="display: block; color: black"
                    >Denzel Washington</span
                  >
                </p>
              </div>
            </div>
            <hr style="border: 1px solid transparent" />
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-4 pt-3">
            <div class="col-12 mt-3">
              <section class="search1">
                <input
                  type="text"
                  placeholder="Search Posts"
                  class="custom-form-input1"
                  v-model="post_query"
                />
                <button
                  class="absolute-button1"
                  type="submit"
                  @click="searchBlogs"
                >
                  <i class="search-fa1 fa fa-search" aria-hidden="true"></i>
                </button>
              </section>
            </div>
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
                    <img :src="i.thumbnail" class="vlog-images" alt="..." />
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
    </section>
  </div>
</template>
<script>
  import PostImage from "~/components/Image.vue";
  import PostHeading from "~/components/Heading.vue";
  import PostParagraph from "~/components/Paragraph.vue";
  import PostList from "~/components/List.vue";

  export default {
    components: { PostImage, PostHeading, PostParagraph, PostList },
    data() {
      return {
        date: "",
        thumb: "",
        title: "",
        recent_posts: [],
        post: [],
        post_query: ""
      };
    },
    mounted() {
      this.getBlogById();
      this.getSplicedBlogs();
    },
    methods: {
      getBlogById: function() {
        this.$store.dispatch("getBlogById", this.$route.params.id).then(res => {
          this.date = res.data.added_date;
          this.thumb = res.data.thumbnail;
          this.title = res.data.title;
          this.post = JSON.parse(res.data.content);
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
.contact__us--block-image31 {
  background-image: url("~static/images/photo.png");
  background-size: cover;
  background-position: center;
}

.about__us--block31 {
  width: 100%;
  height: 34rem;
}

.about__us--block-image31 {
  background-image: url("~static/images/photo.png");
}
.black-bg31 {
  width: 100%;
  height: 34rem;
  background-color: #00000073;
}
@media (max-width: 56.25em) {
  .about__us--block31 {
    height: 22rem !important;
  }
  .black-bg31 {
    height: 22rem !important;
  }
}

.route31 {
  position: absolute;
  top: 50%;
  left: 7%;
}
#pattern-bg {
  background-image: url("~static/images/pattern.png");
}
#dropdownMenuButton {
  background-color: #6c757d30;
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
.vlog-images {
  width: 100%;
  height: 14rem;
  object-fit: cover;
}
.vlog-date {
  font-size: 1rem;
  color: #d82533;
}
.image-size {
  width: 100%;
  height: 70%;
}
.caret-down {
  padding-left: 6rem;
  font-size: 1rem;
}
.content-image {
  width: 95%;
  height: 15rem;
}
.post__image {
  width: 100%;
  height: 28rem;
}
.int-button {
  background-color: #f7a818 !important;
  font-size: 0.9rem !important;
  padding: 0.5rem 2rem !important;
}
.searchbar__bg {
  width: 100%;
  height: 36%;
  background-image: url("~static/images/12.png");
  position: relative;
  background-repeat: no-repeat;
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

.icon-color {
  color: #f7a818;
  font-size: 1.5rem;
}
.tags {
  text-transform: uppercase;
}
.white {
  color: #fff;
}
.centered {
  text-align: center;
}
.span__para {
  color: #848484;
  font-size: 1rem;
  font-weight: 600;
}
.content-image {
  width: 95%;
  height: 15rem;
}
.tags__font {
  font-size: 1rem;
}
.author__name {
  color: black;
  text-transform: uppercase;
  font-size: 0.8rem;
}
.tags__namefont {
  font-size: 1rem;
  font-weight: 600;
}
.icon__heart-color {
  color: #d82533;
  font-size: 1rem;
}
.logo-box {
  width: 8rem;
  height: 3.9rem;
}
.white-coloured {
  color: #fff;
  font-size: 1.5rem;
  padding-top: 1.1rem;
}
.navyblue-bg {
  background-color: #3b5998;
}
.skyblue-bg {
  background-color: #00abef;
}
.red-bg {
  background-color: #dd4b39;
}
.pink-bg {
  background-color: #ea4c8d;
}
.content__writer--image {
  width: 11rem;
  height: 11rem;
  border: 6px solid #6c757d33;
}
.f__border-radius {
  border-radius: 50%;
}
.content__category {
  color: #f7a818;
  font-size: 0.8rem;
  font-weight: 600;
}
.content__writer--name {
  color: black;
  font-size: 1.5rem;
  font-weight: 700;
}
.sm-logo {
  font-size: 1.3rem;
}
.f-color {
  color: #3b5998;
}
.t-color {
  color: #00abef;
}
.i-color {
  color: #dd4b39;
}
.content__card {
  background-color: #1f2732;
}
.content__card-padding {
  padding: 2rem 2rem 1rem;
}
.previous {
  font-size: 0.9rem;
}
.pre-post {
  color: #d82533;
  font-size: 0.7rem;
  font-weight: 600;
}
.pre-post__details {
  font-weight: 600;
}
.border__around--bottom {
  border-bottom: 1px solid #383d4130;
}
.comment__section--images {
  width: 6rem;
  height: 6rem;
  border: 5px solid #4950573b;
}
.comment__name {
  color: #000;
}
.yellow__coloured-date {
  color: #f7a818;
}
.shades {
  color: #929292;
}
.add__comment {
  width: 4rem;
  height: 4rem;
  border: 3px solid #4950573b;
}

@media (max-width: 56.25em) {
  .post__image {
    height: 16rem !important;
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

.cst-flex-1 {
  flex: 1;
}

.cst-flex-2 {
  flex: 1;
}

.img-float {
  float: right;
}

.p-class-1 {
  color: #f7a818;
  font-size: 20px;
  margin-bottom: 0px !important;
  margin-top: 50px;
  margin-left: 10px;
  float: left;
}

.search1 {
  width: 100%;
  height: 300px;
  background-image: url("~static/images/12.png");
  background-size: cover;
  background-position: center;
  margin-bottom: 30px;
}

@media (min-width: 37.5em) and (max-width: 56.25em) {
  .search1 {
    height: 170px;
  }
}

@media (min-width: 56.25em) and (max-width: 75em) {
  .search1 {
    height: 240px;
  }
}

.custom-form-input1 {
  position: absolute;
  border: none;
  box-shadow: 0px 0px 5px 1px #f7a818;
  bottom: 7%;
  left: 10%;
  width: 60%;
  padding: 5px 10px;
  border-radius: 3px 0px 0px 3px;
}

.absolute-button1 {
  position: absolute;
  border: none;
  box-shadow: 0px 0px 5px 1px #f7a818;
  bottom: 7%;
  left: 70%;
  padding: 5px 10px;
  background: white;
  border-radius: 0px 3px 3px 0px;
}

.absolute-button1:active,
.absolute-button1:focus {
  outline: none;
}

.search-fa1 {
  color: #f7a818;
}
</style>