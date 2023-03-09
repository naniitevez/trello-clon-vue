<template>
  <footer>
    <span>Hecho con ❤️ &amp; <a href="https://es.vuejs.org/">Vue Js</a></span>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style lang="scss" scoped>
footer {
  box-sizing: border-box;
  background: #cfd8dc;
  bottom: 0;
  left: 0;
  padding: 1rem;
  position: absolute;
  width: 100%;

  a {
    text-decoration: none;
    color: #546e7a;
  }
}
</style>