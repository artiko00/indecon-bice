<template>
  <div class="row">
    <div class="col">
      <div class="row">
        <div class="col text-center" id="header">
          <h1>
            Indicadores de <a href="https://www.indecon.online/last">Indecon</a>
          </h1>
        </div>
      </div>
      <div class="row d-flex">
        <div class="col-md-2 col-sm-12 text-center" id="perfil">
          <div id="fechaActual">
            <h3>Fecha Actual</h3>
            <h4>
              <em>{{ Date() }}</em>
            </h4>
          </div>
        </div>
        <div class="col-md-10 col-sm-12" id="indicadores">
          <div class="card-columns">
            <div class="card" v-for="item in indicadoresList" :key="item.key">
              <div class="card-header">
                <div class="text-center">
                  <strong>{{ item.key }}</strong>
                </div>
              </div>
              <div class="card-body">
                <p>{{ item.name }}</p>
                <p>valor: {{ item.value }}</p>
                <p>Unidad de cobro: {{ item.unit }}</p>
              </div>
              <div class="card-footer">
                <div class="text-center">
                  <em
                    >ultima actualización: <br />{{
                      new Date(item.date * 1000)
                    }}</em
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  props: ["indecon"],
  data() {
    return {
      time: new Date(0)
    };
  },
  computed: {
    indicadoresList() {
      const indicadores = Object.values(this.indecon);
      return indicadores;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#perfil {
  background-color: #0e0c28;
  color: white;
}
#indicadores {
  background-color: #efeff6;
}
#header {
  background-color: #dbdeff;
}
</style>
