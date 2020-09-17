class MensagemView extends View {

    template(model) {

        return `
            <p class="alert alert-info">${model.texto}</p>
        `;
    }

    update(model){
        this._elemento.innerHTML = this.template(model);
        model ? setTimeout(() => this._elemento.innerHTML = `<p></p>`,3000):null;
    }
}