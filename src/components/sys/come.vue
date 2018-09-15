<template>
    <div id="come">
        <table class="come-list">
            <!-- <tr class="come-title">
                <th>商品id</th>
                <th>商品名称</th>
                <th>商品型号</th>
                <th>商品价格</th>
                <th>商品总价</th>
                <th>商品操作</th>
            </tr> -->
            <tr class="come-item" v-for="(item,index) in data" :key="item.good_id">
                <td class="item-id">{{item.good_id}}</td>
                <td class="item-name">{{item.good_name}}</td>
                <td class="item-mark">{{item.good_mark}}</td>
                <td class="item-price">{{item.good_price}}</td>
                <td class="item-total-price">{{item.good_price * item.good_num}}</td>
                <td class="item-operate">
                    <span class="item-reduce" @click="reduce(index)" ref="reduce">-</span>
                    <span class="item-num">{{item.good_num}}</span>
                    <span class="item-increase" @click="increase(index)" ref="increase">+</span>
                </td>
                <td>
                    <span class="delete" @click="remove(index)" :class="{'hidden':item.good_num!==0}">删除</span>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
import Vue from 'vue'
import VueResource from 'vue-resource';
Vue.use(VueResource)
export default {
    data(){
        return{
            goodsData:[]
        }
    },
    props:{
        data:{
            type:Array
        }
    },
    created(){
        this.fun = (item) => {
            this.$http.post('/api/update',item,{}).then((res) => {
                        
            },(err) => {
                console.log(err)
            })
        }
        this.fun1 = (item) => {
            this.$http.post('/api/delete',item,{}).then((res) => {
                        
            },(err) => {
                console.log(err)
            })
        }
    },
    methods:{
         
        reduce($index){
            this.data.forEach((item,index) => {
                if($index == index){
                    if(item.good_num <= 0){
                        item.good_num = 0
                    }else{
                        item.good_num--
                    }
                    this.fun(item)
                }
            })
        },
        increase($index){
            this.data.forEach((item,index) => {
                if($index == index){
                    item.good_num++
                    this.fun(item)
                }
            })
        },
        remove($index){
             this.data.forEach((item,index) => {
                if($index == index){
                    if(item.good_num == 0){
                        this.data.splice(index,1)
                    }
                    this.fun1(item)
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
#come
    width 100%
    height 100%
    overflow hidden
    .come-list
        width 80%
        height 100%
        margin 0 auto 
        .come-item
            width 100%
            height 30px
            display flex
            justify-content center
            align-items center
            td
                flex 1
                height 30px
                text-align center
                line-height 30px
                font-size 14px
            .item-id,.item-name,.item-mark
                color #808080
            .item-price
                color red
            .item-total-price
                color #8B0000
            .item-operate
                display flex
                align-items center
                justify-content center
                .item-reduce,.item-increase
                    display inline-block
                    width 16px
                    height 16px
                    font-size 12px
                    text-align center
                    line-height 16px
                    color #BC8F8F
                    border 1px solid #BC8F8F
                    border-radius 2px
                    margin 10px
                    cursor pointer
            .delete
                display inline-block
                width 30px
                height 20px
                font-size 12px
                background  #DCDCDC
                text-align center
                line-height 20px
                border-radius 2px
                color #FF4500
                cursor pointer 
                &.hidden
                    display none  
</style>

