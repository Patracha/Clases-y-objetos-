/* Definir Clase cliente */
export default class Client {
    constructor(name) {
        this._name = name;
        this._impuesto = {} ;
        
    }

    get name() {
        return this._name;
    }

    get impuesto() {
        return this._impuesto;
    }

   

    set name(name) {
        this._name = name;
    }

    set impuesto(impuesto) {
        this._impuesto = impuesto;
    }

    
    calcularImpuesto() {
        const montoBrutoAnual = this._impuesto.montoBrutoAnual;
        const deducciones = this._impuesto.deducciones;
        return (montoBrutoAnual - deducciones) * 0.21;
    }

}
