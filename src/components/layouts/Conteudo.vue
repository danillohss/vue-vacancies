<template>
    <div>
        <h1>{{ titulo }}</h1>
        <button @click="atualizarComponente()">ATT</button>
        <button @click="conteudo = 'Home'">Home</button>
        <button @click="conteudo = 'PublicarVaga'">Publicar vaga</button>
        <!-- <Home />
        <PublicarVaga /> -->
        <keep-alive>
            <component :is="conteudo" />
        </keep-alive>
    </div>
</template>

<script>
import Home from '@/components/views/Home.vue'
import PublicarVaga from '@/components/views/PublicarVaga.vue'
export default {
    // eslint-disable-next-line
    name: 'Conteudo',
    components: {
        Home,
        PublicarVaga
    },
    data: () => ({
        teste: 'O componente foi criado',
        titulo: 'Componente Conteudo',
        conteudo: 'Home',
    }),
    methods: {
        atualizarComponente() {
            this.titulo += '*'
        }
    },
}
</script>

<style scoped></style>