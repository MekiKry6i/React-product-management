// Product management
// Each product has the following properties:
// Id,
// title,
// category,
// quantity,
// description,
// creationDate.

// The task is to make a simple CRUD application for product management with
// React.
// There should be pages for:
// List of products:
// - You should be able to filter by each property;
// - You should be able to delete products.
// View individual product
// Create product
// Edit product

export class ProductsService {


    static getProducts() {
        return this.ProductsList;
    }

    static getProductById = (id) => {
        this.ProductsList.find(product =>{
            return product.id === id;
        });

    }

    static deleteProduct = (id)=> {
        const productIndex = this.Products.find(product => {
            return product.id === id;
        });

        if (productIndex !== -1) {
            this.ProductsList.splice(productIndex, 1);
        }
    }

    static ProductsList : [
        {
            id: 1,
            title: 'HP Spectre x360',
            category: 'notebooks',
            quantity: 2,
            description: '8th Generation Intel® Core™ i7 processor, Intel® UHD Graphics 620, 8 GB memory; 512 GB SSD storage; 32 GB Intel® Optane™ Memory for storage acceleration',
            creationDate: '05-09-2019'
        },
        {
            id: 2,
            title: 'Acer Swift 5',
            category: 'notebooks',
            quantity: 4,
            description: 'Notebook 15 with 2,80 GHz quad core, 15" LCD, 8 GB DDR4 RAM, 500 GB Hard Disc, Windows 10 Pro',
            creationDate: '11-07-2019'
        },
        {
            id: 3,
            title: 'Samsung Glaxy Tab 8',
            category: 'tablets',
            quantity: 2,
            description: 'persolnal computer',
            creationDate: '12-11-2019'
        },
        {
            id: 4,
            title: 'iPhone 11 Pro',
            category: 'smartphones',
            quantity: 7,
            description: 'persolnal computer',
            creationDate: '12-11-2019'
        },
        {
            id: 5,
            title: 'Motorola G7',
            category: 'smartphone',
            quantity: 2,
            description: 'LTPS IPS LCD capacitive touchscreen, 16M colors Size 6.2 inches, 96.2 cm2 (~81.4% screen-to-body ratio), Resolution 1080 x 2270 pixels, 19:9 ratio (~405 ppi density), Protection\tCorning Gorilla Glass 3',
            creationDate: '12-11-2019'
        },
        {
            id: 6,
            title: 'Lenovo ThinkPad T490',
            category: 'notebooks',
            quantity: 5,
            description: 'Notebook with 14inch laptop',
            creationDate: '12-11-2019'
        },
        {
            id: 7,
            title: 'Huawei P30 Pro',
            category: 'smartphones',
            quantity: 7,
            description: 'persolnal computer',
            creationDate: '12-11-2019'
        },
        {
            id: 8,
            title: 'Samsung Galaxy S10',
            category: 'smartphones',
            quantity: 10,
            description: 'Dynamic AMOLED capacitive touchscreen, 16M colors, Size 6.1 inches, 93.2 cm2 (~88.3% screen-to-body ratio, Resolution 1440 x 3040 pixels, 19:9 ratio (~550 ppi density) Protection: Corning Gorilla Glass 6',
            creationDate: '12-11-2019'
        },
        {
            id: 9,
            title: 'Google Pixel 4',
            category: 'smartphones',
            quantity: 10,
            description: 'P-OLED capacitive touchscreen, 16M colors, 5.7 inches, 80.7 cm2 (~79.8% screen-to-body ratio), 1080 x 2280 pixels, 19:9 ratio (~444 ppi density), Corning Gorilla Glass 5, DCI-P3 100% HDR',
            creationDate: '12-11-2019'
        },
        {
            id: 23,
            title: 'Huawei MediaPad M6 10.8',
            category: 'tablets',
            quantity: 10,
            description: 'PS LCD capacitive touchscreen, 16M colors, Size 10.8 inches, 338.2 cm2 (~77.4% screen-to-body ratio), Resolution 2560 x 1600 pixels, 16:10 ratio (~280 ppi density)',
            creationDate: '10-09-2019',
        },
        {
            id: 31,
            title: ' Apple iPad Pro 12.9',
            category: 'tablets',
            quantity: 12,
            description: 'IPS LCD capacitive touchscreen, 16M colors, Size: 12.9 inches, 515.3 cm2 (~85.4% screen-to-body ratio), Resolution\t2048 x 2732 pixels, 4:3 ratio (~265 ppi density), Protection Scratch-resistant glass, oleophobic coating, Wide color gamut, True-tone,120 Hz',
            creationDate: '10-09-2019',
        },
    ];
}

