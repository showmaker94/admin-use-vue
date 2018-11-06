<template>
    <div class="app-container">
      <h4>数据展示</h4>
      <div class="item">
        <data-display :option="option"></data-display>
      </div>
      <h4>选项卡展示</h4>
        <div class="item">
          <data-tab :option="tabsDataOption"></data-tab>
        </div>
      <h4>卡片展示</h4>
        <div class="item">
          <data-card :option="cardDataOption"></data-card>
        </div>
      <h4>数字展示</h4>
      <div class="item">
        <data-icon :option="iconDataOption"></data-icon>
      </div>
    </div>
</template>
<script>
import dataDisplay from "@/components/data-display"
import dataTab from "@/components/data-tab"
import dataCard from "@/components/data-card"
import dataIcon from "@/components/data-icon"
export default {
  name: "dashboard",
  components:{
    dataDisplay,
    dataTab,
    dataCard,
    dataIcon
  },
  data() {
    return {
      option: {
        span: 8,
        color: '#15A0FF',
        data: [
          {
            count: 1000,
            title: '日活跃数'
          },
          {
            count: 3000,
            title: '月活跃数'
          },
          {
            count: 20000,
            title: '年活跃数'
          }
        ]
      },
      tabsDataOption:{
        span: 6,
        data: [
          {
            title: '分类统计',
            subtitle: '实时',
            count: 7993,
            allcount: 10222,
            text: '当前分类总记录数',
            color: 'rgb(49, 180, 141)',
            key: '类'
          },
          {
            title: '附件统计',
            subtitle: '实时',
            count: 3112,
            allcount: 10222,
            text: '当前上传的附件数',
            color: 'rgb(56, 161, 242)',
            key: '附'
          },
          {
            title: '文章统计',
            subtitle: '实时',
            count: 908,
            allcount: 10222,
            text: '评论次数',
            color: 'rgb(117, 56, 199)',
            key: '评'
          },
          {
            title: '新闻统计',
            subtitle: '实时',
            count: 908,
            allcount: 10222,
            text: '评论次数',
            color: 'rgb(59, 103, 164)',
            key: '新'
          }
        ]
      },
      cardDataOption: {
        span: 6,
        borderColor: '#fff',
        data: [
          {
            name: '姓名1',
            src: 'static/img/mock/card/card-1.jpg',
            text: '介绍1'
          },
          {
            name: '姓名2',
            src: 'static/img/mock/card/card-2.jpg',
            text: '介绍2'
          },
          {
            name: '姓名3',
            src: 'static/img/mock/card/card-3.jpg',
            text: '介绍3'
          },
          {
            name: '姓名4',
            src: 'static/img/mock/card/card-4.jpg',
            text: '介绍4'
          }
        ]
      },
      iconDataOption: {
        color: 'rgb(63, 161, 255)',
        span: 4,
        data: [
          {
            title: '今日注册',
            count: 12678,
            icon: 'fa fa-pencil'
          },
          {
            title: '今日登录',
            count: 22139,
            icon: 'fa fa-pencil'
          },
          {
            title: '今日订阅',
            count: 35623,
            icon: 'fa fa-pencil'
          },
          {
            title: '今日评论',
            count: 16826,
            icon: 'fa fa-pencil'
          },
          {
            title: '今日评论',
            count: 168260,
            icon: 'fa fa-pencil'
          },
          {
            title: '今日评论',
            count: 16826,
            icon: 'fa fa-pencil'
          }
        ]
      },
    };
  },
  created() {},
  mounted() {},
  props: [],
  methods: {}
};
</script>
<style lang="less" scoped>
@import url("../../styles/h.less");
.item{
  margin-bottom: 16px;
}
</style>
<style lang="less">
@import '../../styles/data-display.less';
@import '../../styles/data-tabs.less';
@import '../../styles/data-card.less';
@import '../../styles/data-icon.less';
</style>