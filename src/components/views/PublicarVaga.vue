<template>
    <div class="container py-4">
        <div class="row">
            <div class="col">
                <h4>Cadastre uma vaga gratuitamente!</h4>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col">
                <label class="form-label">Título da vaga</label>
                <input type="text" class="form-control" v-model="titulo">
                <div class="form-text">Exemplo: Programador Front-end</div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col">
                <label class="form-label">Descrição</label>
                <textarea type="text" class="form-control" v-model="descricao"></textarea>
                <div class="form-text">Informe os detalhes da vaga</div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col">
                <label class="form-label">Remuneração</label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">R$</span>
                    </div>
                    <input type="text" class="form-control" v-model="salario">
                </div>
                <div class="form-text">Informe a Remuneração</div>
            </div>
            <div class="col">
                <label class="form-label">Tipo de contratação</label>
                <select class="form-select" v-model="tipo">
                    <option value="1">PJ</option>
                    <option value="2">CLT</option>
                </select>
                <div class="form-text">Informe o tipo da contratação</div>
            </div>
            <div class="col">
                <label class="form-label">Modalidade</label>
                <select class="form-select" v-model="modalidade">
                    <option value="1">Home Office</option>
                    <option value="2">Híbrido</option>
                    <option value="3">Presencial</option>
                </select>
                <div class="form-text">Informe a Modalidade</div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col">
                <button type="submit" class="btn btn-primary" @click="salvarVaga">Cadastrar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line
    name: 'PublicarVaga',
    data() {
        return {
            titulo: '',
            descricao: '',
            salario: '',
            tipo: '',
            modalidade: '',
        }
    },
    methods: {
        salvarVaga() {
            let vaga = {
                titulo: this.titulo,
                descricao: this.descricao,
                salario: this.salario,
                tipo: this.tipo,
                modalidade: this.modalidade
            }
            localStorage.setItem('vagas', JSON.stringify(vaga));
        }
    },
}
</script>

<style scoped></style>