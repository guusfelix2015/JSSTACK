const { v4 } = require('uuid');

const db = require('../../database');

const contacts = [
  {
    id: v4(),
    name: 'Gustavo',
    email: 'gus@gmail.com',
    phone: '999999999',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Pedro',
    email: 'pedro@gmail.com',
    phone: '999999999',
    category_id: v4(),
  },
];

class ContactRepository {
  async findAll(orderBy = '') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(
      `SELECT * FROM contacts ORDER BY name ${direction}`,
    );
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM contacts WHERE id = $1', [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM contacts WHERE email = $1', [
      email,
    ]);
    return row;
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      const contact = contacts.filter((contactId) => contactId.id !== id);
      resolve(contact);
    });
  }

  async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(
      `
    INSERT INTO contacts(name, email, phone, category_id)
    VALUES($1, $2, $3, $4)
    RETURNING *
 `,
      [name, email, phone, category_id],
    );
    return row;
  }

  update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve, reject) => {
      const updatedContent = {
        id,
        name,
        email,
        phone,
        category_id,
      };
      const contactUpdate = contacts.map((contact) => {
        if (contact.id === id) {
          return updatedContent;
        }
        return contact;
      });
      resolve(contactUpdate);
    });
  }
}

module.exports = new ContactRepository();
