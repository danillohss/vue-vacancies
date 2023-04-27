<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <PesquisarVaga />
      </div>
    </div>
    <ListaVagas />
    <div class="row mt-5">
      <div class="col-4">
        <Indicador
          titulo="Vagas disponíveis"
          :indicador="indicador"
          bg="bg-dark"
          color="text-white"
        />
      </div>
      <div class="col-4">
        <Indicador
          titulo="Profissionais cadastrados"
          indicador="225"
          bg="bg-dark"
          color="text-white"
        />
      </div>
      <div class="col-4">
        <Indicador
          titulo="Visitantes online"
          :indicador="usuariosOnline"
          bg="bg-dark"
          color="text-white"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PesquisarVaga from "@/components/comuns/PesquisarVaga.vue";
import ListaVagas from "@/components/comuns/ListaVagas.vue";
import Indicador from "@/components/comuns/Indicador.vue";
export default {
  // eslint-disable-next-line
  name: "Home",
  components: { PesquisarVaga, Indicador, ListaVagas },
  created() {
    setInterval(this.getUsuariosOnline, 10000);
    setInterval(this.getIndicador, 1);
  },
  data() {
    return {
      indicador: 0,
      usuariosOnline: 26,
    };
  },
  methods: {
    getUsuariosOnline() {
      this.usuariosOnline = Math.floor(Math.random() * 101);
    },
    getIndicador() {
      JSON.parse(localStorage.getItem("vagas")) === null
        ? (this.indicador = 0)
        : (this.indicador = JSON.parse(localStorage.getItem("vagas")).length);
    },
  },
};
</script>

<style scoped></style>
