import Vue from 'vue'
import svgIcon from '@/components/svg-icon'// svg组件
//import generateIconsView from '@/views/icons/svg-icon/generateIconsView.js'// just for @/views/icons , you can delete it
// register globally
Vue.component('svg-icon', svgIcon)

//const requireAll = requireContext => requireContext.keys().map(requireContext)
//const req = require.context('./svg', false, /\.svg$/)

//const iconMap = requireAll(req)
// console.log(iconMap)
// generateIconsView.generate(iconMap)
// console.log(generateIconsView.generate(iconMap))
