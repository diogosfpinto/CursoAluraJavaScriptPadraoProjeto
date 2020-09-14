// Modelo para a classe Negociação
class Negociacao {

    constructor(data, quantidade, valor) {

        // Atributos que não podem ser modificados ou acessados por outras classes externas usa-se 
        // como convenção o underline na frente do nome atributo.

        this._data = new Date();
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data(){
        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}