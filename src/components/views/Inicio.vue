<template>
  <div>
    <VagasFavoritas />
    <Topo @navegar="componente = $event" />
    <Alerta v-if="this.alerta" />
    <Conteudo v-if="visibilidade" :conteudo="componente" />
  </div>
</template>

<script>

import Alerta from '@/components/comuns/Alerta.vue'
import VagasFavoritas from '@/components/comuns/VagasFavoritas.vue'
import Conteudo from '@/components/layouts/Conteudo.vue'
import Topo from '@/components/layouts/Topo.vue'

export default {
  name: 'INICIO',
  data() {
    return {
      visibilidade: true,
      componente: 'Home',
      alerta: false,
    }
  },
  components: {
    Topo, Conteudo, VagasFavoritas, Alerta
  },
  mounted() {
    this.emitter.on('alerta', () => {
      this.alerta = true;
      setTimeout(() => this.alerta = false, 3000)
      console.log('Alerta customizado')
    })
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
