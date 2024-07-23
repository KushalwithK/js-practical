let laptops = [
  {
    brandName: "Asus",
    model: "F15",
    launch: "2018",
    price: 62000,
    getPrice: function () {
      return this.price;
    },
  },
  {
    brandName: "Apple",
    model: "Macbook Pro M2",
    launch: "2024",
    price: 150000,
    getPrice: function () {
      return this.price;
    },
  },
];

const modifiedLaptops = laptops.map((laptop) => {
  // {
  //     brandName: "Apple",
  //     model: "Macbook Pro M2",
  //     launch: "2024",
  //     price: 150000,
  //     getPrice: function () {
  //       return this.price;
  //     },
  //   },

  return {
    fullName: laptop.brandName + " - " + laptop.model,
    ...laptop,
  };
});

console.log(modifiedLaptops);

// laptops = [...laptops, ...secondLaptops];

// console.log(laptops);

// const changedArray = laptops.map((laptop, index) => {
//   return {
//     brandName: laptop.brandName.toUpperCase(),
//     model: laptop.model,
//   };
// });

// console.log(changedArray);

// const filteredLaptops = laptops.filter((laptop) => laptop.price > 50000);
// console.log(filteredLaptops);
