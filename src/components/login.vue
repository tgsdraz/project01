<template>
  <div class="hello">
    <form method="post">
      <div id="username">
        <label>username:</label>
        <input type="text" v-model="user.username">
      </div>
      <div id="password">
        <label>password:</label>
        <input type="password" v-model="user.password">
      </div>
      <a class="submit" @click.prevent="login">登录</a>
      <a class="toRegedit" href="#/regedit">注册</a>
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource';
Vue.use(VueResource)
export default {
  name: 'HelloWorld',
  data () {
    return {
      user:{
        username:'',
        password:''
      },
      flag:'false'
    }
  },
  methods:{
    login(){
      this.$http.post('/api/login',{
        username:this.user.username,
        password:this.user.password
      },{}).then((res) => {
        const content = res.body;
        if(content.length > 0){
          this.flag = true
          alert('登录成功,页面跳转中...')
          if(this.flag){
            window.location.href = '#/main'
          }else{
            return
          }
        }else{
          this.user.username = ''
          this.user.password = ''
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.hello
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
    #username,#password
      margin-bottom 20px
      label 
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
