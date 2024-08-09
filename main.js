import Client from './cliente.js';
import Impuestos from './impuestos.js';


const impuestosArray = [
    new Impuestos(2500000, 300000),
    new Impuestos(1800000, 250000),
    new Impuestos(3200000, 400000),
    new Impuestos(1500000, 200000),
    new Impuestos(1200000, 150000),
    new Impuestos(2200000, 270000),
    new Impuestos(2900000, 350000),
    new Impuestos(3400000, 420000),
    new Impuestos(2000000, 220000),
    new Impuestos(1700000, 180000)
];


const clientesArray = [
    new Client('Tech Innovators Inc.'),
    new Client('Green Energy Solutions'),
    new Client('Health Care Systems Ltd.', ),
    new Client('Urban Development Corp.'),
    new Client('Digital Marketing Pros'),
    new Client('Food & Beverage Holdings'),
    new Client('Financial Services Group'),
    new Client('Construction & Engineering Ltd.'),
    new Client('Retail Ventures Inc.'),
    new Client('Logistics & Transportation Co.')
];

clientesArray.forEach((cliente, nro) =>{
    cliente.impuesto = impuestosArray[nro];
} )



// Mostrar resultados
let resultado = '';
clientesArray.forEach(cliente => {
    resultado += `${cliente.name} tiene un monto bruto anual de $${cliente.impuesto.montoBrutoAnual} y deducciones de $${cliente.impuesto.deducciones}. con un impuesto total de ${cliente.calcularImpuesto(cliente)} <hr>`;
});

// Insertar los resultados en el DOM
let casilla = document.getElementById("casilla");

casilla.innerHTML = resultado;
