let products = [{
        name: "Apple",
        type: "fruit"
    },
    {
        name: "Monitor",
        type: "computer"
    },
    {
        name: "Manggo",
        type: "fruit"
    },
    {
        name: "Table",
        type: "furniture"
    }
];

console.log(
    products.every(product => product === "fruit")
);