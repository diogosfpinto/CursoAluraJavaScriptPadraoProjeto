class MensagemView {

    construtor(elemento) {
        this._elemento = elemento;
    }

    _template(model) {

        return `
            <p class="alert alert-info">${model.texto}</p>
        `;
    }

    update(model){

        console.log(this._template(model));
        
        this._elemento.innerHTML = this._template(model);
        console.log(this._elemento);
    }
}