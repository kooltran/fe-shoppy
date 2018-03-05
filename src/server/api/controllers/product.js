import moment from 'moment';
import ColorModel from '../models/color';
import ProductModel from '../models/product';

export function getProducts(req, res) {
    ProductModel.find().sort('-dateAdded')
        .exec((err, products) => {
            if (err) {
                res.status(500).send(err);
            } else if (!products) {
                res.status(204).end();
            }
            const productList = JSON.parse(JSON.stringify(products));

            ColorModel.find({}, 'name hex')
                .exec((err, colors) => {
                    productList.map((item) => {
                        item.dateAdded = moment(item.dateAdded).format('DD/MM/YYYY');
                        item.dateEdited = moment(item.dateEdited).format('DD/MM/YYYY');
                        item.colors = colors;
                    });
                    res.status(200).send({ products: productList });
                });
        });
}
