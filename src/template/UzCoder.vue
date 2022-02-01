<template>
  <div class="info">
    <center>UzCoders Group Solutions </center>
    <div class="menu">
      <img src="../assets/startups/3.jpg" alt="" />
      <div class="text">
        <div class="a">
          <span>Bu nima?</span><br />
          <span>Asoschisi kim?</span><br />
          <span>Maqsadi nima?</span><br />
        </div>
        <div class="b">
          <span>Loyiha</span><br />
          <span>Ahmedov Botir</span><br />
          <span>Dasturchilar uchun tuzilgan.</span><br />
        </div>
      </div>
      <div class="text1">
        <div class="a">
          <span>Qachon tuzilgan?</span><br />
          <span>Qachongacha davom etadi? </span><br />
        </div>
        <div class="b">
          <span>1-fevral, 2021-yil</span><br />
          <span>Toʻxtatilmaydi.</span><br />
        </div>
      </div>
    </div>
    <div class="savoljavob">
      <div class="savol">
        <span>Nima uchun bu loyihani tuzdingiz?</span><br>
        <span>O'zingiz dasturlashni bilasizmi?</span><br />
        <span>Qaysi tehnologiyani bilasiz?</span><br />
        <span>Hozirda Web dasturlash sohasida nimalar qilmoqdasiz?</span><br />
        <span>O'zingizni qilgan ishlaringiz bormi yoki porfolio? Nechta?</span><br>
        <span>Bu loyihaga qo'shilish uchun nimalar talab etiladi?</span>
      </div>
      <div class="minus">
        <span>-</span><br />
        <span>-</span><br />
        <span>-</span><br />
        <span>-</span><br />
        <span>-</span><br />
        <span>-</span><br />
      </div>
      <div class="javob">
        <span>Ba'zi yosh dasturchilar o'rganib ish izlashni boshlaydi va albatta ish topa olmaydi. Shu insonlar biz bilan birga ishlaydi.</span><br>
        <span
          >Dasturlash emas, dasturlashni Frontend web dasturlash sohasini bilaman</span
        ><br />
        <span
          >Html, Css, Bootstrap, Jquery, Sass, JavaScript, Python asoslari, GitHub, Vuejs</span
        ><br />
        <span>Hozirda Vuejs fremworkini mustahkamlash maqsadida bir necha ishlar ustida ishlamoqdaman</span><br />
        <span>Ha. Jami 40dan ortiq. Lekin dasturlashdan habari bor insonlar bo'lsa GitHub profilimda ko'rishingiz mumkin.</span
        ><br />
        <span>O'zini yo'nalishi bo'yicha bilimi bo'lsa bas! Albatta dasturlash sohasida.
</span>
 
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
  background-image: url("../assets/bg/bg4.jpg");
  background-size: cover;
  width: 98%;
  margin-left: 1%;
  height: 470px;
  background-attachment: fixed;
  background-position: bottom;
  border: 2px solid $red;
  border-radius: 20px;
  margin-bottom: 10px;

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
      top: 141.9rem;
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
    font-size: 17px;
    width: auto;
    padding-left: 10px;
  }
  .javob{
    font-size: 17px;
  }
  .minus{
    font-size: 17px;
  }
}
</style>
