<template>
  <div>
    <router-link :to="`/ContentDetails/${item.media_type}/${item.id}`">
      <div class="container">
        <Scorer :vote_average="item.vote_average" />
        <Poster :poster_path="item.poster_path" />
        <h3 class="content-title">{{ item.name || item.title }}</h3>
      </div>
    </router-link>
    <BunttonFav :item="item" />
  </div>
</template>

<script>
import Poster from "../Poster.vue";
import Scorer from "./Scorer.vue";
import BunttonFav from "../buttonFav/ButtonFav.vue";

export default {
  props: {
    item: Object,
  },
  components: {
    Poster,
    Scorer,
    BunttonFav,
  },
};
</script>

<style lang="scss">
.container {
  width: 150px;

  img {
    width: 150px;
  }
  margin: auto;
  .no-img {
    height: 330px;
  }
  .content-title {
    color: #e5e5e5;
  }
}
</style>