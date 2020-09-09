// Modelo para a classe Negociação
class Negociacao {

    constructor(data, quantidade, valor) {

        // Atributos que não podem ser modificados ou acessados por outras classes externas usa-se 
        // como convenção o underline na frente do nome atributo.

        this._data = new Date();
        this._quantidade = quantidade;
        this._valor = valor;
    }

    getVolume() {
        return this.quantidade * this.valor;
    }

    getData(){
        return this._data;
    }

    getQuantidade(){
        return this._quantidade;
    }

    getValor() {
        return this._valor;
    }
}