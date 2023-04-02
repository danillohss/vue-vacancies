<template>
    <div class="card">
        <div class="card-header bg-dark text-white">{{ this.titulo }}</div>
        <div class="card-body">
            <p>{{ this.descricao }}</p>
        </div>
        <div class="card-footer">
            <small class="text-muted">
                <a href=""></a> Salário: {{ this.salario }} | Modalidade: {{ getModalidade }} |
                Tipo: {{ getTipo }} | {{
                    this.publicacao }}
            </small>
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line
    name: 'Vaga',
    //props: ['titulo', 'descricao', 'salario', 'modalidade', 'tipo', 'publicacao'],
    props: {
        titulo: {
            type: String,
            required: true,
            validator(p) {
                console.log(p);
            },
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
        }
    }
}
</script>