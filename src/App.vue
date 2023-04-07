<template>
  <div>
    <VagasFavoritas />
    <Topo @navegar="componente = $event" />
    <Conteudo v-if="visibilidade" :conteudo="componente" />
  </div>
</template>

<script>

import VagasFavoritas from '@/components/comuns/VagasFavoritas.vue'
import Conteudo from '@/components/layouts/Conteudo.vue'
import Topo from '@/components/layouts/Topo.vue'

export default {
  name: 'App',
  data() {
    return {
      visibilidade: true,
      componente: 'Home',
    }
  },
  components: {
    Topo, Conteudo, VagasFavoritas
  },
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
