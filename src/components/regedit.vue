<template>
   <div class="regedit">
    <form method="post">
      <div id="username">
        <label>username:</label>
        <input type="text" v-model="user.username">
      </div>
      <div id="password">
        <label>password:</label>
        <input type="password" v-model="user.password">
      </div>
      <div id="re-password">
        <label>re-password:</label>
        <input type="password" v-model="user.password1">
      </div>
      <a class="submit" @click.prevent="regedit">注册</a>
    </form>
  </div> 
</template>
<script>
export default {
    data(){
        return{
            user:{
                username:'',
                password:'',
                password1:''
            }
        }
    },
    methods:{
        regedit(){
            this.$http.post('/api/regedit',{
                username:this.user.username,
                password:this.user.password,
                password1:this.user.password1
            },{}).then((res) => {
                const content = res.body
                if(content == 'success'){
                  alert('注册成功，登录页面跳转中...')
                  window.location.href = '#/login'
                }else{
                  alert('注册失败，请重新注册')
                  this.user.username = ""
                  this.user.password =""
                  this.user.password1 =""
                }
            },(err) => {
                console.log(err)
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
.regedit
  position relative
  width 100%
  height 100%
  background url('../assets/bg.jpg') center center no-repeat
  background-size cover
  form
    position absolute
    left 50%
    top 50%
    transform translate(-50%,-50%)
    width 50%
    min-width 300px
    height 200px
    text-align center
    border 1px solid #F2F2F2
    border-radius 10px
    padding 20px
    #username,#password,#re-password
      margin-bottom 20px
      label 
        display inline-block
        width 100px
        text-align right 
        color #fff
        font-size 16px
      input
        width 50%
        height 20px
        padding 5px 10px
        border 0
        border-radius 5px
        outline none
    a
      display inline-block
      width 80px
      height 40px
      text-align center
      line-height 40px
      font-size 18px
      color #fff
      margin 20px 40px
      border-radius 5px
      cursor pointer
    .submit
      background #FF7F24
    .toRegedit
      background #FF69B4

</style>
