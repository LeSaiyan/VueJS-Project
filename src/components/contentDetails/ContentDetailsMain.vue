<template>
  <div class="ContentDetailsMain">
    <Poster :poster_path="item.poster_path" />
    <p>{{ item.original_title }}</p>
    <p>{{ item.tagline }}</p>
    <ul>
      <p>genres :</p>
      <li v-for="genre in item.genres" :key="genre.id">
        <p>{{ genre.name }}</p>
      </li>
    </ul>
    <h3>{{ item.title }}</h3>
    <p>{{ item.overview }}</p>
    <p>Release : {{ item.release_date }}</p>
    <p>Duration : {{ item.runtime }} minutes</p>
    <p>Vote average : {{ item.vote_average }}</p>
    <p>Vote count : {{ item.vote_count }}</p>
  </div>
</template>

<script>
import Poster from "../Poster";

export default {
  props: {
    item: Object,
  },
  components: { Poster },
  created() {
    console.log(this.item);
  },
};
</script>

<style lang="scss" scoped>
.ContentDetailsMain {
}
</style>