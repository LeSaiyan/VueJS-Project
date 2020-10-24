<template>
  <div class="SearchList">
    <ScrollListItem
      v-for="item in list"
      :key="item.index"
      :item="item"
    ></ScrollListItem>
  </div>
</template>

<script>
import ScrollListItem from "../scrollList/ScrollListItem";

export default {
  props: {
    list: Array,
  },
  components: { ScrollListItem },
};
</script>

<style lang="scss" scoped>
.SearchList {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
</style>