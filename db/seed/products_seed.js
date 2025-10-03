import db from "../client.js";

await db.connect();
await seedProducts();
await db.end();
console.log("🌱 Products seeded.");

async function seedProducts() {
  const products = [
    {
      product_name: "",
      product_category: "",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "",
      product_category: "electronics",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "",
      product_category: "electronics",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "",
      product_category: "electronics",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "",
      product_category: "electronics",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "",
      product_category: "electronics",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "",
      product_category: "electronics",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "",
      product_category: "electronics",
      product_description: "",
      basic_price: 1.11,
      product_img: "",
    },
    {
      product_name: "Gwagen 63",
      product_category: "vehicles",
      product_description: "Geländewagen is a luxury SUV made by Mercedes-Benz",
      basic_price: 199,999,
      product_img: "https://images.pexels.com/photos/3457780/pexels-photo-3457780.jpeg",
    },
    {
      product_name: "Toyota Land Cruiser",
      product_category: "vehicles",
      product_description: "Durable, and highly capable four-wheel-drive SUV",
      basic_price: 87,745,
      product_img: "https://images.pexels.com/photos/3879065/pexels-photo-3879065.jpeg",
    },
    {
      product_name: "lamborghini murcielago",
      product_category: "vehicles",
      product_description: "Aggressive-looking, two-seater V12 supercar",
      basic_price: 300,000,
      product_img: "https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg",
    },
    {
      product_name: "Porsche 911",
      product_category: "vehicles",
      product_description: "Iconic sports car known for its performance and design",
      basic_price: 251,000,
      product_img: "https://images.pexels.com/photos/1972736/pexels-photo-1972736.jpeg",
    },
    {
      product_name: "Jeep Wrangler",
      product_category: "vehicles",
      product_description: "Iconic off-road vehicle with rugged design",
      basic_price: 102,000,
      product_img: "https://images.pexels.com/photos/2882234/pexels-photo-2882234.jpeg",
    },
    {
      product_name: "Audi R8",
      product_category: "vehicles",
      product_description: "High-performance sports car with a powerful V10 engine",
      basic_price: 161,395,
      product_img: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg",
    },
    {
      product_name: "Ford Mustang",
      product_category: "vehicles",
      product_description: "Classic American muscle car with a powerful engine",
      basic_price: 43,000,
      product_img: "https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg",
    },
    {
      product_name: "button",
      product_category: "sewing notions",
      product_description:
        "Assorted plastic sewing button, 4-hole style, smooth finish (~1.5 cm).",
      basic_price: 0.49,
      product_img:
        "https://images.pexels.com/photos/39548/sewing-needle-thread-mend-eye-of-needle-39548.jpeg",
    },
    {
      product_name: "cotton thread",
      product_category: "sewing notions",
      product_description:
        "100% cotton all-purpose sewing thread, low-lint, ideal for quilting and seams (200 yd).",
      basic_price: 2.99,
      product_img:
        "https://images.pexels.com/photos/1212179/pexels-photo-1212179.jpeg",
    },
    {
      product_name: "measuring tape",
      product_category: "sewing notions",
      product_description:
        "Soft 60 in / 150 cm tape with dual-side markings for accurate garment measuring.",
      basic_price: 3.49,
      product_img:
        "https://images.pexels.com/photos/3143085/pexels-photo-3143085.jpeg",
    },
    {
      product_name: "pin (100 ct)",
      product_category: "sewing notions",
      product_description:
        "Nickel-plated dressmaker pins, 1.5 in length, smooth shank for minimal fabric snag.",
      basic_price: 3.99,
      product_img:
        "https://images.pexels.com/photos/805920/pexels-photo-805920.jpeg",
    },
    {
      product_name: "rotary cutter",
      product_category: "sewing notions",
      product_description:
        "45 mm rotary cutter with safety lock and ergonomic grip for precise fabric cuts.",
      basic_price: 13.99,
      product_img:
        "https://images.pexels.com/photos/1409217/pexels-photo-1409217.jpeg",
    },
    {
      product_name: "sewing machine",
      product_category: "sewing notions",
      product_description:
        "Portable electric sewing machine with basic stitches, free arm, and drop-in bobbin.",
      basic_price: 99.99,
      product_img:
        "https://images.pexels.com/photos/2249290/pexels-photo-2249290.jpeg",
    },
    {
      product_name: "scissors",
      product_category: "sewing notions",
      product_description:
        "8 in dressmaker shears, stainless steel blades with comfortable offset handles.",
      basic_price: 8.49,
      product_img:
        "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg",
    },
    {
      product_name: "sewing kit",
      product_category: "sewing notions",
      product_description:
        "Compact kit with needles, mini scissors, thread cards, pins, thimble, and tape measure.",
      basic_price: 11.49,
      product_img:
        "https://images.pexels.com/photos/461035/pexels-photo-461035.jpeg",
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
