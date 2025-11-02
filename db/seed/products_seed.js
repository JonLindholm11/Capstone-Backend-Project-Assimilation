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
        "Classic 4-hole plastic sewing button with smooth finish that's been holding garments together since before zippers tried to make them obsolete. These versatile 1.5cm buttons are the unsung heroes of your wardrobe, equally at home on a crisp dress shirt or a cozy cardigan. The durable plastic construction resists cracking and fading, while the traditional 4-hole design ensures secure attachment that won't pop off at the worst possible moment. Available in neutral colors that complement any fabric, these buttons are perfect for repairs, replacements, or adding that finishing touch to your handmade creations. Keep a stash in your sewing kit—you'll be the hero when someone loses a button before an important meeting.",
      basic_price: 0.49,
      product_img:
        "https://images.pexels.com/photos/39548/sewing-needle-thread-mend-eye-of-needle-39548.jpeg",
    },
    {
      product_name: "cotton thread",
      product_category: "sewing notions",
      product_description:
        "Premium 100% cotton all-purpose sewing thread that's stronger than your commitment to finishing that quilt you started three years ago. This 200-yard spool delivers consistent stitch quality with minimal lint buildup, making it perfect for both hand sewing and machine work. The natural cotton fibers create seams that breathe and move with fabric, ideal for quilting, garment construction, and general repairs. Unlike synthetic threads that can melt under high heat, cotton thread is iron-safe and won't damage delicate fabrics. The smooth, even texture feeds cleanly through your machine without breaking or tangling, while the colorfast dye won't bleed onto your precious projects. Whether you're piecing together a masterpiece or just hemming pants, this thread has you covered.",
      basic_price: 2.99,
      product_img:
        "https://images.pexels.com/photos/1212179/pexels-photo-1212179.jpeg",
    },
    {
      product_name: "measuring tape",
      product_category: "sewing notions",
      product_description:
        "Flexible 60-inch measuring tape that's far more honest than your bathroom scale and way more useful. This essential sewing tool features dual-sided markings in both inches and centimeters, because international pattern sizing shouldn't require a math degree. The soft, flexible design conforms perfectly to body curves and fabric edges for accurate measurements every time, while the durable construction resists stretching and tearing even after years of use. Large, easy-to-read numbers mean no squinting required, and the contrasting colors help you quickly find the right measurement. The convenient retractable design keeps it tidy in your sewing basket, and the metal end tab ensures the tape stays put while you measure. Perfect for tailoring, alterations, crafting, or proving that one size definitely doesn't fit all.",
      basic_price: 3.49,
      product_img:
        "https://images.pexels.com/photos/3143085/pexels-photo-3143085.jpeg",
    },
    {
      product_name: "pin (100 ct)",
      product_category: "sewing notions",
      product_description:
        "Premium nickel-plated dressmaker pins that hold fabric together better than your New Year's resolutions. This 100-count box of 1.5-inch pins features ultra-smooth shanks that glide through delicate fabrics without snagging, pulling, or leaving permanent holes. The sharp, precision-ground points pierce cleanly through multiple layers, while the rust-resistant nickel plating ensures they won't stain your pristine white wedding dress fabric. Sturdy enough for heavy-duty projects yet gentle on silks and satins, these pins are the workhorses of any sewing room. The standard 1.5-inch length makes them easy to spot and grab, reducing the risk of accidentally sewing over them—though we all know it happens anyway. Keep them corralled in a pin cushion and resist the magnetic pull of your carpet.",
      basic_price: 3.99,
      product_img:
        "https://images.pexels.com/photos/805920/pexels-photo-805920.jpeg",
    },
    {
      product_name: "rotary cutter",
      product_category: "sewing notions",
      product_description:
        "Professional 45mm rotary cutter with a razor-sharp blade that slices through fabric like butter—just keep your fingers out of the way. This quilter's best friend features an ergonomic soft-grip handle that reduces hand fatigue during marathon cutting sessions, while the precision-ground circular blade delivers clean, straight cuts through multiple layers of fabric in one smooth motion. The essential safety lock mechanism protects both you and the blade when not in use, because emergency room visits really slow down project completion. The 45mm blade size hits the sweet spot between maneuverability and cutting power, perfect for everything from intricate curves to long straight edges. Compatible with standard cutting mats and quilting rulers, this tool transforms fabric cutting from a chore into a satisfying experience. Warning: using scissors after this feels like going back to a flip phone.",
      basic_price: 13.99,
      product_img:
        "https://images.pexels.com/photos/1409217/pexels-photo-1409217.jpeg",
    },
    {
      product_name: "sewing machine",
      product_category: "sewing notions",
      product_description:
        "Versatile portable electric sewing machine that turns fabric and thread into finished projects faster than you can say 'I could just buy this at the store.' This beginner-friendly machine features a selection of essential stitches including straight, zigzag, and decorative options, giving you creative flexibility without overwhelming complexity. The convenient drop-in bobbin system eliminates threading frustration, while the free arm design makes sewing cuffs, sleeves, and pant hems a breeze. Variable speed control lets you start slow and build confidence, and the built-in light illuminates your work area for precision stitching. Lightweight and compact enough to store in a closet or carry to classes, yet sturdy enough for everything from basic repairs to garment construction. Includes essential accessories like presser feet, bobbins, and needles to get you started immediately.",
      basic_price: 99.99,
      product_img:
        "https://images.pexels.com/photos/2249290/pexels-photo-2249290.jpeg",
    },
    {
      product_name: "scissors",
      product_category: "sewing notions",
      product_description:
        "Professional 8-inch dressmaker shears with stainless steel blades so sharp they could cut through awkward silence—but please stick to fabric. These precision-crafted shears feature the classic offset handle design that keeps your knuckles safely above the cutting surface, allowing for smooth, comfortable cuts through multiple layers of fabric. The premium stainless steel blades maintain their razor edge through countless projects and resist rust even in humid sewing rooms. The longer blade length provides excellent cutting leverage for everything from delicate silks to heavy denim, while the comfortable grip reduces hand fatigue during extended cutting sessions. Unlike those regular scissors your family keeps stealing, these are FABRIC ONLY—using them on paper will dull the blades and earn you the eternal wrath of quilters everywhere. A true investment piece that will last decades.",
      basic_price: 8.49,
      product_img:
        "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg",
    },
    {
      product_name: "sewing kit",
      product_category: "sewing notions",
      product_description:
        "Comprehensive compact sewing kit that packs more utility per square inch than a Swiss Army knife, minus the risk of confiscation at airport security. This all-in-one emergency kit includes an assortment of hand-sewing needles, mini scissors sharp enough for quick fixes, color-coordinated thread cards, straight pins, a protective thimble, and a mini tape measure—basically everything you need to handle wardrobe malfunctions before they become wardrobe catastrophes. The sturdy portable case keeps everything organized and prevents needles from escaping into your luggage or desk drawer. Perfect for travel, dorm rooms, office drawers, or anyone who believes in being prepared. Whether you're reattaching a button before a presentation, hemming pants in a hotel room, or performing emergency repairs on your kid's costume five minutes before the school play, this kit has saved more moments than anyone wants to admit.",
      basic_price: 11.49,
      product_img:
        "https://images.pexels.com/photos/461035/pexels-photo-461035.jpeg",
    },
    {
      product_name: "Cordless Circular Saw",
      product_category: "construction tools",
      product_description:
        "Professional-grade cordless circular saw that cuts through lumber like a hot knife through butter, powered by battery technology that finally freed us from the tyranny of extension cords. This powerhouse tool features a brushless motor that delivers consistent cutting performance and extended runtime, while the high-capacity lithium-ion battery keeps you working longer between charges. The 7.25-inch carbide-tipped blade handles everything from framing lumber to sheet goods with clean, precise cuts. Electronic brake stops the blade quickly for safety, while the LED work light illuminates your cut line in dim conditions. Ergonomic design with rubberized grip reduces fatigue during all-day jobs, and the tool-free depth and bevel adjustments let you make quick changes on the fly. Compatible with a full system of batteries and chargers that work across multiple tools. Whether you're framing a house or building a deck, this saw delivers pro-level performance without the cord hassle.",
      basic_price: 385.27,
      product_img:
        "https://images.pexels.com/photos/30237884/pexels-photo-30237884.jpeg/",
    },
    {
      product_name: "concrete magnesium float",
      product_category: "construction tools",
      product_description:
        "Professional 16-foot magnesium concrete float that transforms rough concrete into smooth, finished surfaces with the finesse of a master craftsman. This lightweight yet incredibly durable tool is the secret weapon of concrete finishers everywhere, designed to level and smooth freshly poured concrete slabs, walkways, and driveways. The magnesium construction offers the perfect balance—light enough to maneuver all day without your arms falling off, yet rigid enough to bridge low spots and knock down high spots for a perfectly flat surface. The long 16-foot reach lets you finish large areas from the edge without walking on wet concrete, while the straight edge produces that professional-grade flatness that separates the pros from the amateurs. Rounded edges prevent gouging, and the corrosion-resistant material cleans up easily and lasts for years of heavy use. Essential for any concrete work from residential driveways to commercial floors.",
      basic_price: 54.98,
      product_img:
        "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
    },
    {
      product_name: "shovel",
      product_category: "construction tools",
      product_description:
        "Heavy-duty round-point shovel that's been humanity's best friend since before we invented the wheel—and honestly, sometimes more useful. This workhorse tool features a forged steel blade that can bite into hard-packed soil, clay, and gravel without bending or breaking, perfect for digging holes, trenching, moving materials, or any task that requires moving earth from point A to point B. The sharp point penetrates tough ground easily, while the dished blade design holds more material per scoop than flat alternatives. Premium hardwood handle with reinforced connection absorbs shock and provides comfortable grip even during extended use. The D-grip handle gives you excellent leverage and control for maximum digging efficiency. Whether you're planting trees, installing fence posts, digging foundations, or just proving that manual labor builds character, this shovel won't let you down. Simple, reliable, and built to outlast trends in power tools.",
      basic_price: 32.98,
      product_img:
        "https://images.pexels.com/photos/7276957/pexels-photo-7276957.jpeg",
    },
    {
      product_name: "skid steer ",
      product_category: "construction tools",
      product_description:
        "Compact yet mighty skid steer loader that's basically a Swiss Army knife on tracks, ready to tackle any job site challenge you throw at it. This versatile powerhouse combines impressive lifting capacity with a tight turning radius, making it perfect for working in confined spaces where larger equipment fears to tread. The front-loading bucket moves earth, gravel, snow, and materials with ease, while the quick-attach system lets you swap between dozens of attachments—augers, trenchers, pallet forks, grapples, and more—in minutes. Enclosed cab with climate control keeps operators comfortable in any weather, while intuitive joystick controls make operation smooth even for less experienced operators. Powerful engine delivers serious torque for pushing, lifting, and digging, yet the compact footprint means less site damage and easier transport. Whether you're grading, excavating, demolishing, or landscaping, this machine multiplies your productivity and eliminates the need for multiple specialized tools. The ultimate job site multitasker.",
      basic_price: 44995.0,
      product_img:
        "https://images.pexels.com/photos/25559744/pexels-photo-25559744.jpeg",
    },
    {
      product_name: "mini excavator",
      product_category: "construction tools",
      product_description:
        "Compact mini excavator that's essentially a much better shovel, if that shovel was powered by hydraulics and could dig a basement in a day. This nimble machine delivers serious digging power in a package small enough to fit through standard gates and navigate tight residential job sites. The 360-degree rotating cab gives you full visibility and reach without repositioning the machine, while precision hydraulic controls allow for delicate work around utilities or aggressive digging in tough soil. Rubber tracks minimize lawn damage and provide excellent traction on slopes and unstable ground. The enclosed cab protects operators from the elements, and the auxiliary hydraulics let you run attachments like augers, breakers, and grapples. Despite its compact size, this excavator digs deep—perfect for foundation work, trenching for utilities, landscaping projects, or any job where you need excavator power without the footprint of full-size equipment. Makes short work of projects that would take days with hand tools.",
      basic_price: 25000.0,
      product_img:
        "https://images.pexels.com/photos/31461653/pexels-photo-31461653.jpeg",
    },
    {
      product_name: "nail gun ",
      product_category: "construction tools",
      product_description:
        "Professional pneumatic framing nailer that drives nails with the satisfying thunk of productivity, turning hours of hammer work into minutes of trigger pulls. This air-powered beast fires 16-penny nails through lumber, plywood, and engineered wood with precision and authority, making framing, decking, and sheathing projects fly by at lightning speed. The tool-free depth adjustment lets you set nails flush or countersunk perfectly every time, while the anti-jam mechanism keeps you working instead of clearing misfires. Lightweight magnesium housing reduces fatigue during all-day use, and the no-mar tip protects finished surfaces from dings and scratches. Sequential and bump-fire modes give you flexibility between precision placement and rapid-fire production work. Connect it to any standard air compressor and experience the joy of never having to swing a hammer again—your arm will thank you. Whether you're building a house, constructing a deck, or tackling a major renovation, this nail gun is the difference between a weekend project and a month-long ordeal.",
      basic_price: 299.11,
      product_img:
        "https://images.pexels.com/photos/6473980/pexels-photo-6473980.jpeg",
    },
    {
      product_name: "hammer",
      product_category: "construction tools",
      product_description:
        "Classic 20-ounce framing hammer with forged steel head that's been the go-to problem solver since the Bronze Age—some technologies just can't be improved upon. This perfectly balanced tool features a smooth face for driving nails flush and a milled face for aggressive gripping when you need extra bite. The precision-weighted head delivers maximum striking force with minimal effort, while the straight claw provides excellent leverage for pulling nails and prying boards. Premium fiberglass handle with anti-vibration technology absorbs shock to reduce arm fatigue and prevent repetitive stress injuries. Textured rubber grip ensures secure hold even when your hands are sweaty or wearing gloves. Unlike fancy power tools that need batteries, compressors, or electrical outlets, this hammer works anywhere, anytime, forever. Essential for framing, demolition, concrete forming, or just having a reliable tool that will never let you down. The ultimate backup tool when technology fails—and it always fails eventually.",
      basic_price: 29.94,
      product_img:
        "https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg",
    },
    {
      product_name: "pizza",
      product_category: "food",
      product_description:
        "Artisan wood-fired pizza with a perfectly charred crust that's crispy on the outside, pillowy on the inside—basically a circle cut into triangles, but make it gourmet. This hand-tossed masterpiece features premium mozzarella that stretches for days, tangy tomato sauce made from San Marzano tomatoes, and fresh basil that was probably still growing an hour ago. The 12-inch pie is generously topped and baked in a blazing hot oven that creates those coveted leopard spots on the crust. Whether you're feeding a family, fueling a study session, or just embracing your carb-loading destiny, this pizza delivers that perfect balance of cheese, sauce, and dough that makes every slice a celebration. Pairs excellently with procrastination and binge-watching. Warning: may cause heated debates about pineapple as a topping.",
      basic_price: 12.29,
      product_img:
        "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg",
    },
    {
      product_name: "pasta",
      product_category: "food",
      product_description:
        "Premium Italian-style pasta made from durum wheat semolina that transforms simple noodles into a foundation for culinary masterpieces. This 16-ounce package of perfectly extruded pasta holds sauce like it's getting paid for it, with a textured surface that grabs every drop of your favorite marinara, alfredo, or pesto. Cooks to al dente perfection in just 8-10 minutes, delivering that ideal bite with just enough chew to remind you it's authentic. Versatile enough for everything from quick weeknight dinners to elaborate Italian feasts, this pasta is the blank canvas your sauce has been waiting for. Each serving provides sustained energy and that comforting carb satisfaction humans have been craving since ancient Rome. Pairs perfectly with literally anything you can imagine, from simple butter and garlic to elaborate Bolognese. The ultimate pantry staple that's saved more last-minute dinner emergencies than we can count.",
      basic_price: 1.99,
      product_img:
        "https://images.pexels.com/photos/5907896/pexels-photo-5907896.jpeg",
    },
    {
      product_name: "tacos",
      product_category: "food",
      product_description:
        "Street-style tacos featuring perfectly seasoned meat cradled in warm, soft corn tortillas—because sometimes the best things in life really are just meat in a tortilla. This trio of handheld heaven comes loaded with your choice of carne asada, al pastor, or carnitas, each slow-cooked to tender perfection with authentic spices and techniques passed down through generations. Topped with fresh cilantro, diced onions, and a squeeze of lime that brightens every bite, these tacos deliver explosive flavor in a compact, no-utensils-required package. The double-layered tortillas prevent structural failure mid-bite, while the perfectly balanced toppings ensure every element shines. Served with vibrant salsa verde or smoky salsa roja on the side for customizable heat levels. Whether you're grabbing lunch on the go, feeding a crowd, or just living your best life, these tacos prove that simplicity done right beats complexity every time. Warning: one order is never enough.",
      basic_price: 12.0,
      product_img:
        "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg",
    },
    {
      product_name: "White Bread",
      product_category: "food",
      product_description:
        "Classic soft white sandwich bread that's been the backbone of lunches since sliced bread became the standard by which all innovations are measured. This freshly baked loaf features a tender, pillowy crumb that's perfect for everything from PB&J sandwiches to French toast to emergency midnight toast cravings. The thin, delicate crust provides just enough structure without interfering with your sandwich-eating experience, while the consistent slice thickness ensures uniform toasting and perfect bread-to-filling ratios. Enriched with vitamins and minerals, each slice offers sustenance beyond just carbs. The subtle sweetness and neutral flavor make it the ultimate versatile bread—it won't compete with your fillings but provides that essential bread foundation we all need. Stays fresh for days when properly stored, though let's be honest, the loaf rarely lasts that long. The tried-and-true choice for those who appreciate bread that knows its place: everywhere.",
      basic_price: 2.99,
      product_img:
        "https://images.pexels.com/photos/2942327/pexels-photo-2942327.jpeg",
    },
    {
      product_name: "Chicken breast",
      product_category: "food",
      product_description:
        "Premium boneless, skinless chicken breast that's the ultimate blank canvas for healthy eating and meal prep mastery, sold per pound for maximum flexibility. This lean protein powerhouse delivers all the muscle-building nutrition fitness enthusiasts crave with minimal fat, making it the go-to choice for everyone from bodybuilders to families watching their health. The tender, juicy meat grills, bakes, sautés, or stir-fries beautifully, absorbing marinades and seasonings like a flavor sponge while maintaining that satisfying meaty texture. Each pound yields generous portions perfect for salads, sandwiches, pasta dishes, or solo protein servings. Fresh, never frozen, and trimmed to perfection with no waste—just pure, versatile chicken ready to become tonight's dinner hero. Whether you're meal-prepping for the week, feeding picky eaters who 'only eat chicken nuggets,' or crafting restaurant-quality dishes at home, this chicken breast delivers consistent quality and endless possibilities.",
      basic_price: 7.99,
      product_img:
        "https://images.pexels.com/photos/5769384/pexels-photo-5769384.jpeg",
    },
    {
      product_name: "Banana",
      product_category: "food",
      product_description:
        "Nature's perfect portable snack that comes in its own biodegradable wrapper, priced per pound so you can grab as many as you need. These naturally sweet tropical fruits deliver instant energy with a perfect blend of natural sugars, potassium, and fiber that keeps you fueled without the crash. The creamy texture and mild, universally beloved flavor make bananas equally at home in breakfast smoothies, on top of cereal, baked into bread, or just eaten straight while running out the door. They arrive perfectly yellow and ripen at your preferred pace—green if you like them firm and slightly tangy, spotted if you prefer maximum sweetness. The natural potassium helps prevent muscle cramps, making these the athlete's best friend and the reason you see runners eating them before races. Versatile enough for babies learning to eat solid foods and adults who never outgrew banana appreciation. The fruit that's been fueling humanity's adventures since ancient times, now conveniently available without climbing trees.",
      basic_price: 3.99,
      product_img:
        "https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg",
    },
    {
      product_name: "Strawberry",
      product_category: "food",
      product_description:
        "Fresh, ruby-red strawberries bursting with sweet-tart flavor that tastes like summer distilled into berry form, priced per pound for flexible portions. These plump, juicy berries are hand-selected at peak ripeness, delivering that perfect balance of sweetness and acidity that makes your taste buds do a happy dance. Each berry features vibrant red flesh dotted with tiny seeds and topped with a jaunty green cap—nature's way of making fruit Instagram-worthy. Rich in vitamin C and antioxidants, strawberries offer guilt-free indulgence whether eaten fresh by the handful, sliced over yogurt and cereal, blended into smoothies, or dipped in chocolate for maximum decadence. The natural sugars provide quick energy without processed sugar's downsides. Versatile enough for everything from elegant desserts to casual snacking, these berries elevate any dish they touch. Perfect for making jam, topping shortcake, or proving that healthy food can absolutely taste amazing. Warning: one pound disappears faster than you'd think.",
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
