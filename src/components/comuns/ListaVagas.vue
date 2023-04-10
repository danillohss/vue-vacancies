<template>
    <slot name="titulo" :dadosTitulo="{ titulo: 'Titulo', nroVagas: 15 }">
        <p>Título da lista de vagas </p>
    </slot>
    <slot atributo1=" att do slot filho para o pai" :atributo2='[1, 2, 3, 4, 5]'>
        <div v-for="(vaga, index) in vagas" :key="index" class="row mt-5">
            <div class="col">
                <Vaga v-bind="vaga" />
            </div>
        </div>
    </slot>
    <slot :dadosRodape="{ titulo: 'RodapeLista', paginacao: { nPaginas: 3, paginaAtual: 2 } }">
        <p>Rodapé da lista</p>
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