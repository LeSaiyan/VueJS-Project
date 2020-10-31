<template>
  <div class="ContentDetailsMain">
    <Poster :poster_path="item.poster_path" />
  </div>
</template>

<script>
import Poster from "../Poster";

export default {
  props: {
    item: Object,
  },
  components: { Poster },
};
</script>

<style lang="scss" scoped>
.ContentDetailsMain {
}
</style>