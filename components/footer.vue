<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 footer_col">
            <div class="footer_column footer_contact">
              <div class="logo_container">
                <div class="logo">
                  <nuxt-link to="/"
                    ><img src="~static/images/footer_logo.png" class="logoImg"
                  /></nuxt-link>
                  <span class="logoText">Alliance Services</span>
                </div>
              </div>
              <div class="footer_title">
                <p style="font-size: 0.9rem; line-height:20px">
                  Get the best booking reviews and advice on worldwide hotels,
                  resorts, flights, vacation rentals, travel packages, and lots
                  more!
                </p>
                <p class="logoText">
                  In collaboration with
                </p>
                <img
                  src="~static/images/logo-AA.png"
                  class="logoImg mr-3"
                  alt
                />
                <img src="~static/images/logo-TOAA.png" class="logoImg" alt />
              </div>
            </div>
          </div>

          <div class="col-lg-2 margin-xs">
            <div class="footer_column">
              <div class="footer_title" style="color: #f1be03">
                Navigate
              </div>
              <ul class="footer_list">
                <li>
                  <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about">About Us</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/themes">Categories</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/blog">Blog</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/contact">Contact Us</nuxt-link>
                </li>

                <!-- <li>
                  <nuxt-link to="">Disclaimer</nuxt-link>
                </li> -->
              </ul>
            </div>
          </div>

          <div class="col-lg-2 margin-xs">
            <div class="footer_column">
              <div class="footer_title" style="color: #f1be03">
                Legal Policy
              </div>
              <ul class="footer_list">
                <li style="font-size: 0.9rem;">
                  <p class="mb-2">
                    FAQ
                  </p>
                  <p class="mb-2">
                    Privacy Policy
                  </p>
                  <p>
                    Terms of Use
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-2 margin-xs">
            <div class="footer_column">
              <div class="footer_title" style="color: #f1be03">
                Have Questions?
              </div>
              <ul class="footer_list">
                <li style="font-size: 0.9rem;">
                  <p class="text-small mb-2" style="margin-bottom: 0.2rem">
                    info@flyingvenus.net
                  </p>
                  <p class="text-small mb-2" style="margin-bottom: 0.2rem">
                    House No. 74, GMCH Road, Near IGNOU Office, Christian Basti,
                    Guwahati, Assam 781005
                  </p>
                  <!-- <p class="text-small" style="margin-bottom: 0.2rem">
                    Near IGNOU Office, Christian Basti
                  </p>
                  <p class="text-small" style="margin-bottom: 0.2rem">
                    Guwahati, Assam 781005
                  </p>
                  <p class="text-small" style="margin-bottom: 0.2rem">
                    Phone Number: +91-98541 02087
                  </p> -->
                  <p class="text-small" style="margin-bottom: 0.2rem">
                    24/7 Dedicated Customer Support
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {};
</script>

<style>
/* p{
    color:#ffffff;
}
h1{
    color:#ffffff;
} */
.bg-black {
  background-color: #1f1f1f;
}
p .text {
  color: #f1be03 !important;
}
/* h1 .text{
    color: #f1be03;
} */
text-small {
  font-size: 0.9rem;
  color: #ffffff;
}
p {
  color: #ffffff;
  opacity: 0.8;
  letter-spacing: 0.56px;
  text-align: left;
  line-height: 1.43;
}
.text-white {
  color: #ffffff;
}

/*********************************
17. Footer
*********************************/

.footer {
  padding-top: 52px;
  padding-bottom: 40px;
  background-color: #18232d;
}
.footer .logo_container {
  height: auto;
  margin-bottom: 18px;
  margin-top: -10px;
}
.footer .logo {
  top: auto;
}
.footer .logo a {
  color: #ffffff;
}
.footer_title {
  font-size: 1.2rem;
  font-weight: 500;
  color: #ffffff;
}
.footer_phone {
  font-size: 18px;
  font-weight: 500;
  color: #ffc107;
  margin-top: 13px;
}
.footer_contact_text {
  margin-top: 10px;
}
.footer_contact_text p {
  margin-bottom: 0px;
}

.footer_subtitle {
  font-size: 12px;
  color: #ffffff;
}
.footer_column ul:first-of-type {
  margin-top: 11px;
}
.footer_column ul {
  margin-top: 7px;
  margin-bottom: 0px !important;
}

.footer_list li {
  margin-bottom: 6px;
  list-style: none !important;
}

.footer_list li a {
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;
  opacity: 0.8;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}

.footer_list li a:hover {
  color: #ffc107;
  text-decoration: none;
}

.footer_list_2 {
  margin-top: 42px !important;
}

.logos_list li {
  display: inline-block;
  margin-right: 16px;
}
.logos_list li:last-child {
  margin-right: 0px;
}

.logoImg {
  width: 80px;
}

.logoText {
  color: #f1be03;
  font-size: 1.5rem;
}

@media (min-width: 37.5em) and (max-width: 75em) {
  .logoText {
    font-size: 0.9rem;
  }
}

@media (max-width: 37.5em) {
  .logoImg {
    width: 70px;
  }
  .logoText {
    font-size: 0.8rem;
  }
}

ul {
  padding: 0px !important;
}

@media (max-width: 56.25em) {
  .margin-xs {
    margin-top: 20px;
  }
}
</style>