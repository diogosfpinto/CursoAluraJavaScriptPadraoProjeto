// Modelo para a classe Negociação
class Negociacao {

    constructor(data, quantidade, valor) {

        // Atributos que não podem ser modificados ou acessados por outras classes externas usa-se 
        // como convenção o underline na frente do nome atributo.

        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
       
        // Congela o valor das propriedades do objeto Negociação
        Object.freeze(this);

    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data(){
        return new Date(this._data.getTime());
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}