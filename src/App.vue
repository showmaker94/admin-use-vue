<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    let self = this
    window.onload = function() {
      if (!window.sessionStorage["tempFlag"]) {
        self.$router.push("/login");
      } else {
        window.sessionStorage.removeItem("tempFlag");
      }
    };
    window.onunload = function() {
      window.sessionStorage["tempFlag"] = true;
    };
    window.onbeforeunload = function() {
      window.sessionStorage["tempFlag"] = true;
    };
  }
};
</script>

<style lang="less">
html,
body,
#app {
  // background-color: #edf0f5;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Microsoft YaHei";
  line-height: 2;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
</style>
