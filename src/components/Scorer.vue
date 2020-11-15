<template>
  <div :class="`scorer ${color}`">{{ vote_average }}</div>
</template>

<script>
export default {
  props: {
    vote_average: Number,
  },
  computed: {
    color() {
      return this.vote_average >= 7 ? "green" : "yellow";
    },
  },
};
</script>

<style lang="scss" scoped>
.scorer {
  color: #fff;
  position: absolute;
  right: 30px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.green {
  background-color: green;
}

.yellow {
  background-color: yellow;
  color: #000;
}
</style>