<template>
  <div>
    <ContentDetailsMain :item="$store.state.itemDetails" />
  </div>
</template>

<script>
import ApiMovies from "../mixins/ApiMovies";
import ContentDetailsMain from "../components/contentDetails/ContentDetailsMain";

export default {
  components: { ContentDetailsMain },
  async created() {
    this.item = await this.getItemById(
      this.$route.params.id,
      this.$route.params.media_type
    );
  },
  mixins: [ApiMovies],
};
</script>

<style lang="scss" scoped>
</style>