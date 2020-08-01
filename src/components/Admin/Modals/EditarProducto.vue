<template>
  <div
    class="modal fade"
    id="ModalEditarProducto"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Editar Producto</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="editarProducto()">
          <div class="modal-body">
            <!-- <div class="form-group"> -->
            <!-- <label for="inputAddress2">Categoría</label> -->
            <!-- <h2>{{getCategoriaProducto}}</h2> -->
            <!-- <select class="form-control">
            <option selected disabled value="Seleccione una Categoria">Seleccione la Categoría</option>
            <option>Aceites</option>
          </select>  -->
            <!-- </div> -->
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputNombreProducto">Nombre del Producto</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNombreProducto"
                  placeholder=""
                  required
                  v-model="getProducto.nombre"
                />
              </div>
              <div class="form-group col-md-3">
                <label for="inputPrecioProducto">Precio/Venta</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPrecioProducto"
                  placeholder=""
                  required
                  v-model="getProducto.precioVenta"
                />
              </div>
              <div class="form-group col-md-3">
                <label for="inputPrecio">Precio/Compra</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPrecio"
                  placeholder=""
                  required
                  v-model="getProducto.precioCompra"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputNombreMarca">Marca</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNombreMarca"
                  placeholder=""
                  required
                  v-model="getProducto.marca"
                />
              </div>
              <div class="form-group col-md-4">
                <label for="inputUnidadProducto">Unidad</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputUnidadProducto"
                  placeholder="Litro, Galón, Caja"
                  required
                  v-model="getProducto.unidadDeMedida"
                />
              </div>
              <div class="form-group col-md-2">
                <label for="inputCantidad">Cantidad</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputCantidad"
                  placeholder=""
                  required
                  v-model="getProducto.cantidadEnStock"
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Cancelar
            </button>
            <button type="submit" class="btn btn-primary">
              Editar Producto
            </button>
          </div>

          <!-- <pre>{{getCurrentProduct}}</pre> -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Swal from "sweetalert2";
import axios from "axios";
import constants from "../../../config/constants.js";
import { mapGetters } from "vuex";
export default {
  props: ["indiceCategoria"],
  data() {
    return {
      categoria: ""
    };
  },

  methods: {
    editarProducto() {
      axios
        .put(
          `${constants.URL_PRODUCTOS}/${this.indiceCategoria}`,
          this.$store.getters.getCurrentProduct,
          {
            headers: { "Content-Type": "application/json" }
          }
        )
        .then(res => {
          console.log(res.data);
          $("#ModalEditarProducto").modal("hide");

          const Toast = Swal.mixin({
            toast: true,
            position: "bottom-start",
            showConfirmButton: false,
            timer: 3000
          });

          Toast.fire({
            type: "success",
            title: "Producto Editado"
          });
        })
        .catch(err => console.log(err));
    }
  },

  computed: {
    ...mapGetters(["getCurrentProduct"]),

    // getCategoriaProducto(){
    //    return this.$store.getters.getNombreCategoria;
    // },
    getProducto() {
      console.log(this.$store.getters.getCurrentProduct);
      return this.$store.getters.getCurrentProduct;
    },
    getMarcas() {
      return this.$store.getters.getMarcas;
    }
  }
};
</script>

<style></style>
