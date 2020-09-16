class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {

        // Programação defensiva 
        // cria uma cópia da lista e não na lista original de constructor;
        return [].concat(this._negociacoes);
    }
}