<template>
<div class="img">
    <img src="../assets/startups/1.jpg">
    <img src="../assets/startups/2.jpg">
    <img src="../assets/startups/3.jpg">
</div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
@import "../sass/_color.scss";
.img{
    position:sticky;
    top: 5px;
    left: 20px;
    display: flex;
    justify-content: space-evenly;
    > img {
        border: 1px solid $red;
        width: 270px;
        border-radius: 30px;
        margin-top: 20px;
    }
}
</style>
