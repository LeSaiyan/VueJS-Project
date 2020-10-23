<template>
  <div class="HeaderActions">
    <div class="item">
      <font-awesome-icon size="lg" icon="search" :style="{ color: 'white' }" />
    </div>
    <div class="item">
      <font-awesome-icon size="lg" icon="gift" :style="{ color: 'white' }" />
    </div>
    <div class="item">
      <font-awesome-icon size="lg" icon="bell" :style="{ color: 'white' }" />
    </div>
    <div class="item">
      <font-awesome-icon icon="sort-down" :style="{ color: 'white' }" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.HeaderActions {
  display: flex;

  .item {
    margin-right: 20px;
  }
}
</style>