<template>
  <div class="HeaderActions">
    <div class="item">
      <router-link to="/Search">
        <font-awesome-icon
          size="lg"
          icon="search"
          :style="{ color: 'white' }"
        />
      </router-link>
    </div>
    <LocaleChanger />
  </div>
</template>

<script>
import LocaleChanger from "../localeChanger/LocaleChanger";

export default {
  components: { LocaleChanger },
};
</script>

<style lang="scss" scoped>
.HeaderActions {
  display: flex;

  .item {
    margin-right: 20px;
  }
}
</style>