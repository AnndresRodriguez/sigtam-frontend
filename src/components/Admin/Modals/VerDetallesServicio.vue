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
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
