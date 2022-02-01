<template>
  <footer>
    <center>Web designer and web-site creator - Akhmedov Botir</center>
    <sub
      ><center>
        -Copyright -&copy;- 2022 | Your Company UzCoders Group Solutions-
      </center></sub
    >
  </footer>
</template>
<script>
export default {
  methods: {},
};
</script>
<style lang="scss" scoped>
@import "../sass/_color";
footer {
  border-top: solid 2px $red;
  // margin-top: 170px;
  padding: 10px;
  > center {
      font-size: 22px;
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      padding-bottom: 4px;
  }
  >sub > center {
      font-size: 16px;
      margin-bottom: 10px;
      color: whitesmoke;
  }
}
</style>
