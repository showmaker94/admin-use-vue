

function getClientWidth(){
    return document.documentElement.clientWidth
}
function getMarginL(){
    let WIDTH = document.documentElement.clientWidth
    if (WIDTH * 0.135 < 240) {
        return 240;
      } else if (WIDTH * 0.135 > 300) {
        return 300;
      } else {
        return WIDTH * 0.135;
      }
}
function getFullHeight(){
    return document.documentElement.clientHeight
}
const position = {
    state:{
        fullWidth:getClientWidth(),
        marginL:getMarginL(),
        fullHeight:getFullHeight()
    },
    mutations:{
        SET_FULLWIDTH:(state)=>{
            state.fullWidth = getClientWidth()
        },
        SET_MARGINL:(state)=>{
            state.marginL = getMarginL()
        },
        SET_FULLHEIGHT:(state)=>{
            state.fullHeight = getFullHeight()
        }
    }
}




export default position
