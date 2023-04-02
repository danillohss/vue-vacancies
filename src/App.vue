<template>
  <div>
    <Topo />
    <button @click="desmontar()">desmontar</button>
    <Conteudo v-if="visibilidade" />
  </div>
</template>

<script>

import Conteudo from '@/components/layouts/Conteudo.vue'
import Topo from '@/components/layouts/Topo.vue'

export default {
  name: 'App',
  data() {
    return {
      visibilidade: true,
    }
  },
  components: {
    Topo, Conteudo
  },
  methods: {
    desmontar() {
      console.log('asdsad')
      this.visibilidade = false;
    }
  },
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
