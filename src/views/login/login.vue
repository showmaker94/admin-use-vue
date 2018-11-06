<template>
  <div class="loginContainer">
    <div class="codeLogin">
      <p class="title">xxx系统</p>
       <code-login></code-login>
    </div>
  </div>
</template>
<script>
import codeLogin from "./components/codeLogin";
export default {
  name: "login",
  components: {
    codeLogin
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  props: [],
  methods: {}
};
</script>
<style lang="less" scoped>
.loginContainer {
  height: 100%;
  width: 100%;
  background-image: url("../../assets/images/top_images/login.png");
  background-size: cover;
  .codeLogin {
    box-sizing: border-box;
    background: #fff;
    width: 370px;
    height: 380px;
    padding: 20px 30px;
    position: absolute;
    right: 50px;
    top: 30%;
    border-radius: 6px;
    .title{
      font-size: 20px;
      font-weight: bold;
      color: rgba(0,0,0,0.5);
      text-align: center;
      padding:20px 0;
      color: #21BAA9;
    }
  }
}
</style>
