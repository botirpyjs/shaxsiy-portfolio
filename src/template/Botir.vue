<template>
  <div class="info">
    <center>Ahmedov Botir oʻzi kim?</center>
    <div class="menu">
      <img src="../assets/img/1.jpg" alt="" />
      <div class="text">
        <div class="a">
          <span>Ismi:</span><br />
          <span>Familiyasi:</span><br />
          <span>Yoshi:</span><br />
        </div>
        <div class="b">
          <span>Botir</span><br />
          <span>Ahmedov</span><br />
          <span>18</span><br />
        </div>
      </div>
      <div class="text1">
        <div class="a">
          <span>Qayerda tugʻilgan:</span><br />
          <span>Maʻlumoti:</span><br />
          <span>Millati:</span>
        </div>
        <div class="b">
          <span>Andijon viloyati, Buloqboshi tumani</span><br />
          <span>Tugallanmagan oʻrta maxsus</span><br />
          <span>Oʻzbek</span>
        </div>
      </div>
    </div>
    <div class="savoljavob">
      <div class="savol">
        <span>Qayerda o'qiydi?</span><br />
        <span>Dasturlash boʻyicha nimalarni biladi?</span><br />
        <span>Qiziqqan sohalari qaysi?</span><br />
        <span>Hozirda nima qilmoqda?</span><br />
        <span>Keyingi qilmoqchi bo'lgan maqsadi?</span>
      </div>
      <div class="minus">
        <span>-</span><br />
        <span>-</span><br />
        <span>-</span><br />
        <span>-</span><br />
        <span>-</span>
      </div>
      <div class="javob">
        <span
          >Andijon shahar 2-sonli kasb-hunar maktabi "Apparatura va dasturiy
          ta'minot ustasi" 2-bosqich bitiruvchi o'quvchisi.</span
        ><br />
        <span
          >Frontend web developer(Html, CSS, Javascript, Bootstrap, Jquery,
          Sass, GitHub, Vuejs), Python asoslari</span
        ><br />
        <span>Web dasturlash sohasi, Beatmaker, Sun'iy intelekt.</span><br />
        <span
          >Hozirda Vuejs fremworkini mustahkamlash maqsadida bir necha ishlar
          ustida ishlamoqda</span
        ><br />
        <span
          >Keyinchalik Backend Web dasturlashni o'rganib, Full stask Web
          developer bo'lish.</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "../sass/_color.scss";
.info {
  background-image: url("../assets/bg/bg11.jpg");
  width: 98%;
  margin-left: 1%;
  height: 470px;
  background-attachment: fixed;
  background-position-y: 2400px;
  border: 2px solid $red;
  border-radius: 20px;

  > center {
    color: wheat;
    font-size: 50px;
    text-align: center;
  }
  .menu {
    padding-bottom: 20px;
    border-bottom: 1px solid $red;
    display: flex;
    justify-content: space-around;
    > img {
      width: 200px;
      border: 3px dashed $red;
      position: absolute;
      top: 49.6rem;
      left: 1.5rem;
      border-radius: 100px;
    }
    .text {
      font-weight: 800;
      font-size: 25px;
      margin-left: 15rem;
      height: 115px;
      border: solid 1px $red;
      width: 300px;
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 5px;
    }
    .text1 {
      font-weight: 800;
      font-size: 25px;
      height: 115px;
      border: solid 1px $red;
      width: auto;
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 5px;

      > .a {
        width: 250px;
        padding-left: 10px;
      }
      > .b {
        padding-right: 10px;
      }
    }
  }
  .savoljavob {
    font-weight: 400;
    padding-top: 20px;
    padding-bottom: 20px;
    background: $black2;
    font-size: 20px;
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
  }
  .savol {
    font-weight: 600;
  }
}
</style>
