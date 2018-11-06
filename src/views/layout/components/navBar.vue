<template>
  <div class="navbar-wrapper">
    <el-menu class="navbar" mode="horizontal">
      <breadcrumb class="breadcrumb-container"></breadcrumb>
      <div class="right-menu">
        <top-lock class="help"></top-lock>
        <el-tooltip effect="dark" content="全屏" placement="bottom">
          <screenfull class="screenfull right-menu-item"></screenfull>
        </el-tooltip>
        <el-dropdown class="avatar-container right-menu-item" trigger="click">
        <div class="avatar-wrapper">
          <img class="user-avatar" src="https://mgbq.github.io/nx-admin-site/home.png">
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>
              home
            </el-dropdown-item>
          </router-link>
          <a target='_blank' href="https://github.com/mgbq/nx-admin/">
            <el-dropdown-item>
              github地址
            </el-dropdown-item>
          </a>
          <el-dropdown-item divided>
            <span @click="logout" style="display:block;">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      </div>
    </el-menu>
  </div>
</template>
<script>
  import breadcrumb from "@/components/breadcrumb";
  import topLock from "@/components/top-lock";
  import screenfull from "@/components/screenfull";
  export default {
    name: "navbar",
    components: {
      breadcrumb,
      topLock,
      screenfull
    },
    data() {
      return {};
    },
    created() {},
    mounted() {},
    props: [],
    methods: {
      logout(){

      }
    }
  };

</script>
<style lang="less" scoped>
  .navbar-wrapper {
    margin-left: 17px;
    .navbar {
      height: 50px;
      line-height: 50px;
      border-radius: 0px !important;

      // .hamburger-container {
      //   line-height: 58px;
      //   height: 50px;
      //   float: left;
      //   padding: 0 10px;
      // }
      .breadcrumb-container {
        float: left;
        line-height: 50px;
      }

      .help {
        display: inline-block;
        vertical-align: top;
      }

      .errLog-container {
        display: inline-block;
        vertical-align: top;
      }

      .right-menu {
        float: right;
        height: 100%;

        &:focus {
          outline: none;
        }

        .right-menu-item {
          display: inline-block;
          margin: 0px 12px;
        }

        .screenfull {
          height: 20px;
        }

        .international {
          vertical-align: top;
        }

        .theme-switch {
          vertical-align: 15px;
        }

        .avatar-container {
          height: 50px;
          margin-right: 30px;

          .avatar-wrapper {
            cursor: pointer;
            margin-top: 5px;
            position: relative;

            .user-avatar {
              width: 40px;
              height: 40px;
              border-radius: 10px;
            }

            .el-icon-caret-bottom {
              position: absolute;
              right: -20px;
              top: 25px;
              font-size: 12px;
            }
          }
        }
      }
    }
  }

</style>
