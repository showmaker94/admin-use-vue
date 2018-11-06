<template>
  <div class="data-card">
    <el-row :span="24">
      <el-col :span="span" v-for="(item,index) in data" :key="index">
        <div class="item">
          <img :src="item.src" class="item-img" />
          <div class="item-text" :style="{color:colorText,backgroundColor:bgText}">
            <h3>{{item.name}}</h3>
            <p>{{item.text}}</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "data-card",
  data() {
    return {
      span: this.option.span || 6,
      data: this.option.data || [],
      colorText: this.option.colorText || "#fff",
      bgText: this.option.bgText || "#2e323f",
      borderColor: this.option.borderColor || "#2e323f"
    };
  },
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
h3{
    display: block;
    font-size: 1.17em;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
}
</style>

