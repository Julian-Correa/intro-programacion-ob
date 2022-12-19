//ejercicio 1
var numeroIf = 0;

function comparar() {
  if (numeroIf > 0) {
    console.log("El número es positivo.");
  } else if (numeroIf < 0) {
    console.log("El número es negativo.");
  } else {
    console.log("El número es 0.");
  }
}

comparar();

// ejercicio 2
var numeroWhile = 0;

function bucle() {
  do {
    numeroWhile++;
    console.log(numeroWhile);
  } while (numeroWhile < 3);
}

bucle();

//ejercicio 3

var numeroFor = 0;

for (var numeroFor = 0; numeroFor <= 3; numeroFor++) console.log(numeroFor);

//ejercicio 3

var estacion = "verano";

switch (estacion) {
  case "invierno":
    console.log("es invierno.");
    break;

  case "verano":
    console.log("es verano.");
    break;

  case "primavera":
    console.log(" es primavera.");
    break;

  case "otoño":
    console.log(" es otoño.");
    break;

  default:
    console.log("estacion no definida.");
}
