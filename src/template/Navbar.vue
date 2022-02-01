<template>
  <div id="nav">
    <router-link to="/">Bosh sahifa</router-link>
    <router-link to="/akhbotir">Akhmedov BotirKhan</router-link>
    <router-link to="/botirstudio">BoTiR sTuDiO</router-link>
    <router-link to="/uzcoders">UzCoders Group Solutions</router-link>
    <router-link to="/akhbotir">Hamjamiyat</router-link>
    <router-link to="/akhbotir">Izoh</router-link>
  </div>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
@import "../sass/_color.scss";

#nav {
  z-index: 9988;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  left: 0px;
  top: 0;
  right: 0px;
  background-color: $black1;
  border-bottom: 2px solid $red;

  a {
    font-family: monospace;
    font-weight: 900;
    text-decoration: none;
    color: $white;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 20px;
    border-left: 2px solid $red;
    border-right: 2px solid $red;
    transition: 0.6s ease-in-out all;

    &:hover {
      border-color: $black;
      background-color: $red;
    }
  }
}
</style>
