<template>
    <div class="card">
        <div class="card-header bg-dark text-white">
            <div class="row">
                <div class="col d-flex justify-content-between">
                    <div>
                        {{ this.titulo }}
                    </div>
                    <div>
                        <div class="form-check form-switch">
                            <input type="checkbox" class="form-check-input" v-model="favoritada">
                            <label v-if="!favoritada" class="form-check-label">Favoritar</label>
                            <label v-else class="form-check-label">Desfavoritar</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <p>{{ this.descricao }}</p>
        </div>
        <div class="card-footer">
            <small class="text-muted">
                Salário: {{ getSalario }} | Modalidade: {{ getModalidade }} |
                Tipo: {{ getTipo }} | Data da publicação: {{
                    this.publicacao }}
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">Deletar vaga</button>
                </div>
            </small>
        </div>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Deseja realmente excluir a vaga selecionada ?</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-danger" @click="deletarVaga()">Excluir</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line
    name: 'Vaga',
    data() {
        return {
            favoritada: false,
        }
    },
    methods: {
        deletarVaga() {
            const arrayVagas = JSON.parse(localStorage.getItem('vagas'));
            console.log(arrayVagas)
        }
    },
    props: {
        titulo: {
            type: String,
            required: true,
        },
        descricao: {
            type: String,
            default: 'O Contratante não colocou nenhuma descrição'
        },
        salario: {
            type: [String, Number],
            required: true,
        },
        modalidade: {
            type: String,
            required: true
        },
        publicacao: {
            type: String,
            required: true
        },
        tipo: {
            type: String,
            required: true
        }
    },
    watch: {
        favoritada(valorNovo) {
            if (valorNovo) {
                this.emitter.emit('favoritarVaga', this.titulo)
            } else {
                this.emitter.emit('desfavoritarVaga', this.titulo)
            }
        }
    },
    computed: {
        getModalidade() {
            switch (this.modalidade) {
                case '1':
                    return 'Home Office'
                case '2':
                    return 'Híbrido'
                case '3':
                    return 'Presencial'
                default:
                    return 'Não informado'
            }
        },
        getTipo() {
            switch (this.tipo) {
                case '1':
                    return 'CLT'
                case '2':
                    return 'PJ'
                default:
                    return 'Não informado'
            }
        },
        getSalario() {
            if (this.salario === '') {
                return 'Não informado'
            }
            return this.salario;
        }
    }
}
</script>