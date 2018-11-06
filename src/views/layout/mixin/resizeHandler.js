import store from '@/store'

const WIDTH = 1024
const RATIO = 3

export default {
    beforeMount(){
        window.addEventListener('resize', this.resizeHandler)
    },
    mounted(){

    },
    methods:{
        resizeHandler(){
            store.getters.state.fullWidth
        }
    }
}