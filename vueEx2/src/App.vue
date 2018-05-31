<template>

  <div id="app">
    <h1>This is the Main Page</h1>
    <cars></cars>
  </div>

</template>

<script>
import Cars from './Cars.vue'
export default { 
  components:{
    'cars':Cars
  },
  data () {     
    return {
    
    }
  }
}
</script>

<style>
</style>
