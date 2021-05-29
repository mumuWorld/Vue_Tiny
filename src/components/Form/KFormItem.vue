<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>

export default {
    // setup(props,ctx) {
    // },
  data() {
    return {
      errorMessage: "",
    };
  },
  props: {
    label: {
      type: String,
      default: "",
    },
  },
  mounted() {
    this.$bus.$on('validate', () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      console.log("监听到校验");
    },
  },
};
</script>

<style>
</style>