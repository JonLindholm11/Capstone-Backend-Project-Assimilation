import db from "../client.js";

await db.connect();
await seedProducts();
await db.end();
console.log("🌱 Products seeded.");

async function seedProducts() {
  const products = [
    {
      product_name: "Monitor",
      product_category: "electronics",
      product_description: "A high-quality monitor for test environments.",
      basic_price: 199.99,
      product_img:
        "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg",
    },
    {
      product_name: "Wireless Mouse",
      product_category: "electronics",
      product_description: "Wireless mouse with ergonomic design.",
      basic_price: 29.99,
      product_img:
        "https://images.pexels.com/photos/6214382/pexels-photo-6214382.jpeg",
    },
    {
      product_name: "Printer",
      product_category: "electronics",
      product_description: "Compact black-and-white laser printer.",
      basic_price: 149.99,
      product_img:
        "https://images.pexels.com/photos/4792283/pexels-photo-4792283.jpeg",
    },
    {
      product_name: "USB-C Hub",
      product_category: "electronics",
      product_description:
        "USB-C hub with multiple ports for device connectivity.",
      basic_price: 39.99,
      product_img:
        "https://images.pexels.com/photos/20076003/pexels-photo-20076003.jpeg",
    },
    {
      product_name: "Headset",
      product_category: "electronics",
      product_description: "Noise-canceling wireless headset.",
      basic_price: 89.99,
      product_img:
        "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg",
    },
    {
      product_name: "Webcam",
      product_category: "electronics",
      product_description: "HD webcam suitable for video conferencing.",
      basic_price: 59.99,
      product_img:
        "https://images.pexels.com/photos/10864867/pexels-photo-10864867.jpeg",
    },
    {
      product_name: "UPS Backup",
      product_category: "electronics",
      product_description: "Battery backup power supply for critical devices.",
      basic_price: 129.99,
      product_img:
        "https://m.media-amazon.com/images/I/61y3rExUuoL._AC_SX208_CB1169409_QL70_.jpg",
    },
    {
      product_name: "Docking Station",
      product_category: "electronics",
      product_description: "Docking station for laptops and monitors.",
      basic_price: 109.99,
      product_img:
        "https://m.media-amazon.com/images/I/71HWuNfplFL._AC_SX208_CB1169409_QL70_.jpg",
    },
    {
      product_name: "",
      product_category: "vehicles",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "",
      product_category: "vehicles",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "",
      product_category: "vehicles",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "",
      product_category: "vehicles",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "",
      product_category: "vehicles",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "",
      product_category: "vehicles",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "",
      product_category: "vehicles",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "",
      product_category: "medical supply's",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "",
      product_category: "medical supply's",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "",
      product_category: "medical supply's",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "",
      product_category: "medical supply's",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "",
      product_category: "medical supply's",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "",
      product_category: "medical supply's",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "",
      product_category: "medical supply's",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "",
      product_category: "medical supply's",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "",
      product_category: "construction tools",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "",
      product_category: "construction tools",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "",
      product_category: "construction tools",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "",
      product_category: "construction tools",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "",
      product_category: "construction tools",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "",
      product_category: "construction tools",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "",
      product_category: "construction tools",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "",
      product_category: "food",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "",
      product_category: "food",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "",
      product_category: "food",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "White Bread",
      product_category: "food",
      product_description: "White Bread is sold by the loaf",
      basic_price: 2.99,
      product_img:
        "https://images.pexels.com/photos/2942327/pexels-photo-2942327.jpeg",
    },
    {
      product_name: "Chicken breast",
      product_category: "food",
      product_description: "Chicken Breast is sold per pound",
      basic_price: 7.99,
      product_img:
        "https://images.pexels.com/photos/5769384/pexels-photo-5769384.jpeg",
    },
    {
      product_name: "Banana",
      product_category: "food",
      product_description: "Banana's price is determined per pound",
      basic_price: 3.99,
      product_img:
        "https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg",
    },
    {
      product_name: "Strawberry",
      product_category: "food",
      product_description: "Strawberry's price is determined per pound",
      basic_price: 4.99,
      product_img:
        "https://images.pexels.com/photos/6944172/pexels-photo-6944172.jpeg",
    },
  ];
  return products;
}
