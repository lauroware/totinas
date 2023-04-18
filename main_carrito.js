const renderProductosCarrito = () => {
  const productos_carrito = cargarProductosCarrito();
  let salida = "";

  if (totalCarrito() > 0) {
    salida = `<table class="table-secomdary">
        <tbody>
        <tr>
        <td colspan="5" class="text-end"><a href="#" class="btn btn-dark" onClick="vaciarCarrito()">Vaciar Carrito <img src="" alt="" width="16" /></a><a href="https://wa.me/5491162366175" class="btn btn-dark" onClick="">Finalizar Compra <img src="" alt="" width="1" /></a></td>
        </tr>`;

    for (let producto of productos_carrito) {
      salida += `<tr>
            <td><img src="imagenes/${producto.imagen}" alt="${
        producto.nombre
      }" width="64" /></td>
            <td class="align-middle">${producto.nombre}</td>
            <td class="align-middle">${producto.cantidad} X ${
        producto.precio
      }</td>
            <td class="align-middle">U$${
              producto.cantidad * producto.precio
            }</td>
            <td class="align-middle text-end"><a href="#" title="Eliminar Producto" onClick="eliminarProducto(${
              producto.id
            });"><img src="imagenes/bote.png" alt="Eliminar Producto" width="25" /></a></td>`;
    }

    salida += `<tr>
        <td colspan="3"><b>Suma Total</b></td>
        <td><b>U$${sumaProductosCarrito()}</b></td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td colspan="3"><b>Valor aproximado en pesos argentinos</b></td>
        <td><b>$${sumaProductosCarrito() * 380}</b></td>
        <td>&nbsp;</td>
        </tr>
        </tbody>
        </table>`;
  } else {
    salida = `<div class="alert alert-secondary text-center" role="alert">No hay productos seleccionados</div>`;
  }

  document.getElementById("productos_seleccionados").innerHTML = salida;
};

renderProductosCarrito();
renderBotonCarrito();
