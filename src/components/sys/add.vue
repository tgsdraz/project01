<template>
    <div id="add">
        <form @submit.prevent="add" method="post">
            <div id="good-mark">
               <span>good_mark:</span>
               <input type="text" v-model="goods.good_mark">
            </div>
            <div id="good-name">
               <span>good_name:</span>
               <input type="text" v-model="goods.good_name">
            </div>
            <div id="good-price">
               <span>good_price:</span>
               <input type="text" v-model="goods.good_price">
            </div>
            <div id="good-num">
                <span>good_num:</span>
               <input type="text" v-model="goods.good_num">
            </div>
            <input type="submit" value="添加" class="btn">
            
        </form>
    </div>
</template>
<script>
import Vue from 'vue'
import VueResource from 'vue-resource';
Vue.use(VueResource)
export default {
    data(){
        return{
            goods:{
                good_mark:'',
                good_name:'',
                good_price:'',
                good_num:''
            }
        }
    },
    methods:{
        add(){
            this.$http.post('/api/add',{
                good_mark:this.goods.good_mark,
                good_name:this.goods.good_name,
                good_price:this.goods.good_price,
                good_num:this.goods.good_num
            },{}).then((res) => {
                const content = res.body
                if(content == '添加成功'){
                    alert('添加成功')
                }else if(content == "数据更新成功"){
                    alert('数据更新成功')
                }else{
                    alert('各项数据都不能为空')
                }
                this.goods.good_mark = ''
                this.goods.good_name =''
                this.goods.good_price =''
                this.goods.good_num =''
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
#add
    position relative
    width 100%
    height 100%
    form
        position absolute
        top 0
        right 0
        bottom 0
        left 0
        margin auto
        width 500px
        height 300px
        padding 20px
        border 1px solid #FFFACD
        border-radius 10px
        text-align center
        div
            margin-bottom 20px
            span 
                display inline-block
                width 100px
                color #CD853F
                font-size 14px
                text-align right 
            input
                width 300px
                height 20px
                padding 5px 10px
                outline none 
                border 1px solid #CD853F
                border-radius 5px 
        .btn
            width 80px
            height 40px
            border 0
            border-radius 4px
            background 	#800000
            color #ffffff
            font-size 16px
            text-align center
            line-height 40px

</style>

