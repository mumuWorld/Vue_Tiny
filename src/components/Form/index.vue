<template>
  <div>
    <KForm :model="model" :rules="rules">
      <KFormItem label="用户名">
        <KInput v-model="model.username"></KInput>
      </KFormItem>
      <KFormItem label="密码">
        <KInput v-model="model.password" type="password"></KInput>
      </KFormItem>
    </KForm>
    {{ model }}
  </div>
</template>

<script>
import KInput from "./KInput.vue";
import KFormItem from "./KFormItem";
import KForm from "./KForm.vue";

export default {
  components: {
    KInput,
    KFormItem,
    KForm,
  },
  data() {
    return {
      model: {
        username: "tangtang",
        password: "",
      },
      rules: {
        username: [{ required: true, message: "用户名必填" }],
        password: [{ required: true, message: "密码必填" }],
      },
    };
  },
};
</script>
<style>
</style>