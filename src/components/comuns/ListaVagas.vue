<template>
  <div v-for="vaga in vagas" :key="vaga.id" class="row mt-5">
    <div class="col">
      <Vaga v-bind="vaga" />
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button
          class="btn btn-danger btn-sm"
          @click="(this.confirmarExclusao = true), deleteVaga(vaga.id)"
        >
          Deletar vaga
        </button>
      </div>
      <!-- <div
      type="button"
      class="btn btn-danger btn-sm"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Deseja realmente excluir a vaga selecionada ?
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
                @click="(this.confirmarExclusao = true), deleteVaga(vaga.id)"
              >
                Excluir id: {{ vaga.id }}
              </button>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import Vaga from "@/components/comuns/Vaga.vue";

export default {
  name: "ListaVagas",
  components: { Vaga },
  data() {
    return {
      vagas: [],
      confirmarExclusao: false,
      idVaga: null,
    };
  },
  methods: {
    deleteVaga(id) {
      if (this.confirmarExclusao === true) {
        let filtro = this.vagas.filter((item) => {
          return item.id !== id;
        });
        this.confirmarExclusao = false;
        console.log("IF");
        return (this.vagas = filtro);
      }
      console.log("else");
    },
  },
  activated() {
    this.vagas = JSON.parse(localStorage.getItem("vagas"));
  },
  mounted() {
    this.emitter.on("filtrarVagas", (vaga) => {
      const vagas = JSON.parse(localStorage.getItem("vagas"));
      this.vagas = vagas.filter((reg) =>
        reg.titulo.toLowerCase().includes(vaga.titulo.toLowerCase())
      );
    });
  },
  watch: {
    vagas: {
      deep: true,
      handler() {
        localStorage.setItem("vagas", JSON.stringify(this.vagas));
      },
    },
  },
};
</script>