const ContactsRepository = require("../repositories/ContactsRepository");

class ContactController {
    async index(request, response) {
        // Listar todos os registros
        const contacts = await ContactsRepository.findAll();

        response.json(contacts);
    }

    async show(request, response) {
        // obter um registro
        const { id } = request.params
        const contact = await ContactsRepository.findById(id)

        if (!contact) {
            return response.status(404).json({ error: 'User not found' });
        }

        response.json(contact);

    }

    async store(request, response) {
        // criar um novo registro
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

    async update(request, response) {
        // atualizar um registro
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

    async delete(request, response) {
        // deletar um registro
        const { id } = request.params
        const contact = await ContactsRepository.findById(id)

        if (!contact) {
            return response.status(404).json({ error: 'User not found' });
        }

        await ContactsRepository.delete(id)
        // 204: No Content
        response.sendStatus(204)

    }
}

module.exports = new ContactController();
