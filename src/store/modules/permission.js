import { asyncRouterMap, constantRouterMap } from '@/router'
/**
 * 判断当前路由是否有权限
 */
function hasPermission(roles,route){
    if(route.meta && route.meta.roles){
        return roles.some(role=>route.meta.roles.indexOf(role)>=0)
    }else{
        return false
    }
}

/**
 * 过滤异步路由
 */
function filterAsyncRouter(asyncRouterMap,roles){
    const accessedRouter = asyncRouterMap.filter(route=>{
        if(hasPermission(roles,route)){
            if(route.children && route.children.length){
                route.children = filterAsyncRouter(route.children,roles)
            }
            return true
        }else{
            return false
        }
    })
    return accessedRouter //将过滤完全的路由返回
}

const permission = {
    state:{
        routers : constantRouterMap,//公共路由
        addRouters : []//添加的路由
    },
    mutations:{
        SET_ROUTERS:(state,routers)=>{
            state.addRouters = routers
            state.routers = constantRouterMap.concat(routers) //将路由合并
            console.log("合并后的路由")
            console.log(state.routers)
        }
    },
    actions:{
        //生成路由
        GenerateRoutes({commit},data){
            return new Promise(resolve => {
                const {roles} = data
                let accessedRouter //异步路由筛选结果
                if(roles.indexOf('admin')>=0){
                    accessedRouter = asyncRouterMap
                }else{
                    accessedRouter = filterAsyncRouter(asyncRouterMap,roles)
                }
                commit('SET_ROUTERS',accessedRouter)
                resolve("OK")
            })
        }
    }
}

export default permission