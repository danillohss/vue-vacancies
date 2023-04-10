<template>
    <div class="h-100 p-5 bg-light border rounded-3">
        <h2>Pesquisar Vagas</h2>
        <hr>
        <div class="row">
        <div class="col">
            <div class="form-group">
            <input type="text" class="form-control" placeholder="Pesquisar..." v-model="titulo">
            <hr>
            </div>
        </div>
        </div>
        <div class="row">
        <div class="col">
            <button class="btn btn-outline-dark mt-2" type="button" @click="pesquisarVaga()">Buscar</button>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PesquisarVaga',
    data: () => ({
        titulo: ''
    }),
    methods: {
        pesquisarVaga() {
            this.emitter.emit('filtrarVagas', { titulo: this.titulo })
        }
    }    
}
</script>
