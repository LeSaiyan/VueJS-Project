<template>
  <div v-if="$store.state.itemDetails" class="ContentDetailsMain">
    <Poster class="poster" :poster_path="item.poster_path" />
    <div class="infos">
      <BunttonFav :item="item" />
      <h2>{{ item.name || item.title }}</h2>
      <h4>{{ item.tagline }}</h4>
      <p>{{ item.overview }}</p>
      <div class="lists">
        <ul>
          <p>{{ $t("List.Genres") }} :</p>
          <div>
            <li v-for="genre in item.genres" :key="genre.id">
              <p>{{ genre.name }}</p>
            </li>
          </div>
        </ul>
        <ul v-if="item.production_companies">
          <p>{{ $t("ProductionCompanies") }} :</p>
          <div>
            <li
              v-for="companie in item.production_companies"
              :key="companie.id"
            >
              <p>{{ companie.name }}</p>
            </li>
          </div>
        </ul>
      </div>
      <ul v-if="item.created_by">
        <p>{{ $t("CreatedBy") }} :</p>
        <div>
          <li v-for="creator in item.created_by" :key="creator.id">
            <p>{{ creator.name }}</p>
          </li>
        </div>
      </ul>
      <p>
        {{ $t("Release") }} : {{ item.first_air_date || item.release_date }}
      </p>
      <p>{{ $t("Duration") }} : {{ item.runtime }} minutes</p>
      <p>{{ $t("VoteAverage") }} : {{ item.vote_average }}</p>
      <p>{{ $t("VoteCount") }} : {{ item.vote_count }}</p>
      <p v-if="item.seasons">
        {{ $t("Seasons") }} : {{ item.number_of_seasons }}
      </p>
    </div>
  </div>
</template>

<script>
import Poster from "../Poster";
import BunttonFav from "../buttonFav/ButtonFav.vue";

export default {
  props: {
    item: Object,
  },
  components: { Poster, BunttonFav },
};
</script>

<style lang="scss" scoped>
.ContentDetailsMain {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.poster {
  width: 30%;
}

.infos {
  width: 50%;
  padding: 1%;
}

.lists {
  display: flex;
}

ul {
  padding: 0;
  display: flex;
  width: 50%;
}

ul p {
  margin-right: 4%;
}

ul li {
  list-style: none;
}

ul li p {
  width: 100%;
}
</style>