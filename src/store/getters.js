const getters = {
    permission_routers: state => state.permission.routers,
    addRouters: state => state.permission.addRouters,
    fullWidth:state => state.position.fullWidth,
    marginL:state => state.position.marginL,
    fullHeight:state => state.position.fullHeight,
    visitedViews: state => state.tagsView.visitedViews,
}
export default getters