let peoples = [{
        name: "Andi",
        gender: "male"
    },
    {
        name: "Siti",
        gender: "female"
    },
    {
        name: "Cindy",
        gender: "female"
    }
];

let female = peoples.filter(people => {
    return people.gender === "male";
});

console.log(female);