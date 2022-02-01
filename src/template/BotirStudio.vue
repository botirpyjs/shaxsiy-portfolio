<template>
  <div class="info">
    <center>BoTiR sTuDiO - cover, HipHop, Trap ...</center>
    <div class="menu">
      <img src="../assets/startups/2.jpg" alt="" />
      <div class="text">
        <div class="a">
          <span>Bu nima?</span><br />
          <span>Asoschisi kim?</span><br />
          <span>Maqsadi nima?</span><br />
        </div>
        <div class="b">
          <span>Loyiha</span><br />
          <span>Ahmedov Botir</span><br />
          <span>Qoʻshiq yasash va qayta ishlash</span><br />
        </div>
      </div>
      <div class="text1">
        <div class="a">
          <span>Qachon tuzilgan?</span><br />
          <span>Qachongacha davom etadi? </span><br />
        </div>
        <div class="b">
          <span>14-sentabr, 2021-yil</span><br />
          <span>Xali toʻxtatilmadi.</span><br />
        </div>
      </div>
    </div>
    <div class="savoljavob">
      <div class="savol">
        <span>Bu qanday loyiha?</span><br />
        <span>Coverlar ham bormi?</span><br />
        <span>O'zingiz qo'shiq yozganmisiz? Nechta?</span><br />
        <span>Bu qo'shiqlarni qayerdadir eshitamizmi?</span>
      </div>
      <div class="minus">
        <span>-</span><br />
        <span>-</span><br />
        <span>-</span><br />
        <span>-</span><br />
      </div>
      <div class="javob">
        <span
          >Botir Ahmedovni musiqiy treklari, coverlari, terilgan qo'shiqlari mavjud loyiha.</span
        ><br />
        <span
          >Ha bor edi, ma'lum bir sabablarga ko'ra cover aytish to'xtatildi va qaytilmaydi.</span
        ><br />
        <span>Ha. Jami 10 ta yozganman. Lekin ko'proq Minus teraman. Qiziqqanim uchun.</span><br />
        <span
          >Telegram kanal yoki shu saytni o'zida.</span
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
  background-image: url("../assets/bg/bg3.jpg");
  background-size: cover;
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
      top: 111.2rem;
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
