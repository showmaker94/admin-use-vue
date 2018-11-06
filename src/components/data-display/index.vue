<template>
  <div class="data-display">
    <el-row :span="24">
      <el-col v-for="(item,index) in data" :key="index" :span='span'>
        <div class="item" :style="{color:color}">
          <h5 class="count">
            <count-up :end="item.count"></count-up>
          </h5>
          <span class="splitLine"></span>
          <p class="title">
            {{item.title}}
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import countUp from "@/components/count-up";
export default {
  name: "data-display",
  components: {
    countUp
  },
  data() {
    return {
      span: this.option.span || 8,
      data: this.option.data,
      color: this.option.color || "rgb(63,161,255)"
    };
  },
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  },
  created() {},
  methods: {}
};
</script>


