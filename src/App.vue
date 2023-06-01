<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  name: "App",
  components: {
    TheHeader,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: cursive;
}
:root {
  --black: #2a2a2a;
  --blue: #373e98;
  --pink: #f16775;
  --yellow: #fee36e;
  --mustard: #ceb92c;
}
</style>
