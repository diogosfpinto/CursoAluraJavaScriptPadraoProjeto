class View {

    constructor(elemento) {
        this._elemento = elemento;
    }

    _template(){}

    update(model){
        this._elemento.innerHTML = this._template(model);
    }
}