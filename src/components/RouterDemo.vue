<template>
  <div>
    <router-link to="/foo">Go to Foo</router-link>
    <br>
    <router-link to="/user/10086">Go to /user/10086</router-link>
    <br>
    <router-link to="/user/10086/profile">Go to /user/10086/profile</router-link>
    <br>
    <router-link to="/a">Go to a 重定向到bar</router-link>
    <br>
    <router-link to="/user/other">Go to 404</router-link>
    <br>
    <!--用了history方式，这里自然也要变-->
    <!--<a href="#/foo">GO to Foo a标签</a>-->
    <a href="/foo">GO to Foo a标签</a>
    <br>
    <button @click="$router.push('foo')">Go to Foo</button>
    <p>id：{{ id }} <span style="color: red;">|</span>
    <b>fullPath：{{ routerInfo.fullPath }}</b> <span style="color: red;">|</span>
    path：{{ routerInfo.path }} <span style="color: red;">|</span>
    name：{{ routerInfo.name }} <span style="color: red;">|</span>
    params：{{ routerInfo.params }} <span style="color: red;">|</span>
    query：{{ routerInfo.query }} <span style="color: red;">|</span>
    meta：{{ routerInfo.meta }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "RouterDemo",
  props:['id'],
  computed:{
    routerInfo(){
      const { fullPath, path, name, params, query, meta } = this.$route
      return{
        fullPath, path, name, params, query, meta
      }
    }
  }
}
</script>

<style scoped>

</style>