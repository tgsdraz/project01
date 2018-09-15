<template>
    <div id="main">
        <div class="main-list">
            <sys-list></sys-list>
        </div>
        <div class="main-menu">
            <div class="main-menu-left">
                <router-link :to="{name:'purchasing'}">进货管理</router-link>
                <router-link :to="{name:'sale'}">销售管理</router-link>
                <router-link :to="{name:'store'}">库存管理</router-link>
                <router-link :to="{name:'add'}">添加商品</router-link>
                
            </div>
            <div class="main-menu-right">
                <router-view></router-view>
            </div>
        </div> 
        <div class="sys-info">
            <div class="author">开发者：唐根生</div>
            <div class="login-user">登陆者：<span></span></div>
        </div>
    </div>
</template>
<script>
import sysList from './sysList'
export default {
    components:{
        sysList
    }
}
</script>
<style lang="stylus">
#main
    position relative
    width 100%
    height 100%
    background url('../assets/bg1.jpg') center center no-repeat
    background-size cover
    .main-menu
        position absolute
        top 30px
        bottom 30px
        left 0
        right 0
        display flex
        .main-menu-left
            flex 0 0 200px
            background rgba(0,191,255,0.8)
            display flex
            flex-direction column
            padding 0 10px
            a
                display block
                width 100%
                height 40px
                text-align center
                line-height 40px
                text-decoration none
                color Orange 
                font-size 18px
                border-bottom 1px solid #FAFAD2
        .main-menu-right
            flex 1
            background rgba(0,255,127,.3)
</style>
