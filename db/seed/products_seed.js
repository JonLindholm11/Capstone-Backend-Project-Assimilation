import db from "../client.js";

await db.connect();
await seedProducts();
await db.end();
console.log("🌱 Products seeded.");

async function seedProducts() {
  const products = [
     {
    product_name: "Bluetooth Speaker",
    product_category: "electronics",
    product_description: "Portable wireless speaker with 10-hour battery life.",
    basic_price: 29.99,
    product_img: "images/speaker.jpg"
  },
  {
    product_name: "Wireless Mouse",
    product_category: "electronics",
    product_description: "Ergonomic mouse with adjustable DPI and silent clicks.",
    basic_price: 15.49,
    product_img: "images/mouse.jpg"
  },
  {
    product_name: "Noise-Canceling Headphones",
    product_category: "electronics",
    product_description: "Over-ear headphones with active noise cancellation.",
    basic_price: 89.95,
    product_img: "images/headphones.jpg"
  },
  {
    product_name: "Smartphone Tripod",
    product_category: "electronics",
    product_description: "Adjustable tripod stand for smartphones with Bluetooth remote.",
    basic_price: 19.99,
    product_img: "images/tripod.jpg"
  },
  {
    product_name: "USB-C Charger",
    product_category: "electronics",
    product_description: "Fast-charging USB-C wall charger with 20W output.",
    basic_price: 12.99,
    product_img: "images/charger.jpg"
  },
  {
    product_name: "Smartwatch",
    product_category: "electronics",
    product_description: "Waterproof smartwatch with heart rate and sleep tracking.",
    basic_price: 59.95,
    product_img: "images/smartwatch.jpg"
  },
  {
    product_name: "LED Monitor",
    product_category: "electronics",
    product_description: "24-inch Full HD monitor with HDMI and VGA ports.",
    basic_price: 129.99,
    product_img: "images/monitor.jpg"
  },
  {
    product_name: "Portable SSD",
    product_category: "electronics",
    product_description: "500GB external SSD with USB 3.1 interface.",
    basic_price: 74.99,
    product_img: "images/ssd.jpg"
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