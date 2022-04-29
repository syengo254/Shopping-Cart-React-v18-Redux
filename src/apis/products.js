export function getProducts(){
    const products = [
        {
            id: 1,
            category: 2,
            subcategory: 202,
            rating: 4,
            name: "geisha herbal",
            meta: "100g",
            price: 50,
            photo: "http://localhost/e-budget.com/images/products/geisha_new.jpg",
            store_details: {
                id: 1,
                photo: "uchumi.png",
                name: "Uchumi Supermarkets"
            },
            stock: 9,
        },
        {
            id: 2,
            category: 2,
            subcategory: 201,
            rating: 5,
            name: "colgate toothpaste herbal",
            meta: "300ml",
            price: 99,
            photo: "http://localhost/e-budget.com/images/products/colgate-herbal.jpg",
            store_details: {
                id: 1,
                photo: "uchumi.png",
                name: "Uchumi Supermarkets"
            },
            stock: 100,
        },
        {
            id: 3,
            category: 1,
            subcategory: 101,
            rating: 1,
            name: "SONY DIGITAL CAMERA ZY90i",
            meta: "",
            price: 18400,
            photo: "http://localhost/e-budget.com/images/products/SAMSUNG CAM.png",
            store_details: {
                id: 2,
                photo: "Tuskys_logo.png",
                name: "Tuskys"
            },
            stock: 8,
        },
        {
            id: 4,
            category: 1,
            subcategory: 102,
            rating: 4,
            name: "Sony Television LCD",
            meta: "42 Inch",
            price: 50000,
            photo: "http://localhost/e-budget.com/images/products/Sony%20Television%20LCD.png",
            store_details: {
                id: 3,
                photo: "shoprite.png",
                name: "Shoprite"
            },
            stock: 2,
        },
        {
            id: 5,
            category: 3,
            subcategory: 301,
            rating: 4,
            name: "soko maize meal",
            meta: "2Kg",
            price: 130,
            photo: "http://localhost/e-budget.com/images/products/soko.png",
            store_details: {
                id: 1,
                photo: "uchumi.png",
                name: "Uchumi Supermarkets"
            },
            stock: 0,
        },
        {
            id: 6,
            category: 1,
            subcategory: 103,
            rating: 3,
            name: "Von Sub-Woofer",
            meta: "2.1 Channel 1000W",
            price: 8400,
            photo: "http://localhost/e-budget.com/images/products/Von%20Sub-Woofer%202.1.png",
            store_details: {
                id: 2,
                photo: "Tuskys_logo.png",
                name: "Tuskys",
            },
            stock: 10,
        },
    ];

    return new Promise( resolve => {
        return setTimeout(() => resolve({data: products}), 1000)
    });
}