const mockData = [
    {
        name: "Navya",
        age: 21,
    },
    {
        name: "Radha",
        age: 25,
    },
    {
        name: "Yamini",
        age: 22,
    }
];

const getAll = () => {
    return mockData;
};

const addListing = (name, age) => {
    const listing = {
        name,
        age,
    };
    return listing;
};

export default {
    getAll,
    addListing,
};