// src/data.js

const hotels = [
    {
        id: 1,
        name: "Harmony Hideaway Hotel",
        location: "Florence",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus quis felis a venenatis. Suspendisse accumsan aliquam lorem, sit amet ultricies justo tristique nec.",
        price: "100€/room",
        rating: "★★★★★",
        image: require('./Assets/cards1.jpg'),  
        favorite: true,
    },
    {
        id: 2,
        name: "Harmony Hideaway Hotel",
        location: "Madrit",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus quis felis a venenatis. Suspendisse accumsan aliquam lorem, sit amet ultricies justo tristique nec.",
        price: "70€/room",
        rating: "★★★★☆",
        image: require('./Assets/cards2.jpg'),  
        favorite: false,
    },
    {
        id: 3,
        name: "Harmony Hideaway Hotel",
        location: "Sintra",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus quis felis a venenatis. Suspendisse accumsan aliquam lorem, sit amet ultricies justo tristique nec.",
        price: "65€/room",
        rating: "★★★★☆",
        image: require('./Assets/cards3.jpg'), 
        favorite: false,
    },
    {
        id: 4,
        name: "O",
        location: "Siena",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus quis felis a venenatis. Suspendisse accumsan aliquam lorem, sit amet ultricies justo tristique nec.",
        price: "115€/room",
        rating: "★★★★★",
        image: require('./Assets/cards4.jpg'),  
        favorite: true,
    },
];

export default hotels;
