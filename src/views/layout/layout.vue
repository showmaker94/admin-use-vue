<template>
    <div class="app-wrapper">
        <div class="topNav" :style="{width:fullWidth-marginL+'px'}">
          <navbar></navbar>
          <tagsview></tagsview>
        </div>
        <div class="leftNav">
          <div class="logoContainer">
            hl-admin
          </div>
            <sidebar class="sidebar-container"></sidebar>
        </div>
        <div class="main" :style="{margin:'83px 0 0 '+(marginL)+'px',height:fullHeight-83+'px'}">
          <appmain></appmain>
        </div>
    </div>
</template>

<script>
import { sidebar,navbar,appmain,tagsview } from "./components";
import { mapGetters } from "vuex";
export default {
  name: "",
  components: {
    sidebar,
    navbar,
    appmain,
    tagsview
  },
  computed: {
    ...mapGetters(["fullWidth", "marginL", "fullHeight"])
  },
  data() {
    return {};
  },
  created() {},
  mounted() {
    let self = this;
    window.onresize = function() {
      self.$store.commit("SET_FULLWIDTH");
      self.$store.commit("SET_MARGINL");
      self.$store.commit("SET_FULLHEIGHT");
    };
  },
  props: [],
  methods: {}
};
</script>
<style lang="less" scoped>
.app-wrapper {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  overflow-x: hidden;
  .leftNav {
    height: 100%;
    width: 13.5%;
    min-width: 240px;
    max-width: 300px;
    background: #303947;
    position: fixed;
    left: 0px;
    top: 0px;
    font-size: 16px;
    color: #f7f7f7;
    overflow: hidden;
    .logoContainer {
      font-size: 30px;
      text-align: center;
      line-height: 83px;
      background-color: rgba(0, 0, 0, 0.1);
      height: 83px;
      //background-image: url("../../assets/logo1.png");
      background-position: center center;
      background-size: 100%;
    }
  }
  .topNav {
    height: 84px;
    background: #fff;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: 999;
  }
  .main {
   
  }
}
</style>