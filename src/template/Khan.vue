<template>
  <div class="info">
    <center>Akhmedov BotirKhan haqida maʻlumot</center>
    <div class="menu">
      <img src="../assets/startups/1.jpg" alt="" />
      <div class="text">
        <div class="a">
          <span>Bu nima?</span><br />
          <span>Asoschisi kim?</span><br />
          <span>Maqsadi nima?</span><br />
        </div>
        <div class="b">
          <span>Loyiha</span><br />
          <span>Ahmedov Botir</span><br />
          <span>Sheʻrlar yozilib baʻzida kuylanadi</span><br />
        </div>
      </div>
      <div class="text1">
        <div class="a">
          <span>Qachon tuzilgan?</span><br />
          <span>Qachongacha davom etdi? </span><br />
        </div>
        <div class="b">
          <span>14-sentabr, 2020-yil</span><br />
          <span>16-dekabr, 2021-yil</span><br />
        </div>
      </div>
    </div>
    <div class="savoljavob">
      <div class="savol">
        <span>Bu qanday loyiha?</span><br />
        <span>Oldin ham she'r yozganmisiz? Nechta?</span><br />
        <span>Nega bu loyiha oz muddat egalladi?</span><br />
        <span>Keyinchalik bu loyihaga qaytish niyat bormi?</span>
      </div>
      <div class="minus">
        <span>-</span><br />
        <span>-</span><br />
        <span>-</span><br />
        <span>-</span><br />
      </div>
      <div class="javob">
        <span
          >Asosan Botir Ahmedov ni shaxsiy yozgan she'rlarini albom o'rnida qilingan.</span
        ><br />
        <span
          >Ha 2014-yildan orada to'xtalishlar bo'lib ijod qildim, Jami <b>19</b> ta yozganman.</span
        ><br />
        <span>Ma'lum bir sabablarga ko'ra bu loyiha to'xtatildi.</span><br />
        <span
          >Yo'q, endi qaytilmaydi.</span
        ><br />
 
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
  margin-top: 10px;
  background-image: url("../assets/bg/bg22.jpg");
  width: 98%;
  margin-left: 1%;
  height: 470px;
  background-attachment: fixed;
  background-position: bottom;
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
      top: 80.3rem;
      left: 1.5rem;
      border-radius: 100px;
    }
    .text {
      font-weight: 800;
      font-size: 23px;
      margin-left: 13.5rem;
      height: 115px;
      border: solid 1px $red;
      width: 520px;
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
        width: 350px;
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
