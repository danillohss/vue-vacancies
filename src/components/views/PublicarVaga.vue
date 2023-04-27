<template>
  <Alerta v-if="!this.form">
    <div class="alert alert-danger" role="alert">
      Informe ao menos o título da vaga e o tipo de contratação*
    </div>
  </Alerta>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <h4>Cadastre uma vaga gratuitamente!</h4>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Título da vaga</label>
        <input type="text" class="form-control" v-model="titulo" />
        <div class="form-text">Exemplo: Programador Front-end</div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Descrição</label>
        <textarea
          type="text"
          class="form-control"
          v-model="descricao"
        ></textarea>
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
          <input type="text" class="form-control" v-model="salario" />
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
        <button type="submit" class="btn btn-primary" @click="salvarVaga()">
          Cadastrar
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import Alerta from "@/components/comuns/Alerta.vue";
export default {
  // eslint-disable-next-line
  name: "PublicarVaga",
  components: { Alerta },
  data() {
    return {
      id: -1,
      titulo: "",
      descricao: "",
      salario: "",
      tipo: "",
      modalidade: "",
      dataPublicacao: "",
      form: true,
    };
  },
  methods: {
    salvarVaga() {
      if (this.titulo && this.tipo != "") {
        this.id++;
        this.form = true;
        let tempoDecorrido = Date.now();
        let dataAtual = new Date(tempoDecorrido);
        let vagas = JSON.parse(localStorage.getItem("vagas"));

        if (!vagas) vagas = [];

        vagas.push({
          id: this.id,
          titulo: this.titulo,
          descricao: this.descricao,
          salario: this.salario,
          tipo: this.tipo,
          modalidade: this.modalidade,
          publicacao: dataAtual.toLocaleDateString("pt-BR"),
        });
        localStorage.setItem("vagas", JSON.stringify(vagas));
        this.emitter.emit("alerta");
      } else {
        this.form = false;
      }
      console.log(this.id);
    },
  },
  activated() {
    (this.titulo = ""),
      (this.descricao = ""),
      (this.salario = ""),
      (this.tipo = ""),
      (this.modalidade = ""),
      (this.dataPublicacao = "");
  },
};
</script>

<style scoped></style>