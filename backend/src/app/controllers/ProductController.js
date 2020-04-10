import Product from '../models/Product';
import File from '../models/File';
import * as Yup from 'yup';

class ProductController {
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      value: Yup.string().required(),
      image_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id, title, description, value, image_id } = await Product.create(req.body);

    return res.json({
      id,
      title,
      description,
      value
    });
  }

  async index(req, res) {
    const products = await Product.findAll({
      attributes: ["title", "description", "value"],
      include: [
        {
          model: File,
          as: 'image',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(products);
  }
}

export default new ProductController();