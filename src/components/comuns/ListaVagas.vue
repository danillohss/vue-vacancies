<template>
  <div v-for="vaga in vagas" :key="vaga.id" class="row mt-5">
    <div class="col">
      <Vaga v-bind="vaga" />
      <div class="d-grid gap-2 d-md-flex justify-content-md-top">
        <button
          class="btn btn-danger btn-sm"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          @click="deleteVaga(vaga.id, vaga.titulo)"
        >
          Deletar vaga
        </button>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Deseja excluir?
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                Confirme a exclusão da vaga
                <strong>
                  {{ tituloVaga }}
                </strong>
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
                  data-bs-dismiss="modal"
                  type="button"
                  class="btn btn-primary"
                  @click="modalButton()"
                >
                  Excluir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      tituloVaga: "",
    };
  },
  methods: {
    deleteVaga(id, titulo) {
      this.idVaga = id;
      this.tituloVaga = titulo;
      if (this.confirmarExclusao === true) {
        let filtro = this.vagas.filter((item) => {
          return item.id !== id;
        });
        this.confirmarExclusao = false;
        return (this.vagas = filtro);
      }
    },
    modalButton() {
      this.confirmarExclusao = true;
      this.deleteVaga(this.idVaga, this.tituloVaga);
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


