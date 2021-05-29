<template>
  <HelloWorld msg="爸爸爱你" ref="hw"
  @foo="onFoo"/>
  <FormIndex> </FormIndex>
    <test> </test>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import test from './components/test.vue';
import FormIndex from './components/Form/index.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    test,  //局部注册
    FormIndex,
  },
  created() {
    console.log(this.$refs.hw);
  },
  mounted() {
    this.$refs.hw.foo = 'testData'
    console.log(this.$children);
    // this.$children[0].foo = 'foo_2'
  },
  methods: {
    onFoo() {
      console.log('onFoo');
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