export let ProductModel = {
    id: null,
    title: '',
    category: '',
    quantity: null,
    description: '',
    creationDate: ''
};

export const Categories = [
    'notebooks', 'smartphones', 'tablets'
];


let Products = [
    {
        id: 1,
        title: 'HP Spectre x360',
        category: 'notebooks',
        quantity: 2,
        description: '8th Generation Intel® Core™ i7 processor, Intel® UHD Graphics 620, 8 GB memory; 512 GB SSD storage; 32 GB Intel® Optane™ Memory for storage acceleration',
        creationDate: '05-09-2019'
    },
    {
        id: 2,
        title: 'Acer Swift 5',
        category: 'notebooks',
        quantity: 4,
        description: 'Notebook 15 with 2,80 GHz quad core, 15" LCD, 8 GB DDR4 RAM, 500 GB Hard Disc, Windows 10 Pro',
        creationDate: '11-07-2019'
    },
    {
        id: 3,
        title: 'Samsung Glaxy Tab 8',
        category: 'tablets',
        quantity: 2,
        description: 'persolnal computer',
        creationDate: '12-11-2019'
    },
    {
        id: 4,
        title: 'iPhone 11 Pro',
        category: 'smartphones',
        quantity: 7,
        description: 'persolnal computer',
        creationDate: '12-11-2019'
    },
    {
        id: 5,
        title: 'Motorola G7',
        category: 'smartphone',
        quantity: 2,
        description: 'LTPS IPS LCD capacitive touchscreen, 16M colors Size 6.2 inches, 96.2 cm2 (~81.4% screen-to-body ratio), Resolution 1080 x 2270 pixels, 19:9 ratio (~405 ppi density), Protection\tCorning Gorilla Glass 3',
        creationDate: '12-11-2019'
    },
    {
        id: 6,
        title: 'Lenovo ThinkPad T490',
        category: 'notebooks',
        quantity: 5,
        description: 'Notebook with 14inch laptop',
        creationDate: '12-11-2019'
    },
    {
        id: 7,
        title: 'Huawei P30 Pro',
        category: 'smartphones',
        quantity: 7,
        description: 'persolnal computer',
        creationDate: '12-11-2019'
    },
    {
        id: 8,
        title: 'Samsung Galaxy S10',
        category: 'smartphones',
        quantity: 10,
        description: 'Dynamic AMOLED capacitive touchscreen, 16M colors, Size 6.1 inches, 93.2 cm2 (~88.3% screen-to-body ratio, Resolution 1440 x 3040 pixels, 19:9 ratio (~550 ppi density) Protection: Corning Gorilla Glass 6',
        creationDate: '12-11-2019'
    },
    {
        id: 9,
        title: 'Google Pixel 4',
        category: 'smartphones',
        quantity: 10,
        description: 'P-OLED capacitive touchscreen, 16M colors, 5.7 inches, 80.7 cm2 (~79.8% screen-to-body ratio), 1080 x 2280 pixels, 19:9 ratio (~444 ppi density), Corning Gorilla Glass 5, DCI-P3 100% HDR',
        creationDate: '12-11-2019'
    },
    {
        id: 23,
        title: 'Huawei MediaPad M6 10.8',
        category: 'tablets',
        quantity: 10,
        description: 'PS LCD capacitive touchscreen, 16M colors, Size 10.8 inches, 338.2 cm2 (~77.4% screen-to-body ratio), Resolution 2560 x 1600 pixels, 16:10 ratio (~280 ppi density)',
        creationDate: '10-09-2019',
    },
    {
        id: 31,
        title: ' Apple iPad Pro 12.9',
        category: 'tablets',
        quantity: 12,
        description: 'IPS LCD capacitive touchscreen, 16M colors, Size: 12.9 inches, 515.3 cm2 (~85.4% screen-to-body ratio), Resolution\t2048 x 2732 pixels, 4:3 ratio (~265 ppi density), Protection Scratch-resistant glass, oleophobic coating, Wide color gamut, True-tone,120 Hz',
        creationDate: '10-09-2019',
    },


];



export default Products;

// { "products" : [
//     { "Name": "Cheese", "Price" : 2.50, "Location": "Refrigerated foods"},
//     { "Name": "Crisps", "Price" : 3, "Location": "the Snack isle"},
//     { "Name": "Pizza", "Price" : 4, "Location": "Refrigerated foods"},
//     { "Name": "Chocolate", "Price" : 1.50, "Location": "the Snack isle"},
//     { "Name": "Self-raising flour", "Price" : 1.50, "Location": "Home baking"},
//     { "Name": "Ground almonds", "Price" : 3, "Location": "Home baking"}
//   ]}
