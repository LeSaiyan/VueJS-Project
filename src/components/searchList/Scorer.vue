<template>
  <div class="scorer">{{ vote_average }}</div>
</template>

<script>
export default {
  props: {
    vote_average: Number,
  },
};
</script>

<style lang="scss" scoped>
.scorer {
  color: #fff;
  position: absolute;
  right: 54px;
  background-color: green;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>