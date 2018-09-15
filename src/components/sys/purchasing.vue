<template>
    <div id="purchasing">
        <button @click="getData">点击获取数据列表</button>
        <come :data="data"></come>
    </div>
</template>
<script>
import Vue from 'vue'
import VueResource from 'vue-resource';
Vue.use(VueResource)
import come from './come'
export default {
    components:{
        come
    },
    data(){
        return {
            data:[]
        }
    },
    methods:{
        getData(){
            this.$http.get('/api/get').then((res) => {
                this.data = res.body
            })
        }
    }
}
</script>
<style>

</style>
