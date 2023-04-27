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
              <input
                type="checkbox"
                class="form-check-input"
                v-model="favoritada"
              />
              <label v-if="!favoritada" class="form-check-label"
                >Favoritar</label
              >
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
        Salário: {{ getSalario }} | Modalidade: {{ getModalidade }} | Tipo:
        {{ getTipo }} | Data da publicação: {{ this.publicacao }}
      </small>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "Vaga",
  data() {
    return {
      favoritada: false,
      lista: [],
    };
  },
  methods: {
    deletarVaga() {},
  },
  props: ["titulo", "descricao", "salario", "modalidade", "tipo", "idVaga"],
  watch: {
    favoritada(valorNovo) {
      if (valorNovo) {
        this.emitter.emit("favoritarVaga", this.titulo);
      } else {
        this.emitter.emit("desfavoritarVaga", this.titulo);
      }
    },
  },
  computed: {
    getModalidade() {
      switch (this.modalidade) {
        case "1":
          return "Home Office";
        case "2":
          return "Híbrido";
        case "3":
          return "Presencial";
        default:
          return "Não informado";
      }
    },
    getTipo() {
      switch (this.tipo) {
        case "1":
          return "CLT";
        case "2":
          return "PJ";
        default:
          return "Não informado";
      }
    },
    getSalario() {
      if (this.salario === "") {
        return "Não informado";
      }
      return this.salario;
    },
  },
};
</script>