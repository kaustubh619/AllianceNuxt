<template>
  <div>
    <div class="contact__us--block contact__us--block-image1">
      <div class="black-bg-contact position-relative">
        <div class="route2">
          <nuxt-link to="/" class="text-decor text-decor--sub" href
            >Home</nuxt-link
          >
          <span style="color: white">|</span>
          <span>
            <nuxt-link to class="text-decor text-decor--sub"
              >Contact us</nuxt-link
            >
          </span>
          <p class="text-decor text-decor-next">Contact Us</p>
        </div>
      </div>
    </div>

    <div class="container-fluid custom-contact-back">
      <div class="container">
        <div class="row">
          <div class="col-12 mt-5 mb-5">
            <iframe
              class="map-height"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.3138034564813!2d91.77683231502903!3d26.153907783460223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5916b08ceb75%3A0xb71b088b0d036a4!2sAlliance%20Services!5e0!3m2!1sen!2sin!4v1578758638130!5m2!1sen!2sin"
              width="100%"
              frameborder="0"
              style="border:0;"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-6 col-lg-4">
            <p class="p-font">
              <i class="fa-contact fa fa-clock-o" aria-hidden="true"></i>
              <span>9:30 A.M. - 7:30 P.M.</span>
            </p>
            <p class="p-font">
              <i class="fa-contact fa fa-phone" aria-hidden="true"></i>
              <span>+91 98541 02087</span>
            </p>
            <p class="p-font">
              <i class="fa-contact fa fa-map-marker" aria-hidden="true"></i>
              <span
                >House No. 74, GMCH Road, Near IGNOU Office, Christian Basti,
                Guwahati, Assam 781005</span
              >
            </p>
            <p class="p-font">
              <i class="fa-contact fa fa-paper-plane" aria-hidden="true"></i>
              <span>alliance_services@gmail.com</span>
            </p>
          </div>
          <div class="col-12 col-lg-4 col-sm-6">
            <input
              type="text"
              placeholder="Your Name"
              class="input-contact xs-class-1"
              v-model="cst_name"
            />
            <input
              type="email"
              placeholder="Email Address"
              class="input-contact mt-3"
              v-model="cst_email"
            />
            <input
              type="number"
              placeholder="Mobile Number"
              class="input-contact mt-3"
              v-model="cst_phone"
            />
          </div>
          <div class="col-12 col-lg-4 offset-sm-6 col-sm-6 offset-lg-0">
            <textarea
              style="height: 181px;"
              rows="6"
              class="input-contact xs-class-2"
              placeholder="Your Message"
              v-model="cst_message"
            ></textarea>
            <button type="submit" class="contact-btn" @click="postPackageQuery">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
    <notifications group="foo" position="top center" />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        cst_name: "",
        cst_email: "",
        cst_phone: "",
        cst_message: ""
      };
    },
    mounted() {
      $("#contact").addClass("active");
    },
    methods: {
      postPackageQuery: function() {
        var payload = new FormData();
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
.contact__us--block {
  width: 100%;
  height: 34rem;
}
.black-bg-contact {
  width: 100%;
  height: 34rem;
  background-color: #00000054;
}
@media (max-width: 56.25em) {
  .contact__us--block {
    height: 22rem !important;
  }
  .black-bg-contact {
    height: 22rem !important;
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
.route2 {
  position: absolute;
  top: 50%;
  left: 7%;
}
.int-button {
  background-color: #f7a818 !important;
  font-size: 0.9rem !important;
  padding: 0.5rem 2rem !important;
}

.contact__us--block-image1 {
  background-image: url("~static/images/photo.png");
  background-size: cover;
  background-position: center;
}
.fa-icon {
  color: #f7a818;
}
.info {
  font-size: 0.9rem;
}
.ipt_size {
  font-size: 0.8rem;
}
.custom-contact-back {
  background: url("~static/images/pattern.png");
  background-size: cover;
  background-position: center;
}

.map-height {
  height: 400px;
}

@media (max-width: 56.25em) {
  .map-height {
    height: 260px;
  }
}

.fa-contact {
  color: #f7a818;
}

.p-font {
  color: black;
  font-size: 18px;
}

.input-contact {
  width: 100%;
  background: transparent;
  padding: 12px 14px;
  border: none;
  border: 1px solid #d7d7d7;
  border-radius: 5px;
}

@media (max-width: 37.5em) {
  .xs-class-1 {
    margin-top: 30px;
  }

  .xs-class-2 {
    margin-top: 20px;
  }
}

.contact-btn {
  display: block;
  margin-left: auto;
  background-color: #f7a818;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 30px;
}

.contact-btn:hover {
  background-color: #ffce10;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>