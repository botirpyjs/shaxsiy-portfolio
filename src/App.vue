<template>

  <navbar />
  <fan />
  <router-view />
  <footer-menu />
</template>
<script>
import Fan from "./template/Fan.vue";
import FooterMenu from "./template/FooterMenu.vue";
import Navbar from "./template/Navbar.vue";
export default {
  components: {
    Fan,
    Navbar,
    FooterMenu,
  },
  methods: {

  },
};
</script>
,
<style lang="scss">
@import url("./assets/bootstrap.min.css");
@import "sass/_color.scss";
body {
  background-color: $black;
  color: white;
.scrollToTop-btn{
    z-index: 999;
    position: fixed;
    background: crimson;
    width: 50px;
    height: 50px;
    right: 5px;
    bottom: 8px;
    text-align: center;
    line-height: 45px;
    border-radius: 10px;
    cursor: pointer;
    opacity: 0;
    transition: all .3s ease;
}
.scrollToTop-btn.active{
    right: 20px;
    opacity: 1;
}
}
</style>
