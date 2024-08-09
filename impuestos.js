/* Definir Clase impuesto */
export default class Impuestos{
    constructor(montoBrutoAnual, deducciones){
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones; 
    }

    get montoBrutoAnual() {
        return this._montoBrutoAnual; 
    }
    set montoBrutoAnual(monto){
        this._montoBrutoAnual = monto; 
    }
    get deducciones(){
        return this._deducciones; 
    }
    set deducciones(deducciones){
        this._deducciones = deducciones; 
    }
}
