<template>
  <p :class="className" style="text-align: left; color: black">{{ text }}</p>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        text: this.data.data.text,
        className: "h" + this.data.data.level
      };
    }
  };
</script>

<style scoped>
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-weight: 400;
  color: black;
  /* margin-top: 20px; */
}

.h1 {
  padding-bottom: 1rem;
}

.h2 {
  padding-bottom: 0.8rem;
}

.h3 {
  padding-bottom: 0.6rem;
}
</style>
