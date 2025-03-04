class ContactController {
    index(request, response) {
        // Listar todos os registros
        response.send("Send from Contact Controler");
    }

    show() {
        // obter um registro
    }

    store() {
        // criar um novo registro
    }

    update() {
        // atualizar um registro
    }

    delete() {
        // deletar um registro
    }
}

module.exports = new ContactController();
