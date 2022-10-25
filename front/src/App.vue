<template>
  <div>
    <Planos/>
    <Precos/>
    <Cliente/>
  </div>
</template>

<script>
import Planos from './components/Planos.vue'
import Precos from './components/Precos.vue'
import Cliente from './components/Cliente.vue'
export default {
  name: 'App',
  components: {
    Planos,
    Precos,
    Cliente
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
