const contactRepository = require('../repositories/contactRepository');

class ContactController {
  async index(request, response) {
    // Listar todos os registros
    const contacts = await contactRepository.findAll();
    response.json(contacts);
  }

  async show(request, response) {
    // Obter um registro
    const { id } = request.params;

    const contact = await contactRepository.findById(id);
    if (!contact) {
      // 404: Not Found
      return response.status(404).json({ error: 'Contact not found' });
    }

    response.json(contact);
  }

  async store(request, response) {
    // Criar novo registro
    const {
      name, email, phone, category_id,
    } = request.body;

    const contactExists = await contactRepository.findByEmail(email);
    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }
    if (contactExists) {
      return response
        .status(400)
        .json({ error: 'This email is already in use' });
    }

    const contact = await contactRepository.create({
      name,
      email,
      phone,
      category_id,
    });

    response.json(contact);
  }

  async update(request, response) {
    // Editar um registro
    const { id } = request.params;
    const {
      name, email, phone, category_id,
    } = request.body;

    const contactExists = await contactRepository.findById(id);
    if (!contactExists) {
      return response.status(404).json({ error: 'Contact not found' });
    }
    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const contactByEmail = await contactRepository.findByEmail(email);
    if (contactByEmail && contactByEmail.id !== id) {
      return response
        .status(400)
        .json({ error: 'This email is already in use' });
    }

    const contact = await contactRepository.update(id, {
      name,
      email,
      phone,
      category_id,
    });
    response.json(contact);
  }

  async delete(request, response) {
    // Remover um registro
    const { id } = request.params;
    const contact = await contactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Contact not found' });
    }
    await contactRepository.delete(id);

    // 204: No Content
    response.sendStatus(204);
  }
}

module.exports = new ContactController();
