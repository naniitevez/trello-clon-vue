<template>
  <app-header />
  <router-view class="container"/>
  <app-footer />
</template>

<script>
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  }
};
</script>

<style scoped>
#app {
  box-sizing: border-box;
  color: #37474f;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0 auto;
  padding: 0;
}

.container {
  padding-bottom: 4rem;
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
