<template>
    <div id="sys">
        <ul class="sys-item-list">
            <li class="sys-item">进货管理</li>
            <li class="sys-item">销售管理</li>
            <li class="sys-item">库存管理</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'sysList'
}
</script>
<style lang="stylus">
#sys
    width 100%
    height 30px
    background rgba(255,248,220,.3)
    .sys-item-list
        width 100%
        height 100%
        .sys-item
            width 100px
            height 100%
            font-size 16px
            color #808000
            text-align center
            line-height 30px
            float left
            font-family Arial, Helvetica, sans-serif 

</style>
