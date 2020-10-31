<template>
  <div>
    <ContentDetailsMain :item="item" />
    <Poster :poster_path="item.poster_path" />
  </div>
</template>

<script>
import ApiMovies from "../mixins/ApiMovies";
import ContentDetailsMain from "../components/contentDetails/ContentDetailsMain";

export default {
  components: { ContentDetailsMain },
  data: () => ({
    item: {},
  }),
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