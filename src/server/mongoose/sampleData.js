import db from './index';

function sampleData() {
    const Product = db.model('Product');

    Product.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const productList = [];

    for (let i = 1; i <= 50; i++) {
      productList.push(new Product({
        sku: `SP000${i}`,
        name: `Nike blue shoes-${i}`,
        categoryId: `CAT000${i}`,
        groupId: `GR000${i}`,
        colorId: `CL000${i}`,
        images: ['/images/shoes1.png', '/images/shoes2.png', '/images/shoes3.png', '/images/shoes4.png'],
        price: Math.floor(Math.random() * (10000000 - 10000 + 1) + 10000),
        description: 'Nice shoe to choose',
        userAdded: 'Stephen Cheng',
      }));
    }

    Product.create(productList, (error) => {
      if (error) {
        console.log(error);
      }
    });
  });

    const Color = db.model('Color');

    Color.count().exec((err, count) => {
        if (count > 0) {
            return;
        }

        const colorList = [
            {
                id: 'Color0001',
                name: 'red',
                hex: '#FF0000',
                userAdded: 'Stephen Cheng'
            },
            {
                id: 'Color0002',
                name: 'blue',
                hex: '#0000FF',
                userAdded: 'Stephen Cheng'
            },
            {
                id: 'Color0003',
                name: 'green',
                hex: '#008000',
                userAdded: 'Stephen Cheng'
            }
        ];


        Color.create(colorList, (error) => {
            if (error) {
                console.log(error);
            }
        });
    });
}

export default sampleData;
