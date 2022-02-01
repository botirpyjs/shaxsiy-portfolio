<template>
  <div class="fan">
    <akhmedov-botirkhan />
    <botir-studio />
    <uzcoders />
  </div>
</template>
<script>
import AkhmedovBotirkhan from "@/components/AkhmedovBotirkhan.vue";
import BotirStudio from "@/components/BotirStudio.vue";
import Uzcoders from "@/components/Uzcoders.vue";
export default {
  components: {
    AkhmedovBotirkhan,
    BotirStudio,
    Uzcoders,
  },
};
</script>
<style lang="scss" scoped>
@import "../sass/_color.scss";
.fan{
    margin-top: 64px;
    border-top: 2px solid $red;
    border-bottom: 2px solid $red;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-content: center;
}
</style>
