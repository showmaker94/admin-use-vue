import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/* Layout*/
/* Layout */
import Layout from '../views/layout/layout'
/**
 * hidden:true
 * alwaysShow:true
 * 
 * redirect:noredirect
 * name:'router-name'
 * meta : {
 * title: 'title'
 * icon:'svg-name
 * }
 */

// example: {path:'/',component:Layout,redirect:'/login',name:'login',hidden:true}

export const constantRouterMap = [{
    path: '',
    component: Layout,
    redirect: '/dashboard/dashboard'
  },
  {
    path: '/login',
    component: () =>
      import('@/views/login/login'),
    name: 'login',
    hidden: true //侧边栏不显示的路由
  },
  {
    path: '/404',
    component: () =>
      import('@/views/error/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () =>
      import('@/views/error/401'),
    hidden: true
  },

  // 锁屏
  {
    path: '/lock',
    component: () =>
      import('@/views/common/lock'),
    name: '锁屏',
    hidden: true
  },
  { //普通路由
    path: '/home',
    component: () =>
      import('@/views/home/home'),
    name: '主页',
    meta: {
      title: 'home',
      icon: 'home'
    }
  },
  //报表
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/dashboard',
    meta: {
      title: '首页',
      icon: 'dashboard'
    },
    children: [{
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard/dashboard'),
      meta: {
        title: '首页',
        icon: 'dashboard'
      }
    }]
  },
  //excel
  {
    path: '/excel',
    component: Layout,
    redirect: '/excel/uploadExcel',
    meta: {
      title: 'Excel相关',
      icon: 'excel'
    },
    children: [{
        path: 'uploadExcel',
        name: 'uploadExcel',
        component: () => import('@/views/excel/uploadExcel'),
        meta: {
          title: '上传Excel',
          icon: 'upload'
        }
      },
      {
        path: 'exportExcel',
        name: 'exportExcel',
        component: () => import('@/views/excel/exportExcel'),
        meta: {
          title: '导出Excel',
          icon: 'export'
        }
      }
    ]
  },
  //图表
  {
    path: '/charts',
    component: Layout,
    redirect: '/charts/line',
    meta: {
      title: '可视化图表',
      icon: 'chart'
    },
    children: [{
        path: 'line',
        name: 'line',
        component: () => import('@/views/charts/line'),
        meta: {
          title: '折线图',
          icon: 'line-chart'
        }
      },
      {
        path: 'histogram',
        name: 'histogram',
        component: () => import('@/views/charts/histogram'),
        meta: {
          title: '柱状图',
          icon: 'chart-histogram'
        }
      },
      {
        path: 'bar',
        name: 'bar',
        component: () => import('@/views/charts/bar'),
        meta: {
          title: '条形图',
          icon: 'scatter_plot'
        }
      },
      {
        path: 'pie',
        name: 'pie',
        component: () => import('@/views/charts/pie'),
        meta: {
          title: '饼图',
          icon: 'piechart'
        }
      },
      {
        path: 'ring',
        name: 'ring',
        component: () => import('@/views/charts/ring'),
        meta: {
          title: '环形图',
          icon: 'bingtuhuanzhuang'
        }
      },
      {
        path: 'waterfall',
        name: 'waterfall',
        component: () => import('@/views/charts/waterfall'),
        meta: {
          title: '瀑布图',
          icon: 'icon-p_waterfall'
        }
      },
      {
        path: 'funnel',
        name: 'funnel',
        component: () => import('@/views/charts/funnel'),
        meta: {
          title: '漏斗图',
          icon: 'funnel'
        }
      },
      {
        path: 'radar',
        name: 'radar',
        component: () => import('@/views/charts/radar'),
        meta: {
          title: '雷达图',
          icon: 'radar'
        }
      },
      {
        path: 'map',
        name: 'map',
        component: () => import('@/views/charts/map'),
        meta: {
          title: '地图',
          icon: 'dizhi1'
        }
      },
      {
        path: 'sankey',
        name: 'sankey',
        component: () => import('@/views/charts/sankey'),
        meta: {
          title: '桑基图',
          icon: 'mapsankey'
        }
      },
      {
        path: 'heatmap',
        name: 'heatmap',
        component: () => import('@/views/charts/heatmap'),
        meta: {
          title: '热力图',
          icon: 'heat_map'
        }
      },
      {
        path: 'scatter',
        name: 'scatter',
        component: () => import('@/views/charts/scatter'),
        meta: {
          title: '散点图',
          icon: 'scatter_plot'
        }
      },
      {
        path: 'candle',
        name: 'candle',
        component: () => import('@/views/charts/candle'),
        meta: {
          title: 'K线蜡烛图',
          icon: 'candle_sticks'
        }
      },
      {
        path: 'gauge',
        name: 'gauge',
        component: () => import('@/views/charts/gauge'),
        meta: {
          title: '仪表盘',
          icon: 'gauge'
        }
      },
      {
        path: 'tree',
        name: 'tree',
        component: () => import('@/views/charts/tree'),
        meta: {
          title: '树图',
          icon: 'tree'
        }
      },
      {
        path: 'liquidfill',
        name: 'liquidfill',
        component: () => import('@/views/charts/liquidfill'),
        meta: {
          title: '水球图',
          icon: 'yoga-ball'
        }
      },
      {
        path: 'wordcloud',
        name: 'wordcloud',
        component: () => import('@/views/charts/wordcloud'),
        meta: {
          title: '词云图',
          icon: 'chartwordcloud'
        }
      }
    ]
  },
  //PDF
  {
    path: '/pdf',
    component: Layout,
    redirect: '/pdf/pdf',
    meta: {
      title: 'PDF',
      icon: 'pdf'
    },
    children: [{
      path: 'pdf',
      name: 'pdf',
      component: () => import('@/views/pdf'),
      meta: {
        title: 'PDF',
        icon: 'pdf'
      }
    }]
  },
  //zip
  {
    path: '/zip',
    component: Layout,
    redirect: '/zip/zip',
    meta: {
      title: 'ZIP',
      icon: 'zip'
    },
    children: [{
      path: 'zip',
      name: 'zip',
      component: () => import('@/views/zip'),
      meta: {
        title: 'ZIP',
        icon: 'zip'
      }
    }]
  },
  //错误页面
  {
    path: '/error',
    component: Layout,
    redirect: '/error/401',
    meta: {
      title: '错误页面',
      icon: 'error'
    },
    children: [{
      path: '401',
      name: '401',
      component: () => import('@/views/error/401.vue'),
      meta: {
        title: '401',
        icon: 'icon-test'
      }
    },
    {
      path: '404',
      name: '404',
      component: () => import('@/views/error/404.vue'),
      meta: {
        title: '404',
        icon: 'icon-test1'
      }
    }]
  },
  //表单
  {
    path: '/form',
    component: Layout,
    redirect: '/form/baseForm',
    meta: {
      title: '表单',
      icon: 'form'
    },
    children: [{
      path: 'baseForm',
      name: 'baseForm',
      component: () => import('@/views/form/baseForm'),
      meta: {
        title: '基础表单',
        icon: 'form'
      }
    },
    {
      path: 'upload',
      name: 'upload',
      component: () => import('@/views/form/upload'),
      meta: {
        title: '上传文件',
        icon: 'upload'
      }
    },
    {
      path: 'editor',
      name: 'editor',
      component: () => import('@/views/form/vueEditor'),
      meta: {
        title: '文本编辑',
        icon: 'editor'
      }
    }
  ]
  },
]

export default new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})

/**
 * async router 
 * different roles
 */

export const asyncRouterMap = [{
  path: '/permission',
  component: Layout,
  redirect: '/permissoin/admin',
  name: 'qew',
  alwaysShow: true,
  meta: {
    title: '权限',
    icon: 'permission',
    roles: ['admin', 'user']
  },
  children: [{
      path: 'admin',
      component: () => import('@/views/permission/admin'),
      name: 'permissionAdmin',
      meta: {
        title: '管理员',
        roles: ['user'],
        icon: 'admin'
      }
    },
    {
      path: 'user',
      component: () => import('@/views/permission/user'),
      name: 'permissionUser',
      meta: {
        title: '用户',
        roles: ['user'],
        icon: 'user'
      }
    }
  ]
}]
