<template>
  <div class="SearchList">
    <SearchListItem
      v-for="item in list"
      :key="item.index"
      :item="item"
    ></SearchListItem>
  </div>
</template>

<script>
import SearchListItem from "./SearchListItem";

export default {
  props: {
    list: Array,
  },
  components: { SearchListItem },
};
</script>

<style lang="scss" scoped>
.SearchList {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
</style>