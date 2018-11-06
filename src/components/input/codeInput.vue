<template>
  <div class="completion-input-box">
    <span class="input-box-name" v-if="label">{{label}}</span>
    <input 
    :type="type" 
    ref="input"
    :value="value"    
    @input="$emit('input', $event.target.value)"
    >
    <span class="getCode" @click="getPhoneCode">{{codeMsg}}</span>
    <img :src="iconPath" alt="">
  </div>
</template>
<script>
let timer = null
export default {
  name: 'hlCodeInput',
  props: ['label', 'value',"type","icon","phoneNum"],
  data(){
    return{
      iconPath:null,
      codeMsg:"验证码",
      hasSend:false
    }
  },
  mounted(){
    this.iconPath = require("../../assets/images/icon/"+this.icon+'.svg')
  },
  methods:{
    getPhoneCode(){
      if(!this.phoneNum){
        alert("请输入手机号")
      }else{
        if(this.hasSend){
          return
        }
        this.hasSend = true
        let t = 5
        let self = this
        if(timer){
          clearInterval(timer)
        }
        timer=setInterval(()=>{
          t= t-1
          self.codeMsg = t+"S后重新发送"
          if(t==0){
            self.hasSend = false;
            self.codeMsg = "验证码"
            clearInterval(timer)
          }
        },1000)
      }
    }
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
    width: 70%;
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
  .getCode{
    float: right;
    width: 30%;
    box-sizing: border-box;
    border: 1px solid rgba(0,0,0,0.1);
    text-align: center;
    line-height: 40px;
     border-radius: 4px;
     background: #f5f7fa;
     color: #999;
     cursor: pointer;
  }
}
</style>