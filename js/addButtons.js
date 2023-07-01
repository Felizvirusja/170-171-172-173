AFRAME.registerComponent("createbuttons", {
  init: function() {
    // 1. Crear el botón de pedido
    var button1 = document.createElement("button");
    button1.innerHTML = "ORDENAR AHORA";
    button1.setAttribute("id", "order-button");
    button1.setAttribute("class", "btn btn-danger ml-3 mr-3");

    // 2. Crear el botón de cuenta
    var button2 = document.createElement("button");
    button2.innerHTML = "RESUMEN DEL PEDIDO";
    button2.setAttribute("id", "order-summary-button");
    button2.setAttribute("class", "btn btn-danger ml-3");

    // 1. Crear el botón de calificación
    var button3 = document.createElement("button");
    button3.innerHTML = "CALIFICAR AHORA";
    button3.setAttribute("id", "rating-button");
    button3.setAttribute("class", "btn btn-danger ml-3 mr-3");

    // 3. Agregar a algún lugar
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.appendChild(button3);
    buttonDiv.appendChild(button2);
    buttonDiv.appendChild(button1);
  }
});
