<template>
  <div class="completion-input-box">
    <span class="input-box-name" v-if="label">{{label}}</span>
    <input 
    :type="type" 
    ref="input"
    :value="value"    
    @input="$emit('input', $event.target.value)"
    >
    <img :src="iconPath" alt="">
  </div>
</template>
<script>
export default {
  name: 'hlInput',
  props: ['label', 'value',"type","icon"],
  data(){
    return{
      iconPath:null
    }
  },
  mounted(){
    this.iconPath = require("../../assets/images/icon/"+this.icon+'.svg')
  }
}
</script>
<style lang="less" scoped>
.completion-input-box{
  width: 100%;
  position: relative;
  span,input{
    display: inline-block;
  }
  span{
    width: 50px;
    height: 40px;
    line-height: 42px;
    font-size: 14px;
  }
  input{
    height: 40px;
    line-height: 42px;
    width: 100%;
    font-size: 15px;
    padding: 0 0 0 40px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 4px;
    color: #999;
    box-sizing: border-box;
  }
  img{
    position: absolute;
    left: 12px;
    top:8px;
    width: 25px;
    height: 25px;
  }
}
</style>