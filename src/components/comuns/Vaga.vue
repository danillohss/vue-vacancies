<template>
    <div class="card">
        <div class="card-header bg-dark text-white">{{ this.titulo }}</div>
        <div class="card-body">
            <p>{{ this.descricao }}</p>
        </div>
        <div class="card-footer">
            <small class="text-muted">
                <a href=""></a> Salário: {{ this.salario }} | Modalidade: {{ this.modalidade }} |
                Tipo: {{ this.tipo }} | {{
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
}
</script>