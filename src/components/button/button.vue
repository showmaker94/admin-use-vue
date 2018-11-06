<template>
    <div class="commonBtn">
        {{title}}
    </div>
</template>
<script>
export default {
  name: "commonBtn",
  components:{},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  props: ["title"],
  methods: {}
};
</script>
<style lang="less" scoped>
@import '../../styles/common.less';
.commonBtn{
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 42px;
    border-radius: 4px;
    color: #fff;
    background: @color-btn;
    cursor: pointer;
}
</style>