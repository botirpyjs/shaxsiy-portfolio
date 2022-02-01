<template>
  <div>
    <div class="intro">
      <div class="text">
        <h2>Assalomu alaykum hurmatli sayt tashrif buyuruvchi!</h2>
        <h3>
          Siz hozirda Akhmedov BotirKhan tomonidan ishlab chiqilgan shaxsiy
          veb-saytdasiz!
        </h3>
        <h4>
          Ushbu veb-saytda Botirjon Ahmedov tomonidan tashkil etilgan brendlar
          haqida ma'lumotlarga ega bo'lasiz! Ular hali keng tarqalmagan bo'lsada
          keyinchalik shu nom ostida ishlar bo'lganda balki eslab qo'yarsiz ;)
        </h4>
      </div>
      <home-img />
    </div>
    <br /><br /><br /><br /><br /><br /><br />
    <botir />
    <div class="w"></div>
    <khan />
    <div class="w"></div>
    <botir-studio />
    <div class="w"></div>
    <uz-coder />
  </div>
</template>
<script>
import Botir from "../template/Botir.vue";
import HomeImg from "../template/HomeImg.vue";
import Khan from '../template/Khan.vue';
import BotirStudio from '../template/BotirStudio.vue';
import UzCoder from '../template/UzCoder.vue';
export default {
  components: {
    HomeImg,
    Botir,
    Khan,
    BotirStudio,
    UzCoder,
  },
};
</script>
<style lang="scss" scoped>
@import "../sass/_color.scss";
.intro {
  background-image: url("../assets/bg/1.jpg");
  background-size: cover;
  background-attachment: fixed;
  width: 94%;
  margin-top: 1%;
  border: 2px solid $red;
  border-radius: 30px;
  margin-left: 3%;
  height: 420px;

  .text {
    border-radius: 40px;
    border: 2px solid $red;
    background-color: $black2;
    text-align: center;
    width: 80%;
    padding: 1.5%;
    margin-top: 2%;
    margin-left: 10%;

    > h2 {
      font-family: fantasy;
      font-weight: 800;
    }
    > h3 {
      font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
      font-size: 25px;
      padding: 10px 10px;
      border-bottom: 1px solid $black2;
      border-top: 1px solid $black2;
    }
  }
}
.w{
  border-top: 2px solid $red;
  margin-top: 10px;
}
</style>
