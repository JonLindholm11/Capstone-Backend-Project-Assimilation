import { createProducts } from "#db/queries/products";

export async function seedProducts() {
  const products = [
    {
      product_name: "Camera",
      product_category: "electronics",
      product_description:
        "Capture life's moments in sharp detail with this professional-grade DSLR camera featuring multi-focal lenses and rapid burst mode — because the perfect shot waits for no one. With a 24-megapixel sensor, advanced autofocus system, and 4K video recording capabilities, this camera delivers stunning image quality in any lighting condition. The intuitive touchscreen interface makes it easy for beginners while offering the manual controls professionals demand. Whether you're shooting fast-action sports, breathtaking landscapes, or precious family moments, this camera ensures you'll never miss the shot.",
      basic_price: 899.99,
      product_img:
        "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg",
    },
    {
      product_name: "Headphones",
      product_category: "electronics",
      product_description:
        "Noise-canceling over-ear headphones with crisp highs and deep bass — perfect for tuning out the world or pretending you can't hear people calling your name. Featuring adaptive noise cancellation technology that automatically adjusts to your environment, these premium headphones deliver an immersive listening experience whether you're on a noisy commute or relaxing at home. The plush memory foam ear cushions provide all-day comfort, while the 30-hour battery life ensures your music never stops. With Bluetooth 5.0 connectivity, multipoint pairing, and a foldable design for easy portability, these headphones are your perfect audio companion.",
      basic_price: 149.99,
      product_img:
        "https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg",
    },
    {
      product_name: "Drone",
      product_category: "electronics",
      product_description:
        "High-performance drone with HD camera and GPS stabilization. Great for photography, exploration, or mildly concerning your neighbors. This advanced quadcopter features intelligent flight modes including follow-me, orbit, and waypoint navigation, making it easy to capture professional-quality aerial footage. The 3-axis gimbal ensures silky-smooth video even in windy conditions, while the 20-minute flight time gives you plenty of opportunity to explore. Real-time HD video transmission lets you see exactly what you're capturing, and the one-touch return-to-home function means you'll never lose your drone. Whether you're a content creator, hobbyist, or aspiring aerial photographer, this drone opens up a whole new perspective.",
      basic_price: 699.99,
      product_img:
        "https://images.pexels.com/photos/1087180/pexels-photo-1087180.jpeg",
    },
    {
      product_name: "Retro Landline Rotary Phone",
      product_category: "electronics",
      product_description:
        "Vintage rotary phone with that satisfying click-click dial — perfect for those who like their conversations slow and dramatic. This fully functional retro landline brings authentic 1960s charm to your home or office. The heavy-duty metal construction and classic bell ringer deliver that nostalgic ring tone that smartphones just can't replicate. Each rotation of the dial produces that iconic mechanical clicking sound, turning every call into a tactile experience. Compatible with modern phone lines, this conversation piece works as both a functional telephone and a statement of your refined taste. Bonus: it's impossible to accidentally butt-dial someone, and telemarketers might just hang up in confusion.",
      basic_price: 89.99,
      product_img:
        "https://images.pexels.com/photos/209695/pexels-photo-209695.jpeg",
    },
    {
      product_name: "Nintendude Swit",
      product_category: "electronics",
      product_description:
        "Play the latest and greatest hits like *Legend of Lunk* and *Mayrio Racing*. Portable, powerful, and slightly familiar. This versatile gaming console seamlessly transitions from handheld to TV mode, letting you game anywhere, anytime. The vibrant 6.2-inch touchscreen display brings games to life with crisp graphics and responsive controls. Detachable controllers offer multiple play styles—use them attached for handheld mode, share them for multiplayer fun, or dock the console for the full living room experience. With a massive library of exclusive titles, family-friendly games, and indie gems, plus online multiplayer capabilities, this console delivers endless entertainment. Battery life lasts up to 9 hours for on-the-go adventures.",
      basic_price: 349.99,
      product_img:
        "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg",
    },
    {
      product_name: "Fruit Desktop and Tablet Bundle",
      product_category: "electronics",
      product_description:
        "A sleek desktop and tablet set from your favorite fruit-branded company — because taking a bite out of an apple never hurt anyone. This premium bundle includes a stunning 24-inch all-in-one desktop with Retina display that brings your work to vibrant life, paired with a lightweight tablet perfect for creativity on the go. The desktop features a powerful processor, ample storage, and seamless integration with all your favorite apps and services. The included tablet boasts all-day battery life, supports stylus input for digital artists, and syncs effortlessly with your desktop for the ultimate ecosystem experience. Both devices feature the iconic minimalist design that looks as good as it performs. Perfect for creative professionals, students, or anyone who appreciates premium technology.",
      basic_price: 2499.99,
      product_img:
        "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg",
    },
    {
      product_name: "Retro Bulb TV",
      product_category: "electronics",
      product_description:
        "Bring the golden age of television into the modern day — now with 5% less radiation and 100% more nostalgia. This beautifully restored vintage bulb television combines classic 1950s aesthetics with modern technology. The authentic wood cabinet finish and original-style control knobs transport you back in time, while updated internals let you connect modern devices via HDMI. Watch your favorite streaming services on a screen that remembers when TV was an event, not background noise. The warm glow of the picture tube creates a viewing experience that modern flat screens simply can't match. Perfect for retro enthusiasts, collectors, or anyone who wants their entertainment with a side of mid-century charm. Makes an incredible conversation piece.",
      basic_price: 299.99,
      product_img:
        "https://images.pexels.com/photos/5721908/pexels-photo-5721908.jpeg",
    },
    {
      product_name: "Podcast Microphone",
      product_category: "electronics",
      product_description:
        "Professional condenser microphone with warm tones and crisp clarity — Nixon approved, but we promise, no tapes included. This broadcast-quality microphone captures every nuance of your voice with studio-grade fidelity, making it perfect for podcasters, streamers, voiceover artists, and musicians. The large-diaphragm condenser design delivers rich, warm tones with exceptional detail, while the cardioid polar pattern minimizes background noise and focuses on your voice. Built-in shock mount reduces vibrations and handling noise, and the sturdy metal construction ensures years of reliable performance. Compatible with all standard mic stands and audio interfaces. Whether you're recording your next hit podcast or laying down vocal tracks, this microphone ensures you'll always sound your best.",
      basic_price: 129.99,
      product_img:
        "https://images.pexels.com/photos/2041381/pexels-photo-2041381.jpeg",
    },

    {
      product_name: "Gwagen 63",
      product_category: "vehicles",
      product_description:
        "Geländewagen is a luxury SUV made by Mercedes-Benz, and this is the ultimate expression of power and prestige. The G63 combines iconic boxy styling with brutal performance, featuring a handcrafted twin-turbo V8 engine that delivers exhilarating acceleration and a commanding presence on any road. The legendary off-road capability means you can conquer any terrain, from city streets to mountain trails, while enjoying a meticulously crafted interior wrapped in premium leather and cutting-edge technology. Advanced suspension, all-wheel drive, and multiple driving modes ensure you're always in control. This isn't just transportation—it's a statement of success that turns heads wherever you go.",
      basic_price: 199999.0,
      product_img:
        "https://images.pexels.com/photos/3457780/pexels-photo-3457780.jpeg",
    },
    {
      product_name: "Toyota Land Cruiser",
      product_category: "vehicles",
      product_description:
        "Durable, and highly capable four-wheel-drive SUV built for adventures that last a lifetime. Legendary for its bulletproof reliability and go-anywhere capability, the Land Cruiser has been trusted by explorers, aid workers, and adventurers in the world's harshest environments for decades. This full-size SUV combines serious off-road prowess with surprising on-road refinement, featuring a powerful V8 engine, advanced four-wheel-drive system, and a rugged body-on-frame construction. The spacious three-row interior seats up to eight passengers in comfort, with premium materials and modern technology throughout. Whether you're crossing deserts, climbing mountain passes, or just handling the school run, the Land Cruiser delivers unmatched peace of mind.",
      basic_price: 87745.0,
      product_img:
        "https://images.pexels.com/photos/3879065/pexels-photo-3879065.jpeg",
    },
    {
      product_name: "lamborghini murcielago",
      product_category: "vehicles",
      product_description:
        "Aggressive-looking, two-seater V12 supercar that defines the word 'exotic.' The Murciélago's dramatic scissor doors and razor-sharp Italian design make an entrance impossible to ignore, while the naturally aspirated V12 engine roars to life with a soundtrack that sends shivers down your spine. This mid-engine masterpiece rockets from 0-60 mph in just over 3 seconds, delivering raw, unfiltered performance that demands respect. The fighter-jet inspired cockpit puts you at the center of the action, with every control designed for maximum engagement. All-wheel drive provides surprising stability and control, even when unleashing all 650+ horsepower. This isn't just a car—it's a work of automotive art that happens to be street legal.",
      basic_price: 300000.0,
      product_img:
        "https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg",
    },
    {
      product_name: "Porsche 911",
      product_category: "vehicles",
      product_description:
        "Iconic sports car known for its performance and design, perfected over six decades of continuous evolution. The 911 represents the pinnacle of what a sports car should be: thrilling yet usable, powerful yet refined, distinctive yet timeless. The rear-mounted flat-six engine delivers that unmistakable Porsche sound and razor-sharp throttle response, while the perfectly balanced chassis makes every corner an opportunity for driving joy. Modern iterations blend cutting-edge technology with classic 911 character—think adaptive suspension, launch control, and precision all-wheel drive. The interior wraps driver and passenger in luxury with sport seats, premium materials, and intuitive controls. Whether carving canyon roads or cruising the highway, the 911 delivers an unmatched driving experience that justifies its legendary status.",
      basic_price: 251000.0,
      product_img:
        "https://images.pexels.com/photos/1972736/pexels-photo-1972736.jpeg",
    },
    {
      product_name: "Jeep Wrangler",
      product_category: "vehicles",
      product_description:
        "Iconic off-road vehicle with rugged design and a spirit of adventure that dates back to WWII. The Wrangler is the ultimate go-anywhere SUV, featuring removable doors and roof panels that let you experience the outdoors like no other vehicle can. Solid axles front and rear, impressive ground clearance, and aggressive approach/departure angles mean no trail is too challenging. Modern Wranglers combine traditional off-road capability with contemporary comfort, offering touchscreen infotainment, heated seats, and advanced safety features. The powerful engine options and available manual transmission keep the driving experience pure and engaging. Whether you're rock crawling, beach cruising, or just want a vehicle with personality for days, the Wrangler delivers freedom in its purest form.",
      basic_price: 102000.0,
      product_img:
        "https://images.pexels.com/photos/2882234/pexels-photo-2882234.jpeg",
    },
    {
      product_name: "Audi R8",
      product_category: "vehicles",
      product_description:
        "High-performance sports car with a powerful V10 engine borrowed directly from Lamborghini, wrapped in German engineering precision. The R8 is the everyday supercar, delivering exotic performance without the exotic temperament. That naturally aspirated 5.2-liter V10 screams to an 8,700 RPM redline, producing a symphony that would make opera singers jealous. The mid-engine layout and Quattro all-wheel-drive system deliver incredible grip and balance, making the R8 surprisingly accessible even for drivers new to supercars. The virtual cockpit and premium interior rival luxury sedans, while the optional carbon fiber accents and side blades ensure you look the part. Launch control makes for blistering acceleration, yet the R8 remains docile enough for daily driving. This is the supercar you can actually live with.",
      basic_price: 161395.0,
      product_img:
        "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg",
    },
    {
      product_name: "Ford Mustang",
      product_category: "vehicles",
      product_description:
        "Classic American muscle car with a powerful engine that's been an icon of performance and style since 1964. The Mustang represents accessible horsepower and head-turning looks at a price that won't require selling a kidney. Choose from turbocharged four-cylinder efficiency, the legendary V8's tire-smoking power, or anything in between. The long hood and aggressive stance announce your arrival before the exhaust note does. Modern Mustangs pack sophisticated independent rear suspension, selectable drive modes, and performance tech that would shame supercars from a decade ago. The driver-focused cockpit features retro-inspired styling cues mixed with cutting-edge digital displays. Whether you're at Cars and Coffee or carving back roads, the Mustang delivers that pure American muscle experience that never goes out of style.",
      basic_price: 43000.0,
      product_img:
        "https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg",
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
      product_name: "Cordless Circular Saw",
      product_category: "construction tools",
      product_description: " A cordless battery powered Skill saw",
      basic_price: 385.27,
      product_img:
        "https://images.pexels.com/photos/30237884/pexels-photo-30237884.jpeg/",
    },
    {
      product_name: "concrete magnesium float",
      product_category: "construction tools",
      product_description:
        "a long 16' piece of metal meant to detail fresh concrete",
      basic_price: 54.98,
      product_img:
        "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
    },
    {
      product_name: "shovel",
      product_category: "construction tools",
      product_description: "Meant to dig ",
      basic_price: 32.98,
      product_img:
        "https://images.pexels.com/photos/7276957/pexels-photo-7276957.jpeg",
    },
    {
      product_name: "skid steer ",
      product_category: "construction tools",
      product_description: " a front loading piece of equipment",
      basic_price: 44995.0,
      product_img:
        "https://images.pexels.com/photos/25559744/pexels-photo-25559744.jpeg",
    },
    {
      product_name: "mini excavator",
      product_category: "construction tools",
      product_description: "a better shovel",
      basic_price: 25000.0,
      product_img:
        "https://images.pexels.com/photos/31461653/pexels-photo-31461653.jpeg",
    },
    {
      product_name: "nail gun ",
      product_category: "construction tools",
      product_description: " a air powered nail driver ",
      basic_price: 299.11,
      product_img:
        "https://images.pexels.com/photos/6473980/pexels-photo-6473980.jpeg",
    },
    {
      product_name: "hammer",
      product_category: "construction tools",
      product_description: " a metal hammer ",
      basic_price: 29.94,
      product_img:
        "https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg",
    },
    {
      product_name: "pizza",
      product_category: "food",
      product_description: "a circle cut into triangles",
      basic_price: 12.29,
      product_img:
        "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg",
    },
    {
      product_name: "pasta",
      product_category: "food",
      product_description: " noodles",
      basic_price: 1.99,
      product_img:
        "https://images.pexels.com/photos/5907896/pexels-photo-5907896.jpeg",
    },
    {
      product_name: "tacos",
      product_category: "food",
      product_description: "meat in tortilla ",
      basic_price: 12.0,
      product_img:
        "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg",
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
  for (const product of products) {
    await createProducts(product);
  }
  console.log("completed seeding products");
}
