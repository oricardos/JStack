const ContactsRepository = require("../repositories/ContactsRepository");

class ContactController {
    // Listar todos os registros
    async index(request, response) {
        const { orderBy } = request.query;
        const contacts = await ContactsRepository.findAll(orderBy);

        response.json(contacts);
    }

    // obter um registro
    async show(request, response) {
        const { id } = request.params
        const contact = await ContactsRepository.findById(id)

        if (!contact) {
            return response.status(404).json({ error: 'User not found' });
        }

        response.json(contact);

    }

    // criar um novo registro
    async store(request, response) {
        const { name, email, phone, category_id } = request.body

        if (!name) {
            return response.status(400).json({ error: 'Name is required' })
        }

        // verifica se já existe um usuário com o email
        const contactExists = await ContactsRepository.findByEmail(email);
        if (contactExists) {
            return response.status(400).json({ error: 'This e-mail is already in use' })
        }

        const contact = await ContactsRepository.create({
            name, email, phone, category_id
        })

        response.json(contact)
    }

    // atualizar um registro
    async update(request, response) {
        const { id } = request.params
        const { name, email, phone, category_id } = request.body

        // VALIDAÇÕES

        // verifica se o contato existe
        const contactExists = await ContactsRepository.findById(id)
        if (!contactExists) {
            return response.status(404).json({ error: 'Contact Not Found!' })
        }

        // verifica se durante a edição, o nome foi preenchido
        if (!name) {
            return response.status(400).json({ error: 'Name is required' })
        }

        // verifica se já existe um usuário com o email
        const contactByEmail = await ContactsRepository.findByEmail(email);
        if (contactByEmail && contactByEmail.id !== id) {
            return response.status(400).json({ error: 'This e-mail is already in use' })
        }

        const contact = await ContactsRepository.update(id, {
            name, email, phone, category_id
        });

        response.json(contact)
    }

    // deletar um registro
    async delete(request, response) {
        const { id } = request.params;

        await ContactsRepository.delete(id)
        // 204: No Content
        response.sendStatus(204)

    }
}

module.exports = new ContactController();
