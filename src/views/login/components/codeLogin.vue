<template>
    <div class="codeLoginPage">
        <hl-input v-model="phone" :type="'text'" :icon="'phone'" :key="1"></hl-input>
        <hl-input style="margin-top:30px" v-model="pass" :type="'text'" :icon="'lock'" :key="2"></hl-input>
        <hl-codeinput style="margin-top:30px" :type="'text'" :icon="'code'"  :key="3" :phoneNum="phone"></hl-codeinput>
        <hl-button style="margin-top:40px" :title="'登录'" @click.native="login"></hl-button>
    </div>
</template>
<script>
import hlInput from "../../../components/input/input.vue";
import hlCodeinput from "../../../components/input/codeInput.vue";
import hlButton from "../../../components/button/button.vue";
import {validateLowerCase}from "../../../utils/validate";
export default {
  name: "codeLogin",
  components: {
    hlInput,
    hlCodeinput,
    hlButton
  },
  data() {
    return {
        phone:"",
        pass:""
    };
  },
  created() {},
  mounted() {},
  props: [],
  methods: {
    login(){
      this.$router.push('/dashboard/dashboard')
    }
  }
};
</script>
<style lang="less" scoped>
.codeLoginPage{
}
</style>