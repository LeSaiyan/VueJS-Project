<template>
  <div class="LocaleChanger">
    <select v-model="$i18n.locale" @change="handleChange($event)">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data: () => ({
    langs: ["en", "fr"],
  }),
  methods: {
    handleChange(event) {
      localStorage.setItem("i18nLocale", event.target.value);
      location.reload();
    },
  },
};
</script>