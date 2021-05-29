<template>
  <!-- 自定义组件要实现 v-model不许实现: value @input -->
  <!-- attr 存储的是 prop 以外的东西 -->
  <div>
    <input :value="value" @input="onInput" v-bind="$attrs" />
  </div>
</template>
<script>
export default {
  inheritAttrs: false, //不要让顶层容器继承属性
  props: {
    value: {
      type: String,
      default: "placeholder",
    },
  },
  methods: {
    onInput(e) {
      //通知父组件数值变化
      this.$bus.$emit("input", e.target.value);
      //通知FormItem校验
      this.$parent.$bus.$emit("validate");
    },
  },
};
</script>
<style>
</style>