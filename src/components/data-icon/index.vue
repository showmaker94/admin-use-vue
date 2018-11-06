<template>
  <div class="data-icons">
    <el-row :span="24">
        <el-col v-for="(item,index) in data" :span="span" :key="index">
          <div class="item" :class="[{'item--easy':discount}]">
            <div class="item-icon" :style="{color:color}">
              <i :class="item.icon"></i>
            </div>
            <div class="item-info">
              <span>{{item.title}}</span>
              <h3 :style="{color:color}"><count-up :start="14" :end="item.count"/></h3>
            </div>
          </div>
        </el-col>
    </el-row>
  </div>
</template>
<script>
import countUp from "@/components/count-up";
export default {
    name:"data-icon",
    components:{countUp},
    data() {
    return {
      span: this.option.span || 6,
      data: this.option.data,
      color: this.option.color || 'rgb(63, 161, 255)',
      discount: this.option.discount || false
    }
  },
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  }

}
</script>
