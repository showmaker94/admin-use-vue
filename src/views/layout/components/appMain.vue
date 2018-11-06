<template>
    <div class="app-main">
       <transition name="fade" mode="out-in">
         <keep-alive :include="cachedViews">
           <router-view :key="key"/>
         </keep-alive>
       </transition>
    </div>
</template>
<script>
export default {
  name: "appMain",
  components: {},
  data() {
    return {};
  },
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews;
    },
    key() {
      return this.$route.fullPath;
    }
  },
  created() {},
  mounted() {},
  props: [],
  methods: {}
};
</script>
<style lang="less" scoped>
.app-main {
  padding: 20px;
  box-sizing: border-box;
  overflow-y: scroll;
}
</style>