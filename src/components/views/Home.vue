<template>
    <div class="container py-4">
        <div class="row">
            <div class="col">
                <PesquisarVaga />
            </div>
        </div>
        <div v-for="(vaga, index) in vagas" :key="index" class="row mt-5">
            <div class="col">
                <Vaga v-bind="vaga" />
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-4">
                <Indicador titulo="Vagas abertas" indicador="100" bg="bg-dark" color="text-white" />
            </div>
            <div class="col-4">
                <Indicador titulo="Profissionais cadastrador" indicador="225" bg="bg-dark" color="text-white" />
            </div>
            <div class="col-4">
                <Indicador titulo="Visitantes online" :indicador="usuariosOnline" bg="bg-light" color="text-dark" />
            </div>
        </div>
    </div>
</template>

<script>
import PesquisarVaga from '@/components/comuns/PesquisarVaga.vue'
import Indicador from '@/components/comuns/Indicador.vue'
import Vaga from '@/components/comuns/Vaga.vue'
export default {
    // eslint-disable-next-line
    name: 'Home',
    components: { PesquisarVaga, Indicador, Vaga },
    created() {
        setInterval(this.getUsuariosOnline, 1000);
    },
    data() {
        return {
            usuariosOnline: 0,
            vagas: [
                {
                    titulo: 'Analista Programador PHP Pleno',
                    descricao: 'Profissional com conhecimentos em PHP, Laravel e MySQL. Necessário 3 anos de experiência . Atuará na manutenção de sistemas legados da empresa.',
                    salario: 'R$6.000,00',
                    modalidade: 'Home Office',
                    tipo: 'PJ',
                    publicacao: '2021-10-10'
                },
                {
                    titulo: 'Programador JavaScript Angular',
                    descricao: 'Profissional com conhecimentos avançados em JavaScript e Angular.',
                    salario: 'R$5.000,00',
                    modalidade: 'Presencial',
                    tipo: 'CLT',
                    publicacao: '2021-10-07'
                },
                {
                    titulo: 'Programador JavaScript Vue',
                    descricao: 'Profissional com conhecimentos avançados em JavaScript e Vue.',
                    salario: 'R$4.000,00',
                    modalidade: 'Home Office',
                    tipo: 'CLT',
                    publicacao: '2021-10-06'
                },
                {
                    titulo: 'Analista de Banco de Dados Sênior',
                    descricao: 'Domínio dos bancos de dados SQL Server, Oracle, Postgre e MySQL',
                    salario: 'R$11.000,00',
                    modalidade: 'Presencial',
                    tipo: 'PJ',
                    publicacao: '2021-10-06'
                },
                {
                    titulo: 'Programador Web Júnior',
                    descricao: 'Conhecimentos básicos em HTML, CSS, JavaScript, Bootstrap, PHP e MySQL',
                    salario: 'R$2.000,00',
                    modalidade: 'Presencial',
                    tipo: 'CLT',
                    publicacao: '2021-10-05'
                }
            ]
        }
    },
    methods: {
        getUsuariosOnline() {
            this.usuariosOnline = Math.floor(Math.random() * 101)
        },
    },
}
</script>

<style scoped></style>