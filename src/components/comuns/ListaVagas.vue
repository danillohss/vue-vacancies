<template>
    <slot>
        <div v-for="(vaga, index) in vagas" :key="index" class="row mt-5">
            <div class="col">
                <Vaga v-bind="vaga" />
            </div>
        </div>
    </slot>
</template>

<script>
import Vaga from '@/components/comuns/Vaga.vue'

export default {
    name: 'ListaVagas',
    components: { Vaga },
    data() {
        return {
            vagas: []
        }
    },
    activated() {
        this.vagas = JSON.parse(localStorage.getItem('vagas'))
    },
    mounted() {
        this.emitter.on('filtrarVagas', vaga => {
            const vagas = JSON.parse(localStorage.getItem('vagas'))
            this.vagas = vagas.filter(reg => reg.titulo.toLowerCase().includes(vaga.titulo.toLowerCase()))
        })
    },
}
</script>