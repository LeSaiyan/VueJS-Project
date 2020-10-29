<template>
  <div class="ScrollList">
    <h2 class="ScrollList__title">{{ title }}</h2>
    <swiper
      @click-slide="handleClickSlide"
      ref="Swiper"
      :options="sliderOptions"
    >
      <swiper-slide v-for="item in list" :key="item.index">
        <ScrollListItem :item="item"></ScrollListItem>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import ScrollListItem from "./ScrollListItem";
import "swiper/css/swiper.css";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
    ScrollListItem,
  },
  directives: {
    swiper: directive,
  },
  props: {
    list: Array,
    title: String,
  },
  data: () => ({
    sliderOptions: {
      slidesPerView: 6,
      slidesPerGroup: 6,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
  }),
  methods: {
    handleClickSlide: function (index, reallyIndex) {
      console.log("Click slide!", index, reallyIndex);
    },
  },
  computed: {
    swiper() {
      return this.$refs.Swiper.$swiper;
    },
  },
};
</script>

<style lang="scss" scoped>
.ScrollList {
  padding: 1.5% 3%;
  &__title {
    color: #ffffff;
    margin: 0 4% 0.5em 4%;
  }
}

.swiper-button-next {
  color: #fff;
}

.swiper-button-prev {
  color: #fff;
}
</style>