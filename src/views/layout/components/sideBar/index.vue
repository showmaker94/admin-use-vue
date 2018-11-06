<template>
  <div class="app-wrapper">
    <el-scrollbar wrapClass="scrollbar-wrapper">
      <el-menu  class="el-menu-vertical-demo" style="width:100%;" :show-timeout="200" 
      :default-active="$route.path" :collapse="isCollapse" mode="vertical"
        background-color="#303947" text-color="white" active-text-color="#0593fa">
        <sidebar-item :routes="permission_routers"></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
  import sidebarItem from "./sideBarItem";
  import {
    mapGetters
  } from "vuex";
  export default {
    name: "sideBar",
    components: {
      sidebarItem
    },
    computed: {
      ...mapGetters(["permission_routers"]),
      isCollapse() {
        return false;
      }
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
  .app-wrapper {
    margin-top: 83px;
    width: 100%;
    background: #303947;
  }

</style>
<style lang="less">
  .el-scrollbar__wrap {
    overflow: hidden;
  }

  .el-scrollbar__thumb {
    background: transparent;
  }

</style>
