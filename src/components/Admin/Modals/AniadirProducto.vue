<template>
  <div>
    <div
      class="modal fade"
      id="ModalAniadirProducto"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Nuevo Producto</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="crearProducto()">
            <div class="modal-body">
              <div class="form-group">
                <label for="inputAddress2">Seleccione una Categoría</label>
                <select
                  class="form-control"
                  @change="loadProducts(categoria)"
                  v-model="categoria"
                >
                  <option selected disabled value="Seleccione una Categoria"
                    >Seleccione la Categoría</option
                  >
                  <option
                    v-for="marca in getMarcas"
                    :key="marca.nombre"
                    :value="marca.id"
                    >{{ marca.nombre }}</option
                  >
                </select>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputNombreProducto">Nombre del Producto</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputNombreProducto"
                    placeholder=""
                    v-model="nombreProducto"
                    required
                  />
                </div>
                <div class="form-group col-md-3">
                  <label for="inputPrecioProducto">Precio/Venta</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPrecioProducto"
                    placeholder=""
                    v-model="precioVenta"
                    required
                  />
                </div>
                <div class="form-group col-md-3">
                  <label for="inputPrecio">Precio/Compra</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPrecio"
                    placeholder=""
                    v-model="precioCompra"
                    required
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
                    v-model="marca"
                    required
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="inputUnidadProducto">Unidad</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputUnidadProducto"
                    placeholder="Litro, Galón, Caja"
                    v-model="unidad"
                    required
                  />
                </div>
                <div class="form-group col-md-2">
                  <label for="inputCantidad">Cantidad</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputCantidad"
                    placeholder=""
                    v-model="cantidad"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <small>{{ sizeArray + 1 }}</small>
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="submit" class="btn btn-primary">
                Crear Producto
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Swal from "sweetalert2";
export default {
  props: ["sizeArray"],

  mounted() {
    this.$store.dispatch("getAllCategoriesProducts");
  },

  data() {
    return {
      id: "",
      categoria: "",
      nombreProducto: "",
      precioVenta: 0,
      precioCompra: 0,
      unidad: "",
      cantidad: 0,
      marca: ""
    };
  },

  methods: {
    loadProducts(product) {
      this.id = product;
      console.log("id producto: ", product);
      this.$store.dispatch("getCantProducts", { idCategory: this.id });
    },

    getCantidad() {
      return this.$store.state.cantProducts;
    },
    crearProducto() {
      console.log("sizeArray", this.sizeArray + 1);
      let product = {
        id: this.id,
        product: [
          {
            id: this.sizeArray + 1,
            nombre: this.nombreProducto,
            marca: this.marca,
            unidadDeMedida: this.unidad,
            cantidadEnStock: this.cantidad,
            precioCompra: this.precioCompra,
            precioVenta: this.precioVenta
          }
        ]
      };

      this.$store.dispatch("addProductsToCategory", {
        id: this.id,
        productToAdd: JSON.stringify(product)
      });

      $("#ModalAniadirProducto").modal("hide");

      const Toast = Swal.mixin({
        toast: true,
        position: "bottom-start",
        showConfirmButton: false,
        timer: 3000
      });

      Toast.fire({
        type: "success",
        title: "Producto Agregado"
      });
    }
  },
  computed: {
    getMarcas() {
      return this.$store.getters.getMarcas;
    }
  }
};
</script>

<style></style>
