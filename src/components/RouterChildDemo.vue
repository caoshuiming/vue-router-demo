<template>
  <p>id：{{ id }} <span style="color: green;">|</span>
    <b>fullPath：{{ routerInfo.fullPath }}</b> <span style="color: green;">|</span>
    path：{{ routerInfo.path }} <span style="color: green;">|</span>
    name：{{ routerInfo.name }} <span style="color: green;">|</span>
    params：{{ routerInfo.params }} <span style="color: green;">|</span>
    query：{{ routerInfo.query }} <span style="color: green;">|</span>
    meta：{{ routerInfo.meta }}</p>
</template>

<script>
export default {
  name: "RouterChildDemo",
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