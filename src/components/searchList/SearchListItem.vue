<template>
  <router-link :to="`/ContentDetails/${item.media_type}/${item.id}`">
    <div class="container">
      <Scorer :vote_average="item.vote_average"></Scorer>
      <Poster :poster_path="item.poster_path" />
      <h3 class="content-title">{{ item.name || item.title }}</h3>
    </div>
  </router-link>
</template>

<script>
import Poster from "../Poster";
import Scorer from "./Scorer";

export default {
  props: {
    item: Object,
  },
  components: { Poster, Scorer },
};
</script>

<style lang="scss">
.container {
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  margin: auto;

  .content-title {
    color: #e5e5e5;
  }
}
</style>