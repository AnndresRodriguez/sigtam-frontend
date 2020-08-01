<template>
  <div>
    <div class="container-scroller">
      <div
        class="container-fluid page-body-wrapper full-page-wrapper auth-page"
      >
        <div
          class="content-wrapper d-flex align-items-center auth auth-bg-3 theme-one"
        >
          <div class="row w-100">
            <div class="col-lg-4 mx-auto">
              <div class="auto-form-wrapper">
                <div class="form-group mb-4" style="text-align: center">
                  <h2>Sección de Citas de SIGTAM</h2>
                  <h4>ingresa los datos a Continuación</h4>
                </div>
                <form>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label for="inputPassword4">Nombres y Apellidos</label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputPassword4"
                        placeholder
                        v-model="nombresApellidos"
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputAddress">Celular</label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputAddress"
                        placeholder="3112223333"
                        v-model="celular"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Correo Electrónico</label>
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail4"
                        placeholder="micorreo@micorreo.com"
                        v-model="correo"
                      />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label for="inputState">Seleccione el Servicio</label>
                      <select
                        class="form-control"
                        @change="getService(servicio)"
                        v-model="servicio"
                      >
                        <option value selected="selected" disabled="disabled"
                          >Seleccione un tipo</option
                        >
                        <option value="Reparación">Reparación</option>
                        <option value="Mantenimiento">Mantenimiento</option>
                        <option value="Revisión Preventiva"
                          >Revisión Preventiva</option
                        >
                        <option value="Revisión Tecnico Mecánica"
                          >Revisión Tecnico Mecánica</option
                        >
                        <option value="Alineación y Balanceo"
                          >Alineación y Balanceo</option
                        >
                        <option value="Cambio de Aceite"
                          >Cambio de Aceite</option
                        >
                        <option value="Servicio de Scanner"
                          >Servicio de Scanner</option
                        >
                        <option value="Sincronización Eléctrica"
                          >Sincronización Eléctrica</option
                        >
                        <option value="Sincronización Full Inyeccion"
                          >Sincronización Full Inyeccion</option
                        >
                        <option value="Calibración de Gases">
                          Calibración de Gases
                        </option>
                        <option value="Bajada de Caja">Bajada de Caja</option>
                        <option value="Bajada de Tanque"
                          >Bajada de Tanque</option
                        >
                        <option value="Cambio de Pastillas de Frenos"
                          >Cambio de Pastillas de Frenos</option
                        >
                        <option value="Codificación de llave"
                          >Codificación de llave</option
                        >
                      </select>
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="exampleFormControlTextarea1"
                      >Motivo de la cita</label
                    >
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="5"
                      v-model="motivo"
                    ></textarea>
                  </div>

                  <button type="submit" class="btn btn-primary">
                    Crear Cita
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
// import util from "../util/utilities.js";
// import Constants from "../config/constants.js";

export default {
  data() {
    return {
      nombresApellidos: "",
      celular: "",
      correo: "",
      motivo: "",
      servicio: ""
    };
  },

  methods: {
    getService(service) {
      console.log(service);
    },
    aniadirServicio() {
      firebase
        .database()
        .ref("citas/")
        .push({
          nombre: this.nombresApellidos,
          correo: this.correo,
          celular: this.celular,
          servicio: this.servicio,
          motivo: this.motivo
        });
    }
  }
};
</script>

<style>
.container-img-login {
  padding: 10px;
}

.container-img-login:hover {
  box-shadow: 1px 3px 4px grey;
}
</style>
