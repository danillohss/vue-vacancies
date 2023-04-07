<template>
    <div>
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
    props: {
        conteudo: {
            typeof: 'string',
            required: true
        }
    },
    components: {
        Home,
        PublicarVaga
    },
}
</script>

<style scoped></style>