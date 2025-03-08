const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
    // Lista todos os registros
    async index(request, response) {
        const categories = await CategoriesRepository.findAll();
        response.json(categories);
    }

    // Obter um registro
    async show(request, response) {
        const { id } = request.params;
        const category = await CategoriesRepository.findById(id);

        if (!category) {
            return response.statur(404).json({ error: 'Category not found' });
        }

        response.json(category);
    }

    // Cria um novo registro
    async store(request, response) {
        const { name } = request.body;

        if (!name) {
            return response.status(400).json({ error: 'Name is required' });
        }

        const category = await CategoriesRepository.create({ name });

        response.json(category);
    }

    // atualiza um registro
    async update(request, response) {
        const { id } = request.params;
        const { name } = request.body;

        //verifica se a categoria existe
        const categoryExists = await CategoriesRepository.findById(id);
        if (!categoryExists) {
            return response.status(404).json({ error: 'Category not found!' });
        }

        if (!name) {
            return response.status(404).json({ error: 'Name is required' });
        }

        //verifica se já existe uma categoria com o nome
        if (categoryExists) {
            return response
                .status(400)
                .json({ error: 'This category name is already in use' });
        }

        const category = await CategoriesRepository.update(id, { name });

        response.json(category);
    }

    // delete um registro
    async delete(request, response) {
        const { id } = request.params;

        await CategoriesRepository.delete(id);
        response.sendStatus(204);
    }
}

module.exports = new CategoryController();
