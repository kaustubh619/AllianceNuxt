<template>
  <figure class="figure">
    <img
      :src="url"
      style="width: 100%; padding: 10px; object-fit: cover; object-position: center"
      alt="A generic square placeholder image with rounded corners in a figure."
    />
    <figcaption
      class="figure-caption"
      style="text-align: center; font-size: 20px"
    >
      {{ caption }}
    </figcaption>
  </figure>
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
        caption: this.data.data.caption,
        url: this.data.data.file.url
      };
    }
  };
</script>

<style>
</style>
